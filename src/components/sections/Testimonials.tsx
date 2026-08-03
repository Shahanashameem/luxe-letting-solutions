import { Quote } from "lucide-react";
import { Reveal } from "@/components/brand/Reveal";
import { Section, SectionHeading } from "@/components/brand/Section";
import { testimonials } from "@/content/site";

/** Landlord testimonials. */
export function Testimonials() {
  return (
    <Section ariaLabelledBy="testimonials-heading">
      <SectionHeading
        id="testimonials-heading"
        eyebrow="Testimonials"
        title="What landlords and agents tell us"
        align="center"
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal as="article" key={item.name} delay={index * 0.07}>
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-surface p-8">
              <Quote className="h-6 w-6 text-gold" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-foreground">
                {item.quote}
              </blockquote>
              <figcaption className="mt-7 border-t border-border pt-5">
                <p className="font-display text-sm font-semibold text-navy">{item.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{item.role}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
