import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logoImage from "@/assets/stayest-logo.png";

/**
 * STAYEST logo lockup built around the brand script mark.
 * `variant` switches the tagline palette for light and dark (navy) backgrounds.
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
      <img
        src={logoImage}
        alt="STAYEST"
        width={896}
        height={657}
        className={cn(
          "h-11 w-auto object-contain transition-opacity group-hover:opacity-90 sm:h-12",
          !isLight && "[filter:brightness(0.55)_saturate(0)_contrast(1.15)]",
        )}
      />
      {withTagline && (
        <span
          className={cn(
            "mt-1 hidden text-[0.62rem] font-medium tracking-[0.14em] uppercase sm:block",
            isLight ? "text-navy-foreground/60" : "text-muted-foreground",
          )}
        >
          Premium Company Let &amp; Property Management
        </span>
      )}
    </Link>
  );
}

