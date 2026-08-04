import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logoDark from "@/assets/stayest-logo.png";
import logoLight from "@/assets/stayest-logo-light.png";
import markDark from "@/assets/stayest-mark.png";
import markLight from "@/assets/stayest-mark-light.png";

/**
 * STAYEST brand logo.
 * - `mode="full"` shows the complete lockup (monogram + wordmark).
 * - `mode="mark"` shows the S monogram; pair with `showWordmark` to add the
 *   brand name as text for compact header use.
 * - `variant` selects the colourway for light or dark (navy) backgrounds.
 */
export function Logo({
  variant = "dark",
  mode = "full",
  showWordmark = false,
  className,
}: {
  variant?: "dark" | "light";
  mode?: "full" | "mark";
  showWordmark?: boolean;
  className?: string;
}) {
  const isLight = variant === "light";
  const src = mode === "full" ? (isLight ? logoLight : logoDark) : (isLight ? markLight : markDark);

  return (
    <Link
      to="/"
      aria-label="STAYEST — Premium Company Let and Property Management, go to home page"
      className={cn("group inline-flex items-center gap-3 leading-none", className)}
    >
      <img
        src={src}
        alt="STAYEST"
        className={cn(
          "w-auto object-contain transition-opacity group-hover:opacity-90",
          mode === "full" ? "h-14 sm:h-16" : "h-10 sm:h-11",
        )}
      />
      {mode === "mark" && showWordmark && (
        <span
          className={cn(
            "font-display text-lg font-semibold tracking-[0.04em]",
            isLight ? "text-navy-foreground" : "text-navy",
          )}
        >
          STAYEST
        </span>
      )}
    </Link>
  );
}

