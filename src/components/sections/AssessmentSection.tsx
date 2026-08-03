import { Reveal } from "@/components/brand/Reveal";
import { SectionHeading } from "@/components/brand/Section";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import interiorImage from "@/assets/interior-bedroom.jpg";

/** Property assessment form block used on the home page. */
export function AssessmentSection() {
  return (
    <section
      id="assessment"
      aria-labelledby="assessment-heading"
      className="bg-surface px-5 py-20 sm:px-8 md:py-28"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            id="assessment-heading"
            eyebrow="Free Property Assessment"
            title="Find out what your property could earn, guaranteed"
            intro="Send us the basics and we will come back with a written proposal setting out the guaranteed monthly figure, the term available and exactly what we take responsibility for. No fee, no obligation."
          />
          <Reveal delay={0.12} className="mt-10 hidden overflow-hidden rounded-3xl lg:block">
            <img
              src={interiorImage}
              alt="Bedroom of a professionally furnished serviced apartment in navy and grey tones"
              width={1408}
              height={1008}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <EnquiryForm />
        </Reveal>
      </div>
    </section>
  );
}
