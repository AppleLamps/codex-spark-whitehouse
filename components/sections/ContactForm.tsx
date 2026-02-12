"use client";

import { CheckCircle2 } from "lucide-react";
import { type FormEvent, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  subject: "General Feedback",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const validate = useMemo(
    () => () => {
      const nextErrors: FormErrors = {};
      if (!form.name.trim()) {
        nextErrors.name = "Name is required.";
      }
      if (!form.email.trim()) {
        nextErrors.email = "Email is required.";
      } else if (!isValidEmail(form.email)) {
        nextErrors.email = "Please enter a valid email address.";
      }
      if (!form.message.trim()) {
        nextErrors.message = "Message is required.";
      } else if (form.message.trim().length < 20) {
        nextErrors.message = "Please provide at least 20 characters.";
      }
      return nextErrors;
    },
    [form],
  );

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmitted(true);
    setForm(initialState);
  };

  return (
    <div>
      {submitted ? (
        <div className="mb-4 flex items-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
          <CheckCircle2 className="h-4 w-4" />
          Your message has been sent. Thank you for contacting the White House.
        </div>
      ) : null}

      <form className="space-y-4" onSubmit={onSubmit} noValidate>
        <div>
          <label htmlFor="name" className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-[#D4A843]">
            Name
          </label>
          <input
            id="name"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            className="h-11 w-full rounded-xl border border-white/20 bg-[#10213f] px-3 text-sm text-white placeholder:text-[#E8E6E1]/50 focus:outline-none focus:ring-2 focus:ring-[#D4A843]"
            placeholder="Your full name"
          />
          {errors.name ? <p className="mt-1 text-xs text-red-300">{errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-[#D4A843]">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            className="h-11 w-full rounded-xl border border-white/20 bg-[#10213f] px-3 text-sm text-white placeholder:text-[#E8E6E1]/50 focus:outline-none focus:ring-2 focus:ring-[#D4A843]"
            placeholder="you@example.com"
          />
          {errors.email ? <p className="mt-1 text-xs text-red-300">{errors.email}</p> : null}
        </div>

        <div>
          <label htmlFor="subject" className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-[#D4A843]">
            Subject
          </label>
          <select
            id="subject"
            value={form.subject}
            onChange={(event) => update("subject", event.target.value)}
            className="h-11 w-full rounded-xl border border-white/20 bg-[#10213f] px-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#D4A843]"
          >
            <option>General Feedback</option>
            <option>Policy Comment</option>
            <option>Visit Request</option>
            <option>Media Inquiry</option>
            <option>Internship Interest</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-xs font-semibold uppercase tracking-[0.16em] text-[#D4A843]">
            Message
          </label>
          <textarea
            id="message"
            value={form.message}
            onChange={(event) => update("message", event.target.value)}
            rows={6}
            className="w-full rounded-xl border border-white/20 bg-[#10213f] px-3 py-2 text-sm text-white placeholder:text-[#E8E6E1]/50 focus:outline-none focus:ring-2 focus:ring-[#D4A843]"
            placeholder="Share your message"
          />
          {errors.message ? <p className="mt-1 text-xs text-red-300">{errors.message}</p> : null}
        </div>

        <Button type="submit" className="w-full sm:w-auto">
          Send Message
        </Button>
      </form>
    </div>
  );
}

