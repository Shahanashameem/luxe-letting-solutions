import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/brand/Reveal";
import { CallToAction } from "@/components/sections/CallToAction";
import { blogPosts } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((entry) => entry.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article unavailable | STAYEST" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: pageMeta({
        title: `${post.title} | STAYEST`,
        description: post.excerpt,
        path: `/blog/${params.slug}`,
        type: "article",
      }),
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Organization", name: "STAYEST" },
            publisher: { "@type": "Organization", name: "STAYEST" },
          }),
        },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();

  return (
    <>
      <article className="px-5 py-16 sm:px-8 md:py-20">
        <div className="mx-auto w-full max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
            <ol className="flex items-center gap-2">
              <li>
                <Link to="/" className="hover:text-navy">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/blog" className="hover:text-navy">
                  Blog
                </Link>
              </li>
            </ol>
          </nav>

          <Reveal>
            <p className="eyebrow mt-8">{post.category}</p>
            <h1 className="mt-3 text-3xl font-semibold text-balance text-navy sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-5 text-xs text-muted-foreground">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>{" "}
              · {post.readingTime}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-10 space-y-5 border-t border-border pt-10">
            {post.body.map((paragraph: string) => (
              <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-foreground">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Link
            to="/blog"
            className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-navy transition-colors hover:text-gold"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to all articles
          </Link>
        </div>
      </article>

      <CallToAction />
    </>
  );
}
