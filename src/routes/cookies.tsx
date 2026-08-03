import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/sections/LegalPage";
import { company } from "@/content/site";
import { pageMeta } from "@/lib/seo";

const title = "Cookie Policy | STAYEST";
const description =
  "What cookies and similar technologies are used on the STAYEST website, and how to control them.";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/cookies" }),
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Cookies"
      title="Cookie policy"
      intro="A short, honest summary of what this website stores on your device."
      updated="3 August 2026"
      sections={[
        {
          heading: "What we currently use",
          paragraphs: [
            "This website is deliberately light. It uses only the strictly necessary cookies and local storage required for the site to function and for the enquiry form to operate correctly.",
          ],
        },
        {
          heading: "Analytics and marketing cookies",
          paragraphs: [
            "No third-party advertising or profiling cookies are set at present. If analytics or marketing technologies are introduced, this page will be updated and, where required, consent will be requested before those cookies are set.",
          ],
        },
        {
          heading: "Managing cookies",
          paragraphs: [
            "You can block or delete cookies through your browser settings. Blocking strictly necessary cookies may prevent parts of the site, including the enquiry form, from working as intended.",
          ],
        },
        {
          heading: "Questions",
          paragraphs: [`Cookie questions can be sent to ${company.email}.`],
        },
      ]}
    />
  );
}
