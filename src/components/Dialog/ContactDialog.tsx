"use client";

import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import { useDialogStore } from "@/store/useDialogStore";
import DialogBase from "../Base/ui/Dialog/DialogBase";

const ContactSchema = z.object({
  name: z.string().min(3, "Please enter a valid name."),
  email: z.email("Please enter a valid email address."),
  company_name: z.string().optional(),
  contact_number: z.string().optional(),
  message: z.string().min(6, "Message must be at least 6 characters long."),
});

type ContactFormData = z.infer<typeof ContactSchema>;

export default function ContactDialog() {
  const { closeDialog, openDialogByType } = useDialogStore();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      company_name: "",
      contact_number: "",
      message: "",
    } as ContactFormData,
    onSubmit: async ({ value }) => {
      try {
        ContactSchema.parse(value);
        console.log("✅ Form submitted successfully", value);
        closeDialog("contact");
      } catch (err) {
        console.error("❌ Validation failed", err);
      }
    },
  });

  if (!openDialogByType.contact) return null;

  return (
    <DialogBase dialogName="contact">
      <div className="space-y-5">
        <h2 className="text-2xl uppercase font-national font-bold text-corporate-black text-center">
          get demo
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
          className="space-y-4"
        >
          {/* Name (Required) */}
          <form.Field name="name">
            {(field) => (
              <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-corporate-black">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Your full name"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition"
                />
                {field.state.meta.errors?.[0] && (
                  <p className="text-sm text-red-500">
                    {field.state.meta.errors[0]}
                  </p>
                )}
              </div>
            )}
          </form.Field>

          {/* Email (Required) */}
          <form.Field name="email">
            {(field) => (
              <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-corporate-black">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition"
                />
                {field.state.meta.errors?.[0] && (
                  <p className="text-sm text-red-500">
                    {field.state.meta.errors[0]}
                  </p>
                )}
              </div>
            )}
          </form.Field>

          {/* Company Name (Optional) */}
          <form.Field name="company_name">
            {(field) => (
              <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-corporate-black">
                  Company Name
                </label>
                <input
                  type="text"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Your company name (optional)"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition"
                />
              </div>
            )}
          </form.Field>

          {/* Contact Number (Optional) */}
          <form.Field name="contact_number">
            {(field) => (
              <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-corporate-black">
                  Contact Number
                </label>
                <input
                  type="tel"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Contact number (optional)"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition"
                />
              </div>
            )}
          </form.Field>

          {/* Message (Required) */}
          <form.Field name="message">
            {(field) => (
              <div className="flex flex-col space-y-1">
                <label className="text-sm font-medium text-corporate-black">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Your message..."
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition resize-none"
                />
                {field.state.meta.errors?.[0] && (
                  <p className="text-sm text-red-500">
                    {field.state.meta.errors[0]}
                  </p>
                )}
              </div>
            )}
          </form.Field>

          {/* Buttons */}
          <div className="pt-2 grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => closeDialog("contact")}
              className="w-full py-2.5 px-12 bg-white border border-gray-400 cursor-pointer text-corporate-black rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-full py-2.5 px-12 bg-corporate-blue cursor-pointer text-white rounded-full hover:opacity-90 transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </DialogBase>
  );
}
