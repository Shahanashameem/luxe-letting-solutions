import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { ActionButton } from "@/components/brand/ActionButton";
import { bedroomOptions, propertyTypes } from "@/content/site";
import { enquirySchema, submitEnquiry, type EnquiryInput } from "@/lib/enquiry.functions";
import { cn } from "@/lib/utils";

const emptyForm: EnquiryInput = {
  name: "",
  email: "",
  phone: "",
  propertyAddress: "",
  bedrooms: "",
  propertyType: "",
  message: "",
};

const fieldClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-gold focus:outline-none";

/**
 * Shared landlord enquiry / property assessment form.
 * Validated client-side with the same Zod schema the server function enforces.
 */
export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [values, setValues] = useState<EnquiryInput>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryInput, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const send = useServerFn(submitEnquiry);

  const update = (key: keyof EnquiryInput, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = enquirySchema.safeParse(values);

    if (!parsed.success) {
      const next: Partial<Record<keyof EnquiryInput, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof EnquiryInput;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    try {
      setStatus("submitting");
      await send({ data: parsed.data });
      setStatus("success");
      setValues(emptyForm);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-border bg-background p-10 text-center shadow-card"
      >
        <CheckCircle2 className="mx-auto h-10 w-10 text-gold" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold text-navy">Enquiry received</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          Thank you. A member of the STAYEST landlord team will review your property and
          respond within one working day.
        </p>
        <ActionButton variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Submit another property
        </ActionButton>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={cn(
        "rounded-2xl border border-border bg-background p-6 shadow-card sm:p-8",
        compact && "p-5 sm:p-6",
      )}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className={fieldClass}
            placeholder="Jane Whitfield"
            aria-invalid={Boolean(errors.name)}
          />
        </Field>

        <Field id="email" label="Email address" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className={fieldClass}
            placeholder="jane@example.co.uk"
            aria-invalid={Boolean(errors.email)}
          />
        </Field>

        <Field id="phone" label="Phone number" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={fieldClass}
            placeholder="07000 000000"
            aria-invalid={Boolean(errors.phone)}
          />
        </Field>

        <Field id="propertyType" label="Property type" error={errors.propertyType}>
          <select
            id="propertyType"
            name="propertyType"
            value={values.propertyType}
            onChange={(e) => update("propertyType", e.target.value)}
            className={fieldClass}
            aria-invalid={Boolean(errors.propertyType)}
          >
            <option value="">Select a property type</option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id="propertyAddress"
          label="Property address"
          error={errors.propertyAddress}
          className="sm:col-span-2"
        >
          <input
            id="propertyAddress"
            name="propertyAddress"
            autoComplete="street-address"
            value={values.propertyAddress}
            onChange={(e) => update("propertyAddress", e.target.value)}
            className={fieldClass}
            placeholder="12 Example Street, London, E1 1AA"
            aria-invalid={Boolean(errors.propertyAddress)}
          />
        </Field>

        <Field id="bedrooms" label="Bedrooms" error={errors.bedrooms}>
          <select
            id="bedrooms"
            name="bedrooms"
            value={values.bedrooms}
            onChange={(e) => update("bedrooms", e.target.value)}
            className={fieldClass}
            aria-invalid={Boolean(errors.bedrooms)}
          >
            <option value="">Select</option>
            {bedroomOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field id="message" label="Message (optional)" error={errors.message} className="sm:col-span-2">
          <textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            onChange={(e) => update("message", e.target.value)}
            className={cn(fieldClass, "resize-y")}
            placeholder="Tell us about the property, its current status and your timescales."
          />
        </Field>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-5 text-sm text-destructive">
          Something went wrong sending your enquiry. Please try again or call us directly.
        </p>
      )}

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          We use your details only to respond to this enquiry.
        </p>
        <ActionButton type="submit" variant="gold" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Request Free Assessment"}
        </ActionButton>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
  className?: string | undefined;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-navy">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-2 text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
