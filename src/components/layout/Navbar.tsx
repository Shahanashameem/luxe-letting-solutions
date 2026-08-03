import { Link } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { ActionLink } from "@/components/brand/ActionButton";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { company, navigation } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Sticky primary navigation. A subtle glass treatment is applied once the page
 * is scrolled — the only place glassmorphism is used in the design system.
 * The right-hand slot is reserved for a future landlord portal account entry.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = navigation.filter((item) => item.to !== "/contact");

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
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Logo withTagline={false} />

        <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
          {links.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-navy after:scale-x-100" }}
              className="relative text-sm font-medium text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:text-navy hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className="hidden items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-navy lg:flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {company.phone}
          </a>
          <ActionLink to="/contact" variant="gold" size="sm" className="hidden sm:inline-flex">
            Get Free Assessment
          </ActionLink>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-navy xl:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(88vw,22rem)] p-0">
              <SheetTitle className="sr-only">Site navigation</SheetTitle>
              <div className="flex h-full flex-col">
                <div className="border-b border-border px-6 py-5">
                  <Logo />
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
