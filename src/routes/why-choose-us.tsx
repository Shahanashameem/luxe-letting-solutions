import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Benefits } from "@/components/sections/Benefits";
import { Testimonials } from "@/components/sections/Testimonials";
import { CallToAction } from "@/components/sections/CallToAction";
import { pageMeta } from "@/lib/seo";

const title = "Why Landlords Choose STAYEST | Company Let Specialists";
const description =
  "Named account managers, documented inspections, insured contractors and no commission deducted from your agreed monthly rent.";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/why-choose-us" }),
    links: [{ rel: "canonical", href: "/why-choose-us" }],
  }),
  component: WhyChooseUsPage,
});

function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        breadcrumb="Why Choose Us"
        title="The difference is in what we document"
        intro="Any operator can promise a figure. What distinguishes a good one is the evidence trail behind the promise — contracts, inspections, reports and accountable people."
      />
      <WhyChooseUs />
      <Benefits />
      <Testimonials />
      <CallToAction title="See how we would handle your property" />
    </>
  );
}
