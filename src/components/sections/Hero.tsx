import { motion, useReducedMotion } from "motion/react";
import heroImage from "@/assets/hero-uk-houses.jpg";
import { ActionLink } from "@/components/brand/ActionButton";

/** Home page hero. The image is the LCP element, so it is eagerly loaded. */
export function Hero() {
  const reduced = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Living room of a premium modern London apartment with city skyline views"
          width={1600}
          height={1200}
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-navy via-navy/92 to-navy/55"
        />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 md:py-36 lg:py-44">
        <motion.p {...fade(0)} className="eyebrow">
          UK Company Let Specialists
        </motion.p>

        <motion.h1
          {...fade(0.08)}
          className="mt-5 max-w-3xl text-4xl leading-[1.08] font-semibold text-balance sm:text-5xl lg:text-6xl"
        >
          Guaranteed Rent.
          <br />
          Professional Property Management.
          <br />
          <span className="text-gold">Long-Term Partnerships.</span>
        </motion.h1>

        <motion.p
          {...fade(0.16)}
          className="mt-7 max-w-xl text-base leading-relaxed text-navy-foreground/80 sm:text-lg"
        >
          Helping landlords maximise returns through professional company let solutions
          and guaranteed monthly income.
        </motion.p>

        <motion.div {...fade(0.24)} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ActionLink to="/contact" variant="gold" size="lg">
            Get Free Property Assessment
          </ActionLink>
          <ActionLink to="/contact" variant="ghostLight" size="lg">
            Contact Us
          </ActionLink>
        </motion.div>

        <motion.dl
          {...fade(0.32)}
          className="mt-16 grid max-w-2xl grid-cols-2 gap-8 border-t border-navy-foreground/15 pt-8 sm:grid-cols-3"
        >
          {[
            { term: "Fixed monthly income", detail: "Paid on the same date, every month" },
            { term: "Zero void exposure", detail: "Occupancy risk carried by us" },
            { term: "Terms up to 5 years", detail: "Structured around your horizon" },
          ].map((item) => (
            <div key={item.term}>
              <dt className="font-display text-sm font-semibold text-gold">{item.term}</dt>
              <dd className="mt-1 text-sm text-navy-foreground/70">{item.detail}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
