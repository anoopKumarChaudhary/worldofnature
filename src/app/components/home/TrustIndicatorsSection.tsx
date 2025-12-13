"use client";

import React from "react";
import {
  Leaf,
  ShieldCheck,
  FlaskConical,
  HeartHandshake,
  MapPin,
  PackageCheck,
} from "lucide-react";

const TrustIndicatorsSection = () => {
  const indicators = [
    { icon: Leaf, text: "100% Natural" },
    { icon: ShieldCheck, text: "No Chemicals" },
    { icon: FlaskConical, text: "Lab Tested" },
    { icon: HeartHandshake, text: "Ethically Sourced" },
    { icon: PackageCheck, text: "Small-Batch Crafted" },
    { icon: MapPin, text: "Made in India" },
  ];

  return (
    <section className="relative bg-[#F8F6F1] border-b border-[rgba(26,33,24,0.12)]">
      <div className="max-w-7xl mx-auto px-2 md:px-4 py-10 md:py-12">

        {/* Desktop / Tablet */}
        <div className="hidden md:flex justify-center">
          <div className="flex items-center bg-white border border-[rgba(26,33,24,0.12)] px-6 py-4 shadow-sm">
            {indicators.map((item, index) => {
              const Icon = item.icon;
              return (
                <React.Fragment key={index}>
                  <div className="flex items-center gap-3 px-6 group">
                    <Icon
                      className="w-5 h-5 text-[#B56B56] transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.5}
                    />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[rgba(26,33,24,0.72)]">
                      {item.text}
                    </span>
                  </div>
                  {index < indicators.length - 1 && (
                    <span className="w-px h-6 bg-[rgba(26,33,24,0.15)]" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Mobile */}
        <div className="grid grid-cols-2 gap-2 md:hidden">
          {indicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="
                  flex items-center gap-2
                  px-3 py-2.5
                  bg-white
                  border border-[rgba(26,33,24,0.12)]
                  shadow-sm
                "
              >
                <Icon
                  className="w-4.5 h-4.5 text-[#B56B56]"
                  strokeWidth={1.5}
                />
                <span className="text-[10.5px] font-semibold uppercase tracking-wide text-[rgba(26,33,24,0.72)] leading-tight">
                  {item.text}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TrustIndicatorsSection;
