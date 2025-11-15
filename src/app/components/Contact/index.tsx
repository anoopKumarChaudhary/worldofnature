"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

// --- Type definition for our form state ---
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// --- Icons (strokeWidth changed to 1.5 for a finer look) ---
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-[var(--color-text-secondary)]"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.49 1.49c-1.82-3.313-4.69-6.182-7.903-7.903l1.49-1.49c.362-.362.527-.833.417-1.173L6.963 3.102A1.125 1.125 0 005.87 2.25H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    />
  </svg>
);
const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-[var(--color-text-secondary)]"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
);
const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 text-[var(--color-text-secondary)]"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
);
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

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data Submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8">
      {/* --- Header --- */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-4">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          Have a question about our products, or just want to say hello? We’d
          love to hear from you.
        </p>
      </div>

      {/* --- Main Content Grid --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* --- Left Column: Info --- */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
            Our Office
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            Get in touch with us directly for any enquiries.
          </p>

          <div className="space-y-6">
            <a
              href="https://wa.me/9528295991" // <-- Add your WhatsApp number here
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1EAE56] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              <WhatsAppIcon />
              <span>Chat on WhatsApp</span>
            </a>

            <div className="flex items-start gap-4">
              <EmailIcon />
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  Email us
                </h3>
                <a
                  href="mailto:apeywon@gmail.com"
                  className="text-[var(--color-brand-primary)] hover:underline"
                >
                  support@worldofnature.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <PhoneIcon />
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  Call us
                </h3>
                <a
                  href="tel:+919528295991"
                  className="text-[var(--color-brand-primary)] hover:underline"
                >
                  +919528295991
                </a>{" "}
                <br></br>
                <a
                  href="tel:+23057814480"
                  className="text-[var(--color-brand-primary)] hover:underline"
                >
                  +23057814480
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <LocationIcon />
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
        </div>

        {/* --- Right Column: Form --- */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
            Get In Touch For Enquiries
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            For questions about orders or purchasing, feel free to ask.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] bg-[var(--color-surface)] text-[var(--color-text-primary)]"
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
                className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] bg-[var(--color-surface)] text-[var(--color-text-primary)]"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-[var(--color-text-primary)]"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] bg-[var(--color-surface)] text-[var(--color-text-primary)]"
                value={formData.subject}
                onChange={handleChange}
              />
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
                className="w-full px-4 py-3 border border-[var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-primary)] bg-[var(--color-surface)] text-[var(--color-text-primary)] resize-vertical"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--color-brand-primary)] text-[var(--color-brand-primary-text)] py-3 px-6 rounded-lg font-semibold hover:bg-[var(--color-brand-accent)] transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* --- Map Section (Optional) --- */}
      {/* This is where you would put your map embed code */}
      <div className="mt-12">
        {/* Example of an embedded Google Map */}
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.1947413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f43a6a3b2a3b%3A0x1e7b231a2c3a2a3b!2sNational%20Monument!5e0!3m2!1sen!2sid!4v1621234567890!5m2!1sen!2sid"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
      </div>
    </div>
  );
};

export default ContactPage;
