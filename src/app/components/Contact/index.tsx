"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Loader2,
  CheckCircle,
  AlertCircle,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

// --- Type definition for our form state ---
interface FormData {
  name: string;
  email: string;
  reason: string;
  message: string;
}

// --- Type for submission state ---
type SubmissionState = "idle" | "submitting" | "success" | "error";

// --- WhatsApp Icon (self-contained) ---
const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-6 h-6 text-white"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.06 21.94L7.31 20.59C8.76 21.39 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.01 4.88C17.11 2.97 14.63 2 12.04 2ZM17.46 15.58C17.18 16.22 16.03 16.87 15.3 16.96C14.66 17.05 13.9 17.06 13.26 16.87C12.55 16.66 11.23 16.14 9.88 14.9C8.23 13.38 7.1 11.75 6.81 11.08C6.52 10.41 7.13 10.15 7.32 9.96C7.5 9.79 7.7 9.61 7.91 9.37C8.1 9.15 8.19 8.97 8.35 8.68C8.5 8.38 8.41 8.14 8.28 7.91C8.16 7.68 7.53 6.09 7.28 5.48C7.03 4.88 6.77 4.97 6.55 4.96C6.33 4.96 6.08 4.95 5.84 4.95C5.6 4.95 5.28 5.04 5 5.3C4.72 5.56 4.1 6.13 4.1 7.35C4.1 8.57 5.03 9.74 5.17 9.92C5.3 10.1 6.78 12.44 9.12 13.4C11.19 14.25 11.81 14.47 12.42 14.42C13.21 14.35 14.4 13.73 14.67 13.04C14.94 12.35 14.94 11.77 14.85 11.64C14.76 11.51 14.6 11.42 14.32 11.28C14.04 11.14 12.9 10.6 12.63 10.5C12.36 10.4 12.18 10.36 12.05 10.6C11.91 10.84 11.49 11.42 11.35 11.59C11.21 11.76 11.07 11.8 10.8 11.7C10.53 11.61 9.62 11.29 8.53 10.3C7.65 9.53 7.03 8.59 6.84 8.24C6.65 7.9 6.74 7.75 6.87 7.63C6.99 7.51 7.13 7.34 7.27 7.18C7.41 7.02 7.47 6.9 7.56 6.76C7.65 6.62 7.6 6.48 7.53 6.34C7.47 6.2 6.9 4.95 6.9 4.95" />
  </svg>
);

