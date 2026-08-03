import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/** Compact hero used at the top of every interior page, with breadcrumbs. */
export function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  breadcrumb: string;
}) {
  const reduced = useReducedMotion();

  return (
    <section className="border-b border-border bg-surface px-5 py-16 sm:px-8 md:py-20">
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-6xl"
      >
        <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
          <ol className="flex items-center gap-2">
            <li>
              <Link to="/" className="transition-colors hover:text-navy">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-navy">{breadcrumb}</li>
          </ol>
        </nav>

        <p className="eyebrow mt-6">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold text-balance text-navy sm:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {intro}
          </p>
        )}
      </motion.div>
    </section>
  );
}
