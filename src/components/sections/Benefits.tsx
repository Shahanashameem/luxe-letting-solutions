import { Reveal } from "@/components/brand/Reveal";
import { Section, SectionHeading } from "@/components/brand/Section";
import { benefits } from "@/content/site";

/** Eight landlord benefits, presented as a restrained bordered grid. */
export function Benefits() {
  return (
    <Section ariaLabelledBy="benefits-heading">
      <SectionHeading
        id="benefits-heading"
        eyebrow="Landlord Benefits"
        title="Ownership without the operational burden"
        intro="Everything a private landlord, agent or investor needs from a letting partner — income certainty, asset protection and a single accountable point of contact."
      />

      <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <Reveal
            as="li"
            key={benefit.title}
            delay={index * 0.04}
            className="group bg-background p-7 transition-colors hover:bg-surface"
          >
            <span className="font-display text-xs font-semibold tracking-[0.16em] text-gold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-base font-semibold text-navy">{benefit.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {benefit.description}
            </p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