// --- Main Contact Page Component ---
const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    reason: "general",
    message: "",
  });
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionState("submitting");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Data Submitted:", formData);
    setSubmissionState("success");
    setFormData({ name: "", email: "", reason: "general", message: "" });
  };

  // --- Local Theme Definition (Earthy Sage, Cream & Moss) ---
  const style = {
    "--color-background": "#c8cfc0", // User's Muted Sage/Olive
    "--color-surface": "#FCFCF9", // Creamy, warm white
    "--color-text-primary": "#2B2A26", // Warm "Espresso" black
    "--color-text-secondary": "#5A5750", // Warm "Gray-brown"
    "--color-border": "#DEDCD5", // Warm, light gray border
    "--color-brand-primary": "#4A5D43", // Deep "Moss" Green
    "--color-brand-primary-hover": "#3A4A35", // Darker Moss Green
    "--color-brand-primary-text": "#FCFCF9", // Creamy white text
    "--color-brand-secondary": "#4A5D43", // Moss Green (for icons/links)
    "--color-brand-whatsapp": "#25D366",
    "--color-brand-whatsapp-hover": "#20b45a",
    "--color-success-bg": "#E6F7F0",
    "--color-success-text": "#00875A",
    "--color-error-bg": "#FFF0F0",
    "--color-error-text": "#D92D20",
  } as React.CSSProperties;

  return (
    // --- Apply Local Theme ---
    <div
      style={style}
      className="bg-[var(--color-background)] text-[var(--color-text-secondary)]"
    >
      {/* UPDATED: Smoothed out responsive padding for all screen sizes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* --- Header --- */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Have a question? We’d love to hear from you. Get in touch with our
            team directly.
          </p>
        </div>

        {/* --- Main Content Grid --- */}
        {/* UPDATED: Changed to md:grid-cols-2 to activate side-by-side on tablets */}
        {/* UPDATED: Added responsive gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* --- Left Column: Info --- */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
              Contact Information
            </h2>

            {/* --- Info Blocks --- */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[var(--color-brand-secondary)] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                    Email us
                  </h3>
                  <a
                    href="mailto:support@worldofnature.com"
                    className="text-[var(--color-brand-secondary)] hover:underline"
                  >
                    support@worldofnature.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[var(--color-brand-secondary)] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                    Call us
                  </h3>
                  <a
                    href="tel:+919528295991"
                    className="text-[var(--color-brand-secondary)] hover:underline"
                  >
                    +919528295991
                  </a>
                  <br />
                  <a
                    href="tel:+23057814480"
                    className="text-[var(--color-brand-secondary)] hover:underline"
                  >
                    +23057814480
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[var(--color-brand-secondary)] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                    Visit our office
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    123 Green Valley, Organic Farms Rd,
                    <br />
                    Nature City, India 400001
                  </p>
                </div>
              </div>
            </div>

            {/* --- Business Hours & Socials --- */}
            <div className="pt-6 border-t border-[var(--color-border)] space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">
                  Business Hours
                </h3>
                <p>
                  Monday - Friday: 9:00 AM - 6:00 PM (IST)
                  <br />
                  Saturday: 10:00 AM - 3:00 PM (IST)
                  <br />
                  Sunday: Closed
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-3">
                  Follow Us
                </h3>
                <div className="flex gap-5">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-[var(--color-text-primary)]"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-[var(--color-text-primary)]"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-[var(--color-text-primary)]"
                  >
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Column: Form --- */}
          <div className="space-y-6 bg-[var(--color-surface)] p-6 md:p-8 rounded-lg shadow-sm border border-[var(--color-border)]">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* --- Form Fields --- */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[var(--color-text-primary)]"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/50 bg-[var(--color-surface)] text-[var(--color-text-primary)]"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--color-text-primary)]"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/50 bg-[var(--color-surface)] text-[var(--color-text-primary)]"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="reason"
                  className="block text-sm font-medium text-[var(--color-text-primary)]"
                >
                  Reason for Contact*
                </label>
                <select
                  id="reason"
                  name="reason"
                  className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/50 bg-[var(--color-surface)] text-[var(--color-text-primary)]"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                >
                  <option value="general">General Inquiry</option>
                  <option value="order">Order Support</option>
                  <option value="product">Product Question</option>
                  <option value="wholesale">Wholesale Inquiry</option>
                  <option value="press">Press & Media</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[var(--color-text-primary)]"
                >
                  Your Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-brand-primary)] focus:ring-2 focus:ring-[var(--color-brand-primary)]/50 bg-[var(--color-surface)] text-[var(--color-text-primary)] resize-vertical"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* --- Submit Button --- */}
              <button
                type="submit"
                className="w-full bg-[var(--color-brand-primary)] text-[var(--color-brand-primary-text)] py-3 px-6 rounded-lg font-semibold hover:bg-[var(--color-brand-primary-hover)] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] focus-visible:ring-offset-2 flex items-center justify-center disabled:opacity-70"
                disabled={submissionState === "submitting"}
              >
                {submissionState === "submitting" ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {/* --- Submission State Message --- */}
              {submissionState === "success" && (
                <div className="flex items-center gap-2 rounded-md bg-[var(--color-success-bg)] p-3 text-sm text-[var(--color-success-text)]">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>
                    Thank you! Your message has been sent successfully.
                  </span>
                </div>
              )}
              {submissionState === "error" && (
                <div className="flex items-center gap-2 rounded-md bg-[var(--color-error-bg)] p-3 text-sm text-[var(--color-error-text)]">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>
                    Oops! Something went wrong. Please try again later.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
