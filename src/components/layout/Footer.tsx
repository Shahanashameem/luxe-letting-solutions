import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { company, navigation, services } from "@/content/site";

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms", to: "/terms" },
  { label: "Cookies", to: "/cookies" },
];

const socials = [
  { label: "LinkedIn", href: company.linkedin, Icon: Linkedin },
  { label: "Facebook", href: company.facebook, Icon: Facebook },
  { label: "Instagram", href: company.instagram, Icon: Instagram },
];

export function Footer() {
  return (
    <footer className="bg-navy px-5 pt-16 pb-8 text-navy-foreground sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo variant="light" mode="full" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-foreground/70">
              Guaranteed rent and fully managed company let solutions for landlords,
              agents and investors across the United Kingdom.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${company.name} on ${label}`}
                  className="grid h-10 w-10 place-items-center rounded-full border border-navy-foreground/20 text-navy-foreground/80 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h2 className="font-display text-sm font-semibold tracking-[0.14em] text-gold uppercase">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {navigation.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-navy-foreground/70 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services">
            <h2 className="font-display text-sm font-semibold tracking-[0.14em] text-gold uppercase">
              Services
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/services"
                    hash={service.slug}
                    className="text-navy-foreground/70 transition-colors hover:text-gold"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-sm font-semibold tracking-[0.14em] text-gold uppercase">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-navy-foreground/70">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-gold"
                >
                  {company.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={`mailto:${company.email}`} className="transition-colors hover:text-gold">
                  {company.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{company.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-navy-foreground/15 pt-6 text-xs text-navy-foreground/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-5">
            {legalLinks.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
