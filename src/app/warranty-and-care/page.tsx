import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = { title: "Warranty & Care" };

// ─── Data ────────────────────────────────────────────────────────────────────

const WARRANTY_ROWS = [
  { warranty: "Warranty A", duration: "1 Year",   type: "Non-Prorated" },
  { warranty: "Warranty B", duration: "3 Years",  type: "Non-Prorated" },
  { warranty: "Warranty C", duration: "5 Years",  type: "Non-Prorated" },
  { warranty: "Warranty D", duration: "8 Years",  type: "Non-Prorated" },
  { warranty: "Warranty E", duration: "10 Years", type: "Non-Prorated" },
  { warranty: "Warranty F", duration: "12 Years", type: "Non-Prorated" },
  { warranty: "Warranty G", duration: "15 Years", type: "Non-Prorated" },
  { warranty: "Warranty H", duration: "20 Years", type: "Non-Prorated" },
];

const COVERED = [
  "Manufacturing defects in materials and workmanship",
  "Body impressions greater than 1.5 inches",
  "Structural defects in coils or foam",
];

const NOT_COVERED = [
  "Cover fabric and handles",
  "Normal wear and comfort preferences",
  "Damage from improper support or misuse",
];

const REQUIREMENTS = [
  "Original purchase receipt is required",
  "Mattress must be clean and unstained",
  "Proper foundation with center support must be used",
  "Law tag must be attached for identification",
  "Transportation costs are customer responsibility",
  "Repair or replacement at Dutch Craft's discretion",
];

const DOS = [
  { title: "Rotate regularly", detail: "Every 3–6 months to ensure even wear" },
  { title: "Use proper support", detail: "A quality foundation or platform bed" },
  { title: "Use a mattress protector", detail: "Protects against spills and stains" },
  { title: "Keep the law tag", detail: "Required for warranty identification" },
  { title: "Allow to breathe", detail: "Use breathable bedding materials" },
  { title: "Spot clean when needed", detail: "Use mild soap and water" },
];

const DONTS = [
  { title: "Don't bend or fold", detail: "Can damage internal structure" },
  { title: "Don't jump on the mattress", detail: "Causes premature wear" },
  { title: "Don't use without support", detail: "Floor use voids warranty" },
  { title: "Don't remove the law tag", detail: "Needed for warranty claims" },
  { title: "Don't soak or steam clean", detail: "Moisture damages materials" },
  { title: "Don't use improper foundations", detail: "Ensure center support for queen+" },
];

// ─── Icons ────────────────────────────────────────────────────────────────────

function CheckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WarrantyAndCarePage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>

        {/* ── Section 1: Warranty Overview ── */}
        <section className="bg-white py-16">
          <Container>
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-navy mb-3">
              Coverage
            </p>
            <h1 className="font-display text-4xl font-semibold text-charcoal">
              Warranty Overview
            </h1>
            <p className="mt-3 text-slate text-sm leading-relaxed max-w-2xl">
              All Dutch Craft warranties are non-prorated, meaning you get full coverage for the entire warranty period.
            </p>

            <div className="mt-10 overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wider">Warranty</th>
                    <th className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wider">Duration</th>
                    <th className="px-6 py-3.5 text-left text-xs font-semibold uppercase tracking-wider">Type</th>
                  </tr>
                </thead>
                <tbody>
                  {WARRANTY_ROWS.map((row, i) => (
                    <tr key={row.warranty} className={i % 2 === 0 ? "bg-white" : "bg-fog"}>
                      <td className="px-6 py-4 font-medium text-charcoal">{row.warranty}</td>
                      <td className="px-6 py-4 text-slate">{row.duration}</td>
                      <td className="px-6 py-4">
                        <Badge variant="sky">{row.type}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs text-muted leading-relaxed">
              Warranty length varies by mattress model. Check your specific product for warranty details, or ask your retailer.
            </p>
          </Container>
        </section>

        {/* ── Section 2: Warranty Terms ── */}
        <section className="bg-fog py-16 border-y border-border">
          <Container>
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-navy mb-3">
              Terms
            </p>
            <h2 className="font-display text-4xl font-semibold text-charcoal mb-10">
              Warranty Terms
            </h2>

            {/* Covered / Not Covered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* What's Covered */}
              <div className="bg-white rounded-xl border border-border p-6">
                <div className="flex items-center gap-2 mb-5">
                  <CheckIcon className="w-5 h-5 text-green" />
                  <h3 className="font-display text-lg font-semibold text-charcoal">What&apos;s Covered</h3>
                </div>
                <ul className="space-y-3">
                  {COVERED.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon className="w-4 h-4 text-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's Not Covered */}
              <div className="bg-white rounded-xl border border-border p-6">
                <div className="flex items-center gap-2 mb-5">
                  <XIcon className="w-5 h-5 text-red-500" />
                  <h3 className="font-display text-lg font-semibold text-charcoal">What&apos;s Not Covered</h3>
                </div>
                <ul className="space-y-3">
                  {NOT_COVERED.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <XIcon className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Requirements */}
            <div className="mt-6 bg-white rounded-xl border border-border p-6">
              <h3 className="font-display text-lg font-semibold text-charcoal mb-5">
                Requirements for Warranty Claims
              </h3>
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
                {REQUIREMENTS.map((item, i) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-navy text-white text-xs font-semibold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-slate">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </section>

        {/* ── Section 3: Mattress Care ── */}
        <section className="bg-white py-16">
          <Container>
            <p className="font-sans text-sm font-semibold uppercase tracking-widest text-navy mb-3">
              Maintenance
            </p>
            <h2 className="font-display text-4xl font-semibold text-charcoal mb-10">
              Mattress Care
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Do's */}
              <div className="rounded-xl border border-sky/40 bg-sky/10 p-6">
                <div className="flex items-center gap-2 mb-5">
                  <CheckIcon className="w-6 h-6 text-navy" />
                  <h3 className="font-display text-lg font-semibold text-charcoal">Do&apos;s</h3>
                </div>
                <ul className="space-y-4">
                  {DOS.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <CheckIcon className="w-4 h-4 text-navy mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal">
                        <span className="font-medium">{item.title}</span>
                        <span className="text-slate"> — {item.detail}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Don'ts */}
              <div className="rounded-xl border border-red-200 bg-red-50 p-6">
                <div className="flex items-center gap-2 mb-5">
                  <XIcon className="w-6 h-6 text-red-500" />
                  <h3 className="font-display text-lg font-semibold text-charcoal">Don&apos;ts</h3>
                </div>
                <ul className="space-y-4">
                  {DONTS.map((item) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <XIcon className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-charcoal">
                        <span className="font-medium">{item.title}</span>
                        <span className="text-slate"> — {item.detail}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* ── CTA ── */}
        <section className="bg-navy py-16">
          <Container>
            <div className="text-center max-w-xl mx-auto">
              <h2 className="font-display text-4xl font-semibold text-white">
                Have Questions?
              </h2>
              <p className="mt-4 text-sky text-sm leading-relaxed">
                Contact your authorized Dutch Craft retailer or reach out to us directly for warranty inquiries or care questions.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-navy hover:bg-fog w-full sm:w-auto">
                  <Link href="/find-a-retailer">Find a Retailer</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-navy w-full sm:w-auto"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>

      </main>
      <Footer />
    </>
  );
}
