import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import interiorImage from "@/assets/interior-bedroom.jpg";
import { Reveal } from "@/components/brand/Reveal";
import { Section, SectionHeading } from "@/components/brand/Section";
import { PageHero } from "@/components/sections/PageHero";
import { FaqSection } from "@/components/sections/FaqSection";
import { CallToAction } from "@/components/sections/CallToAction";
import { faqs } from "@/content/site";
import { pageMeta } from "@/lib/seo";

const title = "Company Let Agreements Explained | STAYEST";
const description =
  "A company let places STAYEST as the named corporate tenant, taking contractual responsibility for rent, occupancy and property condition for the full term.";

const pageFaqs = faqs.filter((faq) => faq.group === "Company Let");

export const Route = createFileRoute("/company-let")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/company-let" }),
    links: [{ rel: "canonical", href: "/company-let" }],
  }),
  component: CompanyLetPage,
});

const protections = [
  {
    title: "A business as your tenant",
    body: "The agreement names STAYEST Ltd, not an individual. Responsibility for rent and condition sits with a registered company.",
  },
  {
    title: "Contracted term certainty",
    body: "Terms of one to five years remove the churn, re-letting costs and uncertainty of rolling tenancies.",
  },
  {
    title: "Documented condition",
    body: "A professional inventory and schedule of condition is prepared before occupancy and checked at the end of term.",
  },
  {
    title: "Defined permitted use",
    body: "The agreement states exactly how the property may be used and who may occupy it — nothing is left implied.",
  },
];

const suitability = [
  "Well-located flats, apartments and houses in employment centres",
  "Furnished or furnishable properties in good structural order",
  "Portfolios where consistent income matters more than peak rent",
  "New-build developments seeking reliable early-stage occupancy",
  "Properties currently sitting empty between tenancies",
];

function CompanyLetPage() {
  return (
    <>
      <PageHero
        eyebrow="Company Let"
        breadcrumb="Company Let"
        title="A corporate tenancy, not a private one"
        intro="Under a company let, your tenant is a business with a balance sheet, a reputation and a contract — rather than an individual with a deposit."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal direction="left">
            <p className="eyebrow">How It Differs</p>
            <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
              What changes when the tenant is a company
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              In a standard assured shorthold tenancy your income depends on one person's
              circumstances. In a company let it depends on a contract with a business that
              has agreed to pay regardless of who is living there.
            </p>
            <ul className="mt-8 space-y-3.5">
              {suitability.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-border">
              <img
                src={interiorImage}
                alt="Professionally furnished apartment bedroom prepared for corporate occupancy"
                width={1408}
                height={1008}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="surface" ariaLabelledBy="protections-heading">
        <SectionHeading
          id="protections-heading"
          eyebrow="Landlord Protections"
          title="Four protections built into every agreement"
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {protections.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-background p-8">
                <h3 className="font-display text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <FaqSection
        items={pageFaqs}
        tone="default"
        title="Company let questions"
        intro="The detail landlords check before signing a corporate agreement."
      />
      <CallToAction title="Discuss a company let for your property" />
    </>
  );
}
