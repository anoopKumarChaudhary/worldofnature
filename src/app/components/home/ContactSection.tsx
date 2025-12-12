import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  ArrowRight,
  Clock,
  Globe,
  Briefcase,
} from "lucide-react";
import ContactClient from "../../contact/ContactClient";

interface ContactSectionProps {
  className?: string;
}

export default function ContactSection({ className = "" }: ContactSectionProps) {
  return (
    <section className={`relative pt-24 md:pt-20 pb-6 md:pb-9 px-[8px] md:px-6 lg:px-12 z-10 ${className}`}>
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-6 md:mb-16 border-b border-[#1A2118]/10 pb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-2 w-2 bg-[#BC5633] rounded-full animate-pulse"></div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1A2118]">
                Support & Inquiries
              </span>
            </div>
            <h1 className="text-4xl lg:text-8xl font-serif font-medium tracking-tight text-[#1A2118]">
              Get in <span className="italic text-[#596157]">Touch.</span>
            </h1>
          </div>

          <div className="flex flex-col gap-2 text-right md:items-end">
            <p className="text-lg text-[#596157] max-w-sm font-light">
              Questions about our soil, our harvest, or just want to say
              hello?
            </p>
            <div className="flex items-center justify-end gap-6 mt-2 text-[#1A2118]/60 text-xs font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <Clock className="w-3 h-3" /> Mon-Fri 9-6 EST
              </span>
              <span className="flex items-center gap-2">
                <Globe className="w-3 h-3" /> Global Support
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12">
          {/* --- LEFT COLUMN: CONTACT CARDS --- */}
          <div className="lg:col-span-5 flex flex-col gap-6 animate-fade-up">
            {/* Main Primary Card */}
            <div className="bg-[#1A2118] text-[#F2F0EA] rounded-sm p-5 md:p-8 relative overflow-hidden shadow-2xl group flex-1">
              {/* Internal Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#BC5633] rounded-full mix-blend-overlay filter blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

              <h3 className="text-2xl font-serif mb-8 relative z-10">
                Direct Lines
              </h3>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-5 group/item cursor-default">
                  <div className="w-12 h-12 rounded-sm bg-[#F2F0EA]/10 flex items-center justify-center border border-[#F2F0EA]/5 group-hover/item:bg-[#BC5633] transition-colors duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">
                      Email Us
                    </p>
                    <a
                      href="mailto:hello@worldofnature.com"
                      className="text-lg font-medium hover:text-[#BC5633] transition-colors"
                    >
                      hello@worldofnature.com
                    </a>
                    <p className="text-sm opacity-50 mt-1 font-light">
                      Responds within 24h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group/item cursor-default">
                  <div className="w-12 h-12 rounded-sm bg-[#F2F0EA]/10 flex items-center justify-center border border-[#F2F0EA]/5 group-hover/item:bg-[#BC5633] transition-colors duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">
                      Call Us
                    </p>
                    <div className="flex flex-col">
                      <a
                        href="tel:+15550000000"
                        className="text-lg font-medium hover:text-[#BC5633] transition-colors"
                      >
                        +1 (555) NATURE
                      </a>
                      <a
                        href="tel:+916283724623"
                        className="text-lg font-medium hover:text-[#BC5633] transition-colors"
                      >
                        +91 62837 24623
                      </a>
                    </div>
                    <p className="text-sm opacity-50 mt-1 font-light">
                      Toll-free support
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group/item cursor-default">
                  <div className="w-12 h-12 rounded-sm bg-[#F2F0EA]/10 flex items-center justify-center border border-[#F2F0EA]/5 group-hover/item:bg-[#BC5633] transition-colors duration-300">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-50 mb-1">
                      Partnerships
                    </p>
                    <a
                      href="mailto:partners@worldofnature.com"
                      className="text-lg font-medium hover:text-[#BC5633] transition-colors"
                    >
                      partners@worldofnature.com
                    </a>
                    <p className="text-sm opacity-50 mt-1 font-light">
                      Wholesale & Media
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Info Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Location Card */}
              <div className="bg-white backdrop-blur-md border border-white/40 p-5 md:p-8 rounded-sm hover:bg-white transition-colors duration-300 flex flex-col justify-between min-h-[140px] md:min-h-[200px]">
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#BC5633]/10 flex items-center justify-center text-[#BC5633] mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-xl text-[#1A2118] mb-2">
                    Visit HQ
                  </h4>
                  <p className="text-[#596157] text-sm leading-relaxed">
                    123 Organic Way
                    <br />
                    Nature Valley, CA
                    <br />
                    90210
                  </p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <Link
                href="https://wa.me/15550000000"
                className="group bg-white backdrop-blur-md border border-white/40 p-5 md:p-8 rounded-sm hover:bg-[#25D366] transition-colors duration-500 flex flex-col justify-between relative overflow-hidden min-h-[140px] md:min-h-[200px]"
              >
                {/* Green Reveal Background */}
                <div className="absolute inset-0 bg-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-full bg-[#1A2118]/5 flex items-center justify-center text-[#1A2118] mb-4 group-hover:bg-white/20 group-hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-xl text-[#1A2118] mb-2 group-hover:text-white transition-colors">
                    WhatsApp
                  </h4>
                  <p className="text-[#596157] text-sm group-hover:text-white/90 transition-colors">
                    Chat instantly.
                  </p>
                </div>

                <div className="relative z-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1A2118] mt-4 group-hover:text-white transition-colors">
                  Start Chat{" "}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>

          {/* --- RIGHT COLUMN: THE FORM --- */}
          <div
            className="lg:col-span-7 animate-fade-up flex flex-col"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="bg-white backdrop-blur-xl rounded-sm p-5 md:p-12 shadow-[0_20px_60px_-15px_rgba(26,33,24,0.1)] border border-white relative h-full">
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-serif text-[#1A2118] mb-3">
                  Send a Message
                </h2>
                <p className="text-[#596157]">
                  Fill out the form below and we&apos;ll get back to you.
                </p>
              </div>

              <ContactClient />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
