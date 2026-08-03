import { Reveal } from "@/components/brand/Reveal";
import { Section, SectionHeading } from "@/components/brand/Section";
import { steps } from "@/content/site";

/** Six-step onboarding timeline. */
export function HowItWorks() {
  return (
    <Section ariaLabelledBy="how-heading">
      <SectionHeading
        id="how-heading"
        eyebrow="How It Works"
        title="Six steps from first call to guaranteed rent"
        intro="A defined process with no ambiguity about what happens next, or when."
        align="center"
      />

      <ol className="relative mt-16 space-y-4 md:space-y-0">
        <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-[27px] w-px bg-border md:hidden"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <Reveal as="li" key={step.number} delay={index * 0.06}>
              <div className="relative h-full rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-card">
                <span className="grid h-14 w-14 place-items-center rounded-full border border-gold/30 bg-gold-soft/40 font-display text-base font-semibold text-navy">
                  {step.number}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </ol>
    </Section>
  );
}
