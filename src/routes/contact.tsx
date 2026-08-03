import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/brand/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { company } from "@/content/site";
import { pageMeta } from "@/lib/seo";

const title = "Contact STAYEST — Free Landlord Property Assessment";
const description =
  "Speak to the STAYEST landlord team about guaranteed rent and company let agreements. Free property assessment with a written proposal, no obligation.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/contact" }),
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact STAYEST",
          description,
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        breadcrumb="Contact"
        title="Tell us about your property"
        intro="Complete the enquiry form and we will respond with a guaranteed rent proposal within one working day. Landlords, agents and developers are all welcome."
      />

      <section className="px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <Reveal direction="left">
            <h2 className="font-display text-xl font-semibold text-navy">Direct contact</h2>
            <ul className="mt-7 space-y-6 text-sm">
              <li className="flex gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="font-medium text-navy">Landlord line</p>
                  <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="mt-1 block text-muted-foreground transition-colors hover:text-navy"
                  >
                    {company.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="font-medium text-navy">Email</p>
                  <a
                    href={`mailto:${company.email}`}
                    className="mt-1 block text-muted-foreground transition-colors hover:text-navy"
                  >
                    {company.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="font-medium text-navy">Office</p>
                  <p className="mt-1 text-muted-foreground">{company.address}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <p className="font-medium text-navy">Hours</p>
                  <p className="mt-1 text-muted-foreground">
                    Monday to Friday, 9:00 – 18:00
                    <br />
                    Saturday by appointment
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
              <p className="font-display text-sm font-semibold text-navy">
                Letting agents and developers
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We work with agents introducing landlord stock and with developers seeking
                reliable occupancy across multiple units. Mention this in your message and
                we will route the enquiry to the partnerships team.
              </p>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.08}>
            <h2 className="sr-only">Landlord enquiry form</h2>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
