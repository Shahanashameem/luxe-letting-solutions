import { createFileRoute } from "@tanstack/react-router";
import buildingImage from "@/assets/building-exterior.jpg";
import { Reveal } from "@/components/brand/Reveal";
import { Section, SectionHeading } from "@/components/brand/Section";
import { PageHero } from "@/components/sections/PageHero";
import { CallToAction } from "@/components/sections/CallToAction";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { pageMeta } from "@/lib/seo";

const title = "About STAYEST — UK Company Let Specialists";
const description =
  "STAYEST is a UK company let and property management business working with private landlords, letting agents, investors and developers.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/about" }),
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Certainty",
    body: "Income should be predictable. Everything we design internally exists to make sure your payment lands on the same date without exception.",
  },
  {
    title: "Custody",
    body: "We treat every property as an asset we are holding in trust — documented, inspected and maintained to a standard we would accept ourselves.",
  },
  {
    title: "Candour",
    body: "Clear contracts, honest figures and difficult conversations held early rather than avoided.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About STAYEST"
        breadcrumb="About"
        title="Built for landlords who want their property handled properly"
        intro="We are a UK company let and property management business. Landlords hand us the keys; we hand back a fixed monthly income and a property kept to standard."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal direction="left">
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
              A response to how badly letting was being done
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                STAYEST was founded by operators who had spent years on both sides of the
                letting relationship — managing property portfolios and dealing with the
                agents responsible for them.
              </p>
              <p>
                The pattern was consistent: unpredictable income, unexplained deductions,
                inspections that never happened, and no single person accountable when
                something went wrong.
              </p>
              <p>
                We built the alternative. A company let structure where the tenant is a
                business you can hold to account, a guaranteed figure with nothing deducted
                from it, and an operations team that documents its work.
              </p>
              <p>
                Today we work with private landlords, letting agents, property investors,
                developers and corporate housing partners across the United Kingdom.
              </p>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-border">
              <img
                src={buildingImage}
                alt="Contemporary UK residential apartment building on a tree-lined city street"
                width={1408}
                height={1008}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="surface" ariaLabelledBy="values-heading">
        <SectionHeading
          id="values-heading"
          eyebrow="Our Values"
          title="Three principles we are willing to be judged on"
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.07}>
              <div className="h-full rounded-2xl border border-border bg-background p-8">
                <h3 className="font-display text-lg font-semibold text-navy">{value.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {value.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <WhyChooseUs />
      <CallToAction />
    </>
  );
}
