import { createFileRoute } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
import { Reveal } from "@/components/brand/Reveal";
import { Section, SectionHeading } from "@/components/brand/Section";
import { PageHero } from "@/components/sections/PageHero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FaqSection } from "@/components/sections/FaqSection";
import { CallToAction } from "@/components/sections/CallToAction";
import { faqs } from "@/content/site";
import { pageMeta } from "@/lib/seo";

const title = "Guaranteed Rent Scheme for UK Landlords | STAYEST";
const description =
  "A fixed monthly rent paid on the same date every month, with void periods, arrears and management absorbed by STAYEST. No commission deducted.";

const pageFaqs = faqs.filter((faq) => faq.group === "Guaranteed Rent");

export const Route = createFileRoute("/guaranteed-rent")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/guaranteed-rent" }),
    links: [{ rel: "canonical", href: "/guaranteed-rent" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: pageFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }),
      },
    ],
  }),
  component: GuaranteedRentPage,
});

const covered = [
  "Fixed monthly payment, occupied or not",
  "Rent collection and arrears risk",
  "Void periods across the full term",
  "Routine cleaning and turnovers",
  "Day-to-day maintenance coordination",
  "Scheduled inspections and reporting",
];

const notCovered = [
  "Mortgage payments and ground rent",
  "Buildings insurance",
  "Structural repairs and major works",
  "Statutory landlord obligations",
];

const comparison = [
  { point: "Monthly income", stayest: "Fixed and contracted", traditional: "Variable, occupancy dependent" },
  { point: "Void periods", stayest: "Absorbed by STAYEST", traditional: "Borne by the landlord" },
  { point: "Management commission", stayest: "None deducted", traditional: "Typically 8–15% per month" },
  { point: "Tenant-find fees", stayest: "None", traditional: "Charged each new tenancy" },
  { point: "Arrears risk", stayest: "Carried by STAYEST", traditional: "Carried by the landlord" },
  { point: "Cleaning and turnover", stayest: "Included", traditional: "Landlord cost" },
];

function GuaranteedRentPage() {
  return (
    <>
      <PageHero
        eyebrow="Guaranteed Rent"
        breadcrumb="Guaranteed Rent"
        title="A fixed monthly income, contracted for the full term"
        intro="We agree a figure at the outset and pay it on the same date every month — whether the property is occupied, between occupants or undergoing works."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal className="rounded-2xl border border-border bg-background p-8">
            <h2 className="font-display text-xl font-semibold text-navy">
              What the agreement covers
            </h2>
            <ul className="mt-6 space-y-3.5">
              {covered.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="rounded-2xl border border-border bg-surface p-8">
            <h2 className="font-display text-xl font-semibold text-navy">
              What remains with you
            </h2>
            <ul className="mt-6 space-y-3.5">
              {notCovered.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-muted-foreground">
              The precise split is stated in your agreement before signature.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section tone="surface" ariaLabelledBy="comparison-heading">
        <SectionHeading
          id="comparison-heading"
          eyebrow="Comparison"
          title="Guaranteed rent against traditional letting"
          align="center"
        />
        <Reveal className="mt-12 overflow-x-auto rounded-2xl border border-border bg-background">
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <caption className="sr-only">
              Comparison of a STAYEST guaranteed rent agreement with traditional letting
            </caption>
            <thead>
              <tr className="border-b border-border">
                <th scope="col" className="px-6 py-4 font-display text-navy">
                  &nbsp;
                </th>
                <th scope="col" className="px-6 py-4 font-display text-navy">
                  STAYEST
                </th>
                <th scope="col" className="px-6 py-4 font-display text-muted-foreground">
                  Traditional letting
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.point} className="border-b border-border last:border-0">
                  <th scope="row" className="px-6 py-4 font-medium text-navy">
                    {row.point}
                  </th>
                  <td className="px-6 py-4 text-foreground">{row.stayest}</td>
                  <td className="px-6 py-4 text-muted-foreground">{row.traditional}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Section>

      <HowItWorks />
      <FaqSection
        items={pageFaqs}
        tone="surface"
        title="Guaranteed rent questions"
        intro="What landlords ask before agreeing a fixed monthly figure."
      />
      <CallToAction title="Find out your guaranteed monthly figure" />
    </>
  );
}
