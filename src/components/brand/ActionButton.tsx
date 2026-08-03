import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Brand action button. Used for every call to action so CTA styling stays
 * consistent across pages. Renders as a router Link when `to` is provided.
 */
const actionVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "bg-navy text-navy-foreground hover:bg-navy-deep hover:shadow-elegant",
        gold: "bg-gold text-gold-foreground hover:brightness-105 hover:shadow-elegant",
        outline: "border border-navy/20 bg-transparent text-navy hover:border-navy/40 hover:bg-navy/5",
        ghostLight:
          "border border-navy-foreground/30 bg-transparent text-navy-foreground hover:bg-navy-foreground/10",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm",
        lg: "px-7 py-3.5 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ActionProps = VariantProps<typeof actionVariants> & {
  children: ReactNode;
  className?: string;
};

export function ActionLink({
  to,
  variant,
  size,
  className,
  children,
  ...rest
}: ActionProps & { to: string } & Omit<ComponentProps<typeof Link>, "to" | "children" | "className">) {
  return (
    <Link to={to} className={cn(actionVariants({ variant, size }), className)} {...rest}>
      {children}
    </Link>
  );
}

export function ActionButton({
  variant,
  size,
  className,
  children,
  ...rest
}: ActionProps & ComponentProps<"button">) {
  return (
    <button className={cn(actionVariants({ variant, size }), className)} {...rest}>
      {children}
    </button>
  );
}

export { actionVariants };
