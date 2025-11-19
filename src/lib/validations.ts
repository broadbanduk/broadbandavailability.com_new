/**
 * Validation schemas for form submissions
 */

import { z } from "zod";

/**
 * Access request form validation schema
 */
export const accessRequestSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(255, "Name must be less than 255 characters"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address")
    .max(255, "Email must be less than 255 characters"),

  company_name: z
    .string()
    .max(255, "Company name must be less than 255 characters")
    .optional()
    .default(""),

  contact_number: z
    .string()
    .max(50, "Contact number must be less than 50 characters")
    .optional()
    .default(""),

  industry: z
    .string()
    .max(255, "Industry must be less than 255 characters")
    .optional()
    .default(""),

  message: z
    .string()
    .min(1, "Message is required")
    .max(1000, "Message must be less than 1000 characters"),

  site_section: z
    .string()
    .max(255, "Site section must be less than 255 characters")
    .optional()
    .default(""),
});

export type AccessRequestInput = z.infer<typeof accessRequestSchema>;

/**
 * Format validation errors for API response
 */
export function formatValidationErrors(error: z.ZodError<unknown>) {
  return error.issues.reduce(
    (acc: Record<string, string>, err: z.ZodIssue) => {
      const path = err.path.join(".");
      acc[path] = err.message;
      return acc;
    },
    {} as Record<string, string>,
  );
}
