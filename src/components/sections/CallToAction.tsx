import { ActionLink } from "@/components/brand/ActionButton";
import { Reveal } from "@/components/brand/Reveal";

/** Closing call-to-action band used at the foot of interior pages. */
export function CallToAction({
  title = "Ready to see your guaranteed figure?",
  intro = "Book a free property assessment and receive a written proposal within one working day.",
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section aria-labelledby="cta-heading" className="bg-background px-5 py-20 sm:px-8 md:py-24">
      <Reveal className="mx-auto w-full max-w-6xl">
        <div className="rounded-3xl bg-navy px-8 py-14 text-center text-navy-foreground sm:px-14">
          <h2
            id="cta-heading"
            className="mx-auto max-w-2xl text-3xl font-semibold text-balance sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-navy-foreground/75">{intro}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ActionLink to="/contact" variant="gold" size="lg">
              Get Free Property Assessment
            </ActionLink>
            <ActionLink to="/services" variant="ghostLight" size="lg">
              Explore our services
            </ActionLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
