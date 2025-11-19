"use client";

import { revalidateLogic, useForm } from "@tanstack/react-form";
import { z } from "zod";
import { useState } from "react";
import { useDialogStore } from "@/store/useDialogStore";

const CTASchema = z.object({
  email: z.email("Please enter a valid email address."),
});

type CTAFormData = z.infer<typeof CTASchema>;

export default function IntegrationCTAForm({
  siteSection,
}: {
  siteSection?: string;
}) {
  const { openDialog } = useDialogStore();
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
    } as CTAFormData,
    validationLogic: revalidateLogic(),
    validators: {
      onDynamic: CTASchema,
    },
    onSubmit: async ({ value }) => {
      try {
        CTASchema.parse(value);
        // Open the contact dialog for the full form submission
        openDialog("contact", siteSection);

        // Show success feedback
        setSubmitSuccess(true);
        setTimeout(() => {
          setSubmitSuccess(false);
          form.reset();
        }, 2000);
      } catch (err) {
        console.error("❌ Validation failed", err);
      }
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className="grid grid-cols-1 w-full lg:w-fit gap-5 lg:grid-cols-3 lg:gap-0"
    >
      {/* Email (Required) */}
      <form.Field name="email">
        {(field) => (
          <div className="lg:col-span-2 flex flex-col space-y-1 relative">
            <input
              type="email"
              value={field.state.value}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Enter Your Email Address"
              className="w-full rounded-r-[28px] lg:rounded-r-0 rounded-l-[28px] border-transparent bg-white px-8 py-3.5 text-xl text-corporate-dark-grey focus:outline-none focus:border-transparent transition"
            />
            {field.state.meta.errors?.[0] && (
              <p className="text-sm text-red-500 absolute -bottom-2.5 left-0">
                {field.state.meta.errors[0].message}
              </p>
            )}
          </div>
        )}
      </form.Field>
      <button
        type="submit"
        disabled={submitSuccess}
        className="w-full py-2.5 px-12 text-xl bg-corporate-blue cursor-pointer text-white rounded-l-[28px] lg:rounded-l-0 rounded-r-[28px] hover:opacity-90 transition-all duration-300 disabled:opacity-50"
      >
        Contact Sales
      </button>
    </form>
  );
}
