"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

const TEXTAREA_BASE =
  "w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm text-charcoal placeholder:text-muted resize-y focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy";

type FormData = {
  fullName: string;
  email: string;
  address: string;
  dateOfPurchase: string;
  mattressName: string;
  mattressSize: string;
  whyBought: string;
  dealershipName: string;
  dealershipCity: string;
  dealershipState: string;
  purchasedWithFoundation: string;
  dealershipFeedback: string;
};

const EMPTY: FormData = {
  fullName: "",
  email: "",
  address: "",
  dateOfPurchase: "",
  mattressName: "",
  mattressSize: "",
  whyBought: "",
  dealershipName: "",
  dealershipCity: "",
  dealershipState: "",
  purchasedWithFoundation: "",
  dealershipFeedback: "",
};

export function RegistrationForm() {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-10 rounded-md border border-green bg-green/5 px-6 py-10 text-center">
        <svg
          className="mx-auto mb-3 w-10 h-10 text-green"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <p className="font-medium text-charcoal text-lg">Registration submitted!</p>
        <p className="mt-1 text-sm text-slate">
          Your mattress warranty has been registered. We&apos;ll be in touch at{" "}
          <span className="font-medium text-charcoal">{form.email}</span>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-6">
      {/* Personal Info */}
      <div className="space-y-4">
        <Input
          label="Full Name"
          placeholder="Jane Smith"
          required
          value={form.fullName}
          onChange={set("fullName")}
        />
        <Input
          label="Email"
          type="email"
          placeholder="jane@example.com"
          required
          value={form.email}
          onChange={set("email")}
        />
        <Input
          label="Address"
          placeholder="Street address, city, state, ZIP"
          required
          value={form.address}
          onChange={set("address")}
        />
      </div>

      {/* Mattress Info */}
      <div className="space-y-4">
        <Input
          label="Date of Purchase"
          type="date"
          required
          value={form.dateOfPurchase}
          onChange={set("dateOfPurchase")}
        />
        <Input
          label="Mattress Name"
          placeholder="e.g. Posture Perfect"
          required
          value={form.mattressName}
          onChange={set("mattressName")}
        />
        <Input
          label="Mattress Size"
          placeholder="e.g. Queen"
          required
          value={form.mattressSize}
          onChange={set("mattressSize")}
        />
      </div>

      {/* Why Purchased */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-charcoal">
          Why did you buy this mattress?
        </label>
        <textarea
          required
          rows={3}
          placeholder="Tell us what drew you to this mattress..."
          className={TEXTAREA_BASE}
          value={form.whyBought}
          onChange={set("whyBought")}
        />
      </div>

      {/* Where Purchased */}
      <fieldset className="space-y-4">
        <legend className="text-sm font-medium text-charcoal">
          Where was this mattress purchased?
        </legend>
        <Input
          label="Dealership Name"
          placeholder="e.g. Sleep World"
          required
          value={form.dealershipName}
          onChange={set("dealershipName")}
        />
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="City"
            placeholder="e.g. Austin"
            required
            value={form.dealershipCity}
            onChange={set("dealershipCity")}
          />
          <Input
            label="State"
            placeholder="e.g. TX"
            required
            value={form.dealershipState}
            onChange={set("dealershipState")}
          />
        </div>
      </fieldset>

      {/* Foundation */}
      <fieldset>
        <legend className="text-sm font-medium text-charcoal mb-3">
          Was this mattress purchased with a matching foundation?
        </legend>
        <div className="flex items-center gap-6">
          {["Yes", "No"].map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="purchasedWithFoundation"
                value={opt}
                required
                checked={form.purchasedWithFoundation === opt}
                onChange={set("purchasedWithFoundation")}
                className={cn(
                  "h-4 w-4 border-border text-navy accent-navy",
                  "focus:ring-2 focus:ring-navy focus:ring-offset-1"
                )}
              />
              <span className="text-sm text-charcoal">{opt}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Dealership Feedback */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-charcoal">
          Dealership Feedback{" "}
          <span className="font-normal text-muted">(optional)</span>
        </label>
        <textarea
          rows={3}
          placeholder="Share your experience with the dealership..."
          className={TEXTAREA_BASE}
          value={form.dealershipFeedback}
          onChange={set("dealershipFeedback")}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "loading"}
        className="w-full sm:w-auto"
      >
        {status === "loading" ? "Submitting…" : "Submit Registration"}
      </Button>
    </form>
  );
}
