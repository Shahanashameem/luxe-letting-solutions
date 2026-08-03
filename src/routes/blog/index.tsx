import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/brand/Reveal";
import { Section } from "@/components/brand/Section";
import { PageHero } from "@/components/sections/PageHero";
import { CallToAction } from "@/components/sections/CallToAction";
import { blogPosts } from "@/content/site";
import { pageMeta } from "@/lib/seo";

const title = "Landlord Insight & Property Guidance | STAYEST Blog";
const description =
  "Practical guidance for UK landlords on guaranteed rent, company let agreements, contracts and preparing property for corporate occupancy.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/blog" }),
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function BlogIndex() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        breadcrumb="Blog"
        title="Insight for landlords and property professionals"
        intro="Considered writing on income structures, contracts and property standards — without the sales gloss."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal as="article" key={post.slug} delay={index * 0.06}>
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="flex h-full flex-col rounded-2xl border border-border bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-elegant"
              >
                <p className="eyebrow">{post.category}</p>
                <h2 className="mt-4 text-lg font-semibold text-navy">{post.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <p className="mt-6 text-xs text-muted-foreground">
                  <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CallToAction title="Prefer to talk it through?" />
    </>
  );
}
