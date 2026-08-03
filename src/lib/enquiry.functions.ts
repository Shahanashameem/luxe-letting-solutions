import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Landlord enquiry schema — shared by the client form and the server handler
 * so validation rules can never drift between the two.
 */
export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a contact number")
    .max(30, "Please enter a valid contact number"),
  propertyAddress: z.string().trim().min(5, "Please enter the property address").max(300),
  bedrooms: z.string().trim().min(1, "Please select the number of bedrooms").max(20),
  propertyType: z.string().trim().min(1, "Please select a property type").max(60),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    // Enquiries are recorded server-side. Connecting this to a database or an
    // email/CRM delivery step is an isolated change to this handler only.
    console.info("[enquiry] new landlord enquiry", {
      receivedAt: new Date().toISOString(),
      propertyAddress: data.propertyAddress,
      propertyType: data.propertyType,
      bedrooms: data.bedrooms,
    });

    return { ok: true as const };
  });
