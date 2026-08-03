import type { ReactNode } from "react";
import { Reveal } from "@/components/brand/Reveal";
import { PageHero } from "./PageHero";

export type LegalSection = { heading: string; paragraphs: string[]; list?: string[] };

/**
 * Shared layout for the app-owner-maintained legal pages.
 * Content is rendered as plain JSX text — never raw HTML.
 */
export function LegalPage({
  eyebrow,
  title,
  intro,
  updated,
  sections,
  footnote,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
  footnote?: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} breadcrumb={eyebrow} title={title} intro={intro} />

      <section className="px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto w-full max-w-3xl">
          <p className="text-xs text-muted-foreground">Last updated: {updated}</p>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <Reveal key={section.heading}>
                <h2 className="font-display text-xl font-semibold text-navy">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="mt-4 text-sm leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-border bg-surface p-6 text-xs leading-relaxed text-muted-foreground">
            {footnote ?? (
              <p>
                This page is maintained by STAYEST and is provided for information only. It
                is not legal advice. Company registration details and any regulatory or
                redress-scheme memberships should be confirmed by STAYEST before publication.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
