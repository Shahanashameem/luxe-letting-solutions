import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/brand/Reveal";
import { Section, SectionHeading } from "@/components/brand/Section";
import type { Faq } from "@/content/site";

/** Accessible FAQ accordion, optionally grouped by category. */
export function FaqSection({
  items,
  grouped = false,
  tone = "surface",
  title = "Frequently asked questions",
  intro,
}: {
  items: Faq[];
  grouped?: boolean;
  tone?: "surface" | "default";
  title?: string;
  intro?: string;
}) {
  const groups = grouped
    ? Array.from(new Set(items.map((item) => item.group)))
    : [null];

  return (
    <Section tone={tone} ariaLabelledBy="faq-heading">
      <SectionHeading id="faq-heading" eyebrow="FAQs" title={title} intro={intro} align="center" />

      <div className="mx-auto mt-14 max-w-3xl space-y-10">
        {groups.map((group) => {
          const groupItems = group ? items.filter((i) => i.group === group) : items;
          return (
            <Reveal key={group ?? "all"}>
              {group && (
                <h3 className="mb-4 font-display text-sm font-semibold tracking-[0.14em] text-gold uppercase">
                  {group}
                </h3>
              )}
              <Accordion type="single" collapsible className="w-full">
                {groupItems.map((item) => (
                  <AccordionItem
                    key={item.question}
                    value={item.question}
                    className="border-border"
                  >
                    <AccordionTrigger className="text-left font-display text-base font-medium text-navy hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
