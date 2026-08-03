import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections/PageHero";
import { AreasCovered } from "@/components/sections/AreasCovered";
import { CallToAction } from "@/components/sections/CallToAction";
import { pageMeta } from "@/lib/seo";
import { areas } from "@/content/site";

const title = "Areas We Cover Across the UK | STAYEST";
const description =
  "STAYEST operates company let and guaranteed rent agreements across London, the South East, the Midlands and major northern cities.";

export const Route = createFileRoute("/areas-we-cover")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/areas-we-cover" }),
    links: [{ rel: "canonical", href: "/areas-we-cover" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Company let and guaranteed rent",
          provider: { "@type": "Organization", name: "STAYEST" },
          areaServed: areas.flatMap((area) => area.places),
        }),
      },
    ],
  }),
  component: AreasPage,
});

function AreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Areas We Cover"
        breadcrumb="Areas We Cover"
        title="Where we take on property"
        intro="We concentrate on locations with sustained corporate and professional demand, because that is what allows us to guarantee rent with confidence."
      />
      <AreasCovered tone="default" />
      <CallToAction title="Not sure if we cover your location?" intro="Send us the postcode and we will tell you honestly whether the property is a fit." />
    </>
  );
}
