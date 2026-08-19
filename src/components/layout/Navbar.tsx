import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { ActionLink } from "@/components/brand/ActionButton";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { company, navigation, primaryNavigation, secondaryNavigation } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Sticky primary navigation. A subtle glass treatment is applied once the page
 * is scrolled — the only place glassmorphism is used in the design system.
 * Desktop shows the primary links inline; the rest collapse into a "More"
 * menu so the bar never crowds the logo or the CTA.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!moreOpen) return;
    const onDocClick = (event: globalThis.MouseEvent) => {
      if (!moreRef.current?.contains(event.target as Node)) setMoreOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMoreOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [moreOpen]);

  const linkClass =
    "relative text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:text-navy hover:after:scale-x-100";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-background",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-4 focus:z-50 focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:text-navy-foreground"
      >
        Skip to content
      </a>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Logo mode="mark" showWordmark />

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {primaryNavigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-navy after:scale-x-100" }}
              className={linkClass}
            >
              {item.label}
            </Link>
          ))}

          <div className="relative" ref={moreRef}>
            <button
              type="button"
              aria-expanded={moreOpen}
              aria-haspopup="true"
              onClick={() => setMoreOpen((v) => !v)}
              className={cn(linkClass, "flex items-center gap-1", moreOpen && "text-navy")}
            >
              More
              <ChevronDown
                className={cn("h-4 w-4 transition-transform", moreOpen && "rotate-180")}
                aria-hidden="true"
              />
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-[calc(100%+0.9rem)] w-56 rounded-xl border border-border bg-background p-2 shadow-elegant">
                {secondaryNavigation.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMoreOpen(false)}
                    activeProps={{ className: "bg-secondary text-navy" }}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-navy"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className="hidden items-center gap-2 text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors hover:text-navy xl:flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {company.phone}
          </a>
          <ActionLink to="/contact" variant="gold" size="sm" className="hidden sm:inline-flex">
            Free Assessment
          </ActionLink>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-navy lg:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(88vw,22rem)] p-0">
              <SheetTitle className="sr-only">Site navigation</SheetTitle>
              <div className="flex h-full flex-col">
                <div className="border-b border-border px-6 py-5">
                  <Logo mode="full" />
                </div>
                <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      activeOptions={{ exact: item.to === "/" }}
                      activeProps={{ className: "bg-secondary text-navy" }}
                      className="block rounded-lg px-4 py-3 text-[0.95rem] font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-navy"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="border-t border-border p-5">
                  <ActionLink
                    to="/contact"
                    variant="gold"
                    className="w-full"
                    onClick={() => setOpen(false)}
                  >
                    Get Free Property Assessment
                  </ActionLink>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
