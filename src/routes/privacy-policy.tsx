import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/sections/LegalPage";
import { company } from "@/content/site";
import { pageMeta } from "@/lib/seo";

const title = "Privacy Policy | STAYEST";
const description =
  "How STAYEST collects, uses and protects personal information submitted through landlord enquiries and this website.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/privacy-policy" }),
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="How we handle your information"
      intro="This policy explains what we collect when you enquire about a property, why we collect it and how long we keep it."
      updated="3 August 2026"
      sections={[
        {
          heading: "Who we are",
          paragraphs: [
            `${company.name} provides company let and property management services to landlords in the United Kingdom. Registered company details and the appointed data contact are to be confirmed by STAYEST.`,
          ],
        },
        {
          heading: "Information we collect",
          paragraphs: [
            "We collect only the information you provide through our enquiry forms and direct correspondence.",
          ],
          list: [
            "Your name, email address and telephone number",
            "The property address and basic property details you submit",
            "Any additional message content you choose to include",
          ],
        },
        {
          heading: "Why we use it",
          paragraphs: [
            "We use your information to assess the property, prepare a proposal and respond to your enquiry. We do not sell your information, and we do not use it for unrelated marketing without your consent.",
          ],
        },
        {
          heading: "Retention",
          paragraphs: [
            "Enquiry records are retained only as long as necessary to respond and to meet our legal and accounting obligations. Specific retention periods are set by STAYEST and available on request.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            `Under UK data protection law you may request access to, correction of, or deletion of your personal information. Contact ${company.email} to make a request.`,
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `Questions about this policy can be sent to ${company.email} or raised by telephone on ${company.phone}.`,
          ],
        },
      ]}
    />
  );
}
