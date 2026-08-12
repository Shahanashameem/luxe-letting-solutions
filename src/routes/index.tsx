import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { AreasCovered } from "@/components/sections/AreasCovered";
import { FaqSection } from "@/components/sections/FaqSection";
import { AssessmentSection } from "@/components/sections/AssessmentSection";
import { homeFaqs } from "@/content/site";
import { pageMeta } from "@/lib/seo";

const title = "STAYEST — Guaranteed Rent & Company Let for UK Landlords";
const description =
  "Guaranteed monthly rent, professional property management and long-term company let agreements for UK landlords, agents and investors.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/" }),
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: homeFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Benefits />
      <ServicesGrid />
      <WhyChooseUs />
      <HowItWorks />
      <AreasCovered />
      <FaqSection
        items={homeFaqs}
        intro="The questions landlords ask most often before instructing us."
      />
      <AssessmentSection />
    </>
  );
}
