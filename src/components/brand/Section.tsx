import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/** Consistent vertical rhythm and max width for every page section. */
export function Section({
  children,
  className,
  tone = "default",
  id,
  ariaLabelledBy,
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "surface" | "navy";
  id?: string;
  ariaLabelledBy?: string;
}) {
  const tones = {
    default: "bg-background",
    surface: "bg-surface",
    navy: "bg-navy text-navy-foreground",
  };

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn("px-5 py-20 sm:px-8 md:py-28", tones[tone], className)}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

/** Eyebrow + heading + optional intro, animated as one unit. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  level = 2,
  id,
  tone = "dark",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  level?: 1 | 2 | 3;
  id?: string;
  tone?: "dark" | "light";
}) {
  const Tag = `h${level}` as "h1" | "h2" | "h3";

  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag
        id={id}
        className={cn(
          "mt-3 text-3xl font-semibold text-balance sm:text-4xl",
          level === 1 && "text-4xl sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]",
          tone === "light" ? "text-navy-foreground" : "text-navy",
        )}
      >
        {title}
      </Tag>
      {intro && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-navy-foreground/75" : "text-muted-foreground",
          )}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
