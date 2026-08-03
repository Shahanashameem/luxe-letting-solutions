import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Scroll-triggered reveal. Motion is suppressed when the visitor prefers
 * reduced motion, so content still appears immediately for those users.
 */
export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();

  const offsets = {
    up: { y: 24, x: 0 },
    left: { y: 0, x: -24 },
    right: { y: 0, x: 24 },
    none: { y: 0, x: 0 },
  }[direction];

  const MotionTag = motion[as];

  return (
    <MotionTag
      ref={ref as never}
      className={cn(className)}
      initial={reduced ? false : { opacity: 0, ...offsets }}
      animate={inView || reduced ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, ...offsets }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
