import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ActionLink } from "@/components/brand/ActionButton";
import { Reveal } from "@/components/brand/Reveal";
import { Section, SectionHeading } from "@/components/brand/Section";
import { services } from "@/content/site";

/** Services overview grid, reused on the home page and the services page. */
export function ServicesGrid({ withCta = true }: { withCta?: boolean }) {
  return (
    <Section tone="surface" ariaLabelledBy="services-heading">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading
          id="services-heading"
          eyebrow="Our Services"
          title="A complete letting and management service"
          intro="Seven disciplines delivered by one in-house team, under one agreement."
        />
        {withCta && (
          <Reveal delay={0.1}>
            <ActionLink to="/services" variant="outline">
              View all services
            </ActionLink>
          </Reveal>
        )}
      </div>

      <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal as="li" key={service.slug} delay={index * 0.05}>
            <Link
              to="/services"
              hash={service.slug}
              className="flex h-full flex-col rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-elegant"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-navy">{service.title}</h3>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {service.summary}
              </p>
            </Link>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
