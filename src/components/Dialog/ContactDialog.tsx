"use client";

import { revalidateLogic, useForm } from "@tanstack/react-form";
import { z } from "zod";
import { useState } from "react";
import { useDialogStore } from "@/store/useDialogStore";
import DialogBase from "../Base/ui/Dialog/DialogBase";
import { submitAccessRequest, ApiError } from "@/lib/form-submissions";

const ContactSchema = z.object({
  name: z.string().min(4, "Please enter a full name."),
  email: z.email("Please enter a valid email address."),
  company_name: z.string().optional(),
  contact_number: z.string().optional(),
  // industry: z.string().optional(),
  message: z.string().min(6, "Message must be at least 6 characters long."),
});

type ContactFormData = z.infer<typeof ContactSchema>;

export default function ContactDialog() {
  const { closeDialog, openDialogByType, siteSection } = useDialogStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      company_name: "",
      contact_number: "",
      industry: "",
      message: "",
    } as ContactFormData,
    validationLogic: revalidateLogic(),
    validators: {
      onDynamic: ContactSchema,
    },
    onSubmit: async ({ value }) => {
      setIsSubmitting(true);
      setSubmitError(null);
      setSubmitSuccess(false);

      try {
        ContactSchema.parse(value);

        // Submit to API
        const response = await submitAccessRequest({
          name: value.name,
          email: value.email,
          company_name: value.company_name,
          contact_number: value.contact_number,
          // industry: value.industry,
          message: value.message,
          site_section: siteSection || undefined,
        });

        if (response.success) {
          setSubmitSuccess(true);
          // Close dialog after a short delay to show success message
          setTimeout(() => {
            closeDialog("contact");
            form.reset();
            setSubmitSuccess(false);
          }, 2000);
        }
      } catch (err) {
        if (err instanceof ApiError) {
          setSubmitError(err.message);
        } else {
          setSubmitError("An unexpected error occurred. Please try again.");
        }
        console.error("❌ Submission failed", err);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  if (!openDialogByType.contact) return null;

  return (
    <DialogBase dialogName="contact">
      <div className="space-y-4">
        <h2 className="text-2xl mb-5 capitalize font-lato font-bold text-corporate-black">
          Book demo
        </h2>

        <p className="text-corporate-black/50 text-sm capitalize">
          Fill out the form below and we’ll get back to you shortly
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="space-y-6"
        >
          {/* NAME */}
          <form.Field name="name">
            {(field) => (
              <>
                <div className="relative">
                  <input
                    type="text"
                    placeholder=" "
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="peer w-full rounded-lg border border-gray-300 px-3 py-3 text-sm bg-white
                               focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent
                               transition"
                  />

                  <label
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-corporate-dark-grey text-sm
                               pointer-events-none transition-all
                               peer-focus:-top-2.5 peer-focus:left-0 peer-focus:font-bold peer-focus:text-corporate-black peer-focus:text-xs
                               peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-bold peer-not-placeholder-shown:text-corporate-black"
                  >
                    Your Full Name
                  </label>
                </div>

                {field.state.meta.errors?.[0] && (
                  <p className="text-sm text-red-500 mt-1">
                    {field.state.meta.errors[0].message}
                  </p>
                )}
              </>
            )}
          </form.Field>

          {/* EMAIL */}
          <form.Field name="email">
            {(field) => (
              <>
                <div className="relative">
                  <input
                    type="email"
                    placeholder=" "
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="peer w-full rounded-lg border border-gray-300 px-3 py-3 text-sm bg-white
                               focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent
                               transition"
                  />

                  <label
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-corporate-dark-grey text-sm
                               pointer-events-none transition-all
                               peer-focus:-top-2.5 peer-focus:left-0 peer-focus:font-bold peer-focus:text-corporate-black peer-focus:text-xs
                               peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-bold peer-not-placeholder-shown:text-corporate-black"
                  >
                    Email
                  </label>
                </div>

                {field.state.meta.errors?.[0] && (
                  <p className="text-sm text-red-500 mt-1">
                    {field.state.meta.errors[0].message}
                  </p>
                )}
              </>
            )}
          </form.Field>

          {/* COMPANY NAME */}
          <form.Field name="company_name">
            {(field) => (
              <div className="relative">
                <input
                  type="text"
                  placeholder=" "
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="peer w-full rounded-lg border border-gray-300 px-3 py-3 text-sm bg-white
                             focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent
                             transition"
                />

                <label
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-corporate-dark-grey text-sm
                             pointer-events-none transition-all
                             peer-focus:-top-2.5 peer-focus:left-0 peer-focus:font-bold peer-focus:text-corporate-black peer-focus:text-xs
                             peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-bold peer-not-placeholder-shown:text-corporate-black"
                >
                  Your Company name (optional)
                </label>
              </div>
            )}
          </form.Field>

          {/* CONTACT NUMBER */}
          <form.Field name="contact_number">
            {(field) => (
              <div className="relative">
                <input
                  type="tel"
                  placeholder=" "
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="peer w-full rounded-lg border border-gray-300 px-3 py-3 text-sm bg-white
                             focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent
                             transition"
                />

                <label
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-corporate-dark-grey text-sm
                             pointer-events-none transition-all
                             peer-focus:-top-2.5 peer-focus:left-0 peer-focus:font-bold peer-focus:text-corporate-black peer-focus:text-xs
                             peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-bold peer-not-placeholder-shown:text-corporate-black"
                >
                  Contact number (optional)
                </label>
              </div>
            )}
          </form.Field>

          {/* INDUSTRY */}
          {/*<form.Field name="industry">
            {(field) => (
              <div className="relative">
                <select
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="peer w-full rounded-lg border border-gray-300 px-3 py-3 text-sm bg-white appearance-none
                             focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent
                             transition"
                >
                  <option hidden value=""></option>
                  <option value="Real Estate Agency">Real Estate Agency</option>
                  <option value="Software Company">Software Company</option>
                  <option value="Other">Other</option>
                </select>
                <Image src={darkChevron} width={12} height={12} alt="cheron" />
                <label
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-corporate-dark-grey text-sm
                             pointer-events-none transition-all
                             peer-focus:-top-2.5 peer-focus:left-0 peer-focus:font-bold peer-focus:text-corporate-black peer-focus:text-xs
                             peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-bold peer-not-placeholder-shown:text-corporate-black"
                >
                  Industry (optional)
                </label>
              </div>
            )}
          </form.Field>*/}

          {/* MESSAGE (converted to floating text input style) */}
          <form.Field name="message">
            {(field) => (
              <>
                <div className="relative">
                  <textarea
                    placeholder=" "
                    rows={4}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="peer w-full rounded-lg border border-gray-300 px-3 py-3 text-sm bg-white resize-none
                               focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent
                               transition"
                  />

                  <label
                    className="absolute left-3 top-4 -translate-y-1/2 text-corporate-dark-grey text-sm
                               pointer-events-none transition-all
                               peer-focus:-top-2.5 peer-focus:left-0 peer-focus:font-bold peer-focus:text-corporate-black peer-focus:text-xs
                               peer-not-placeholder-shown:-top-2.5 peer-not-placeholder-shown:left-0 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-bold peer-not-placeholder-shown:text-corporate-black"
                  >
                    Your Message
                  </label>
                </div>

                {field.state.meta.errors?.[0] && (
                  <p className="text-sm text-red-500 mt-1">
                    {field.state.meta.errors[0].message}
                  </p>
                )}
              </>
            )}
          </form.Field>

          {/* Success Message */}
          {submitSuccess && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-700">
                ✓ Your request has been sent successfully!
              </p>
            </div>
          )}

          {/* Error Message */}
          {submitError && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-700">{submitError}</p>
            </div>
          )}

          {/* SUBMIT BUTTON */}
          <div className="pt-2 gap-4 flex items-center justify-center">
            <button
              type="submit"
              disabled={isSubmitting || submitSuccess}
              className="w-full max-w-xs mx-auto py-2.5 px-12 bg-corporate-blue cursor-pointer text-white rounded-full hover:opacity-90 transition-all duration-300"
            >
              {isSubmitting
                ? "Submitting..."
                : submitSuccess
                  ? "Sent!"
                  : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </DialogBase>
  );
}
