"use client";

import { revalidateLogic, useForm } from "@tanstack/react-form";
import { z } from "zod";

const CTASchema = z.object({
  email: z.email("Please enter a valid email address."),
});

type CTAFormData = z.infer<typeof CTASchema>;

export default function IntegrationCTAForm() {
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
        console.log("✅ Form submitted successfully", value);
      } catch (err) {
        console.error("❌ Validation failed", err);
      }
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="grid grid-cols-3"
      >
        {/* Email (Required) */}
        <form.Field name="email">
          {(field) => (
            <div className="col-span-2 flex flex-col space-y-1 relative">
              <input
                type="email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Enter Your Email Address"
                className="w-full rounded-l-[28px] border-transparent bg-white px-8 py-3.5 text-sm md:text-base lg:text-lg xl:text-xl text-corporate-dark-grey focus:outline-none focus:border-transparent transition"
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
          className="w-full py-2.5 px-2 md:px-12 text-sm md:text-base lg:text-lg xl:text-xl bg-corporate-blue cursor-pointer text-white rounded-r-[28px] hover:opacity-90 transition-all duration-300"
        >
          Contact Sales
        </button>
      </form>
    </div>
  );
}
