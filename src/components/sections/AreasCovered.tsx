import { MapPin } from "lucide-react";
import { Reveal } from "@/components/brand/Reveal";
import { Section, SectionHeading } from "@/components/brand/Section";
import { areas } from "@/content/site";

/** Coverage grid by region. */
export function AreasCovered({ tone = "surface" }: { tone?: "surface" | "default" }) {
  return (
    <Section tone={tone} ariaLabelledBy="areas-heading">
      <SectionHeading
        id="areas-heading"
        eyebrow="Areas We Cover"
        title="Operating across the United Kingdom"
        intro="Our strongest coverage is in and around major employment centres, where corporate demand is most consistent. If your property sits outside these areas, ask — we expand where demand justifies it."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {areas.map((area, index) => (
          <Reveal key={area.region} delay={index * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-background p-7">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" aria-hidden="true" />
                <h3 className="font-display text-base font-semibold text-navy">
                  {area.region}
                </h3>
              </div>
              <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
                {area.places.map((place) => (
                  <li key={place}>{place}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
