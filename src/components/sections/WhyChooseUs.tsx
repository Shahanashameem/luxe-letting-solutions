import { Check } from "lucide-react";
import meetingImage from "@/assets/business-meeting.jpg";
import { Reveal } from "@/components/brand/Reveal";

const reasons = [
  "Contracts written in plain English, with the responsibility split stated clearly",
  "A named account manager rather than a shared inbox",
  "Documented inspections with photography shared after every visit",
  "Insured, vetted contractors and an accountable maintenance desk",
  "No commission deducted from your agreed monthly figure",
  "Experience across single units, portfolios and new-build developments",
];

/** Why Choose Us section — reused on home and its own page. */
export function WhyChooseUs() {
  return (
    <section
      aria-labelledby="why-heading"
      className="bg-navy px-5 py-20 text-navy-foreground sm:px-8 md:py-28"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal direction="left">
          <p className="eyebrow">Why Choose Us</p>
          <h2
            id="why-heading"
            className="mt-3 text-3xl font-semibold text-balance sm:text-4xl"
          >
            A partner landlords keep, not one they tolerate
          </h2>
          <p className="mt-5 text-base leading-relaxed text-navy-foreground/75">
            We work with owners who want their property handled properly and their income
            to arrive without conversation. That means clear contracts, consistent
            standards and people who answer the phone.
          </p>

          <ul className="mt-8 space-y-4">
            {reasons.map((reason) => (
              <li key={reason} className="flex gap-3 text-sm text-navy-foreground/80">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <div className="overflow-hidden rounded-3xl border border-navy-foreground/10">
            <img
              src={meetingImage}
              alt="Two property professionals reviewing landlord agreement documents in a corporate meeting room"
              width={1408}
              height={1008}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
