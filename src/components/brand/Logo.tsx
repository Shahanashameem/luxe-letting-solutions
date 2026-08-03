import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/**
 * STAYEST wordmark. Deliberately typographic — no house or roof iconography.
 * `variant` switches the palette for light and dark (navy) backgrounds.
 */
export function Logo({
  variant = "dark",
  withTagline = true,
  className,
}: {
  variant?: "dark" | "light";
  withTagline?: boolean;
  className?: string;
}) {
  const isLight = variant === "light";

  return (
    <Link
      to="/"
      aria-label={`${"STAYEST"} — Premium Company Let and Property Management, go to home page`}
      className={cn("group inline-flex flex-col leading-none", className)}
    >
      <span className="flex items-center gap-2.5">
        <span
          aria-hidden="true"
          className={cn(
            "grid h-8 w-8 shrink-0 place-items-center rounded-md border font-display text-sm font-semibold tracking-tight transition-colors",
            isLight
              ? "border-gold/50 bg-gold/15 text-gold"
              : "border-navy/15 bg-navy text-navy-foreground",
          )}
        >
          S
        </span>
        <span
          className={cn(
            "font-display text-[1.35rem] font-semibold tracking-[0.22em]",
            isLight ? "text-navy-foreground" : "text-navy",
          )}
        >
          STAYEST
        </span>
      </span>
      {withTagline && (
        <span
          className={cn(
            "mt-1.5 hidden pl-[2.6rem] text-[0.62rem] font-medium tracking-[0.14em] uppercase sm:block",
            isLight ? "text-navy-foreground/60" : "text-muted-foreground",
          )}
        >
          Premium Company Let &amp; Property Management
        </span>
      )}
    </Link>
  );
}
