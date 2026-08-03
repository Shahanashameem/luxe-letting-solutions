import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Reveal } from "@/components/brand/Reveal";
import { Section } from "@/components/brand/Section";
import { PageHero } from "@/components/sections/PageHero";
import { CallToAction } from "@/components/sections/CallToAction";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { services } from "@/content/site";
import { pageMeta } from "@/lib/seo";

const title = "Property Services for UK Landlords | STAYEST";
const description =
  "Company let, guaranteed rent, property management, cleaning, guest management, maintenance coordination and property setup — delivered by one in-house team.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/services" }),
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Service",
              name: service.title,
              description: service.summary,
              areaServed: "United Kingdom",
              provider: { "@type": "Organization", name: "STAYEST" },
            },
          })),
        }),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        breadcrumb="Services"
        title="Seven services. One agreement. One accountable team."
        intro="Everything required to let, run and protect a residential property under a corporate agreement — with no separate contracts to manage."
      />

      <Section>
        <div className="space-y-6">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.03}>
              <article
                id={service.slug}
                className="scroll-mt-28 rounded-2xl border border-border bg-background p-8 transition-colors hover:border-gold/40 sm:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-14">
                  <div>
                    <span className="font-display text-xs font-semibold tracking-[0.16em] text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-3 text-2xl font-semibold text-navy sm:text-3xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {service.detail}
                    </p>
                  </div>
                  <ul className="grid gap-3 self-center rounded-xl bg-surface p-6">
                    {service.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <HowItWorks />
      <CallToAction title="Which service does your property need?" />
    </>
  );
}
