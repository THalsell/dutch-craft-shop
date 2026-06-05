import { Container } from "@/components/layout/container";

const REVIEWS = [
  {
    name: "Sarah M.",
    location: "Ohio",
    rating: 5,
    text: "I've tried so many mattresses over the years and nothing compares to my Dutch Craft. The quality is immediately obvious — it's like sleeping on a cloud every single night.",
  },
  {
    name: "James T.",
    location: "Pennsylvania",
    rating: 5,
    text: "My back pain is gone. I was skeptical, but the Orthopedic Series changed everything. Worth every penny.",
  },
  {
    name: "Linda K.",
    location: "Indiana",
    rating: 5,
    text: "Free delivery, white glove setup, and the most comfortable mattress I've ever owned. Dutch Craft has a customer for life.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-border"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292Z" />
        </svg>
      ))}
    </div>
  );
}

export function ReviewsPreview() {
  return (
    <section className="py-20 bg-fog border-y border-border">
      <Container>
        <div className="text-center mb-12">
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-navy mb-3">
            Customer Reviews
          </p>
          <h2 className="font-display text-4xl font-semibold text-charcoal">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-xl p-6 border border-border flex flex-col gap-4"
            >
              <Stars count={review.rating} />
              <p className="text-slate text-sm leading-relaxed flex-1">"{review.text}"</p>
              <div>
                <p className="font-semibold text-charcoal text-sm">{review.name}</p>
                <p className="text-xs text-muted">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
