"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TEXTAREA_BASE =
  "w-full rounded-md border border-border bg-white px-3 py-2.5 text-sm text-charcoal placeholder:text-muted resize-y focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
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
      <div className="mt-8 rounded-md border border-green bg-green/5 px-6 py-10 text-center">
        <svg
          className="mx-auto mb-3 w-10 h-10 text-green"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <p className="font-medium text-charcoal text-lg">Message sent!</p>
        <p className="mt-1 text-sm text-slate">We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <Input
        label="Name"
        placeholder="Your name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        label="Email"
        type="email"
        placeholder="your@email.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-charcoal">Message</label>
        <textarea
          required
          rows={5}
          placeholder="How can we help you?"
          className={TEXTAREA_BASE}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}

      <Button type="submit" size="lg" disabled={status === "loading"} className="w-full">
        {status === "loading" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
