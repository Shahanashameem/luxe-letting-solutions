import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { FaqSection } from "@/components/sections/FaqSection";
import { CallToAction } from "@/components/sections/CallToAction";
import { faqs } from "@/content/site";
import { pageMeta } from "@/lib/seo";

const title = "Landlord FAQs — Guaranteed Rent & Company Let | STAYEST";
const description =
  "Answers to the questions landlords ask about guaranteed rent, company let agreements, property management responsibilities and getting started.";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/faqs" }),
    links: [{ rel: "canonical", href: "/faqs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        breadcrumb="FAQs"
        title="Landlord questions, answered plainly"
        intro="If something you need to know is not covered here, ask us directly — we would rather answer it before you sign than after."
      />
      <FaqSection items={faqs} grouped tone="default" title="Everything landlords ask" />
      <CallToAction title="Still have a question?" intro="Speak to the landlord team and get a straight answer the same working day." />
    </>
  );
}
