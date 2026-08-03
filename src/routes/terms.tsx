import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/sections/LegalPage";
import { company } from "@/content/site";
import { pageMeta } from "@/lib/seo";

const title = "Terms of Use | STAYEST";
const description =
  "The terms governing use of the STAYEST website and the status of information published on it.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/terms" }),
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms of use"
      intro="These terms apply to your use of this website. They do not form part of any property agreement, which is governed by its own signed contract."
      updated="3 August 2026"
      sections={[
        {
          heading: "Website content",
          paragraphs: [
            "Information on this website is provided for general guidance about our services. Figures, timescales and service descriptions are indicative and do not constitute an offer.",
          ],
        },
        {
          heading: "Property agreements",
          paragraphs: [
            `Any company let, guaranteed rent or management arrangement between you and ${company.name} is governed exclusively by the written agreement signed by both parties. Where this website and that agreement differ, the agreement prevails.`,
          ],
        },
        {
          heading: "Acceptable use",
          paragraphs: ["You agree not to use this website in any of the following ways."],
          list: [
            "Submitting false, misleading or unlawful information through our forms",
            "Attempting to gain unauthorised access to any part of the site or its systems",
            "Copying or republishing site content for commercial use without permission",
          ],
        },
        {
          heading: "Liability",
          paragraphs: [
            "We take reasonable care to keep this website accurate and available, but we do not guarantee uninterrupted access or that all content is free from error. Nothing in these terms limits liability where it cannot lawfully be limited.",
          ],
        },
        {
          heading: "Governing law",
          paragraphs: [
            "These terms are governed by the laws of England and Wales, and the courts of England and Wales have exclusive jurisdiction.",
          ],
        },
      ]}
    />
  );
}
