"use client";

import { revalidateLogic, useForm } from "@tanstack/react-form";
import { z } from "zod";

const EmailSchema = z.object({
  email: z.email("Please enter a valid email address."),
});

type ContactFormData = z.infer<typeof EmailSchema>;

export default function EmailCTAInput() {
  const form = useForm({
    defaultValues: {
      email: "",
    } as ContactFormData,
    validationLogic: revalidateLogic(),
    validators: {
      onDynamic: EmailSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        EmailSchema.parse(value);
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
        className="grid grid-cols-6 gap-4"
      >
        <form.Field name="email">
          {(field) => (
            <div className="flex flex-col space-y-1 col-span-4">
              <input
                type="email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-lg h-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition"
              />
              {field.state.meta.errors?.[0] && (
                <p className="text-sm text-red-500">
                  {field.state.meta.errors[0].message}
                </p>
              )}
            </div>
          )}
        </form.Field>
        <button
          className="col-span-2 py-2.5 cursor-pointer bg-corporate-blue text-white transition-all duration-300 ease-in-out rounded-full hover:opacity-80"
          type="button"
          onClick={() => console.log("Book Demo clicked")}
        >
          Book Demo
        </button>
      </form>
    </div>
  );
}
