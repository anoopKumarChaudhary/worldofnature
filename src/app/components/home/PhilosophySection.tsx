import { MapPin, Microscope, Sun, Sprout, HeartHandshake, Hourglass, Activity, Leaf } from "lucide-react";

export default function PhilosophySection() {
  const principles = [
    { 
      icon: MapPin, 
      title: "Know the Source", 
      tag: "GPS TRACKED", 
      text: "See exactly where your jar came from. No secrets." 
    },
    { 
      icon: Microscope, 
      title: "Pure & Safe", 
      tag: "LAB VERIFIED", 
      text: "We test every batch to make sure it is clean and strong." 
    },
    { 
      icon: Sun, 
      title: "Nature Dried", 
      tag: "NO HEAT", 
      text: "Dried slowly by the sun and air to keep the nutrients alive." 
    },
    { 
      icon: Sprout, 
      title: "Picked Ripe", 
      tag: "SEASONAL", 
      text: "We only harvest when the plants are fully ready." 
    },
    { 
      icon: HeartHandshake, 
      title: "Farmers First", 
      tag: "FAIR TRADE", 
      text: "No middlemen. The farmers keep 100% of the profit." 
    },
    { 
      icon: Hourglass, 
      title: "Handcrafted", 
      tag: "SMALL BATCH", 
      text: "Made in tiny lots of 50 jars so we can focus on quality." 
    },
  ];

  return (
    // BG: Warm Off-White / Cream (#F8F7F5)
    <section className="relative py-16 md:py-24 bg-[#F8F7F5] text-[#243328] overflow-hidden">
      
      {/* Texture: Subtle organic noise */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-darken bg-[url('https://www.transparenttextures.com/patterns/dust.png')]"></div>

      {/* Decorative leaf for organic touch */}
      <Leaf className="absolute -top-10 -right-10 w-64 h-64 text-[#4A7C59] opacity-[0.03] rotate-12 pointer-events-none" />

      {/* Container: Strict 8px padding on mobile */}
      <div className="container mx-auto px-[8px] md:px-12 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#243328]/10 pb-6 mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
               <Activity className="w-4 h-4 text-[#4A7C59]" />
               <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#4A7C59]">
                 Our Standards
               </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-[#243328] leading-none tracking-tight">
              How We <span className="italic text-[#4A7C59]">Work.</span>
            </h2>
          </div>
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-[#5D6B62] text-right md:text-left hidden md:block">
            The Natural Way
          </span>
        </div>

        {/* THE GRID 
            - gap-1.5 on mobile (Very tight, architectural look)
            - gap-3 on desktop
        */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-4">
          {principles.map((p, i) => (
            <div 
              key={i} 
              className="
                group relative flex flex-col justify-between
                /* CARD BASE: White, Sharp Corners */
                bg-white hover:bg-white
                rounded-none
                
                /* BORDER: Subtle light grey, turns green on hover */
                border border-[#E5E7EB] hover:border-[#4A7C59]/40
                
                /* PADDING: Compact */
                p-3 md:p-8
                
                /* ANIMATION */
                transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                
                /* SHADOW: Subtle lift on hover */
                shadow-sm
                hover:shadow-[0px_8px_24px_rgba(74,124,89,0.12)]
                hover:-translate-y-1
              "
            >
              <div>
                {/* Header Row */}
                <div className="flex justify-between items-start mb-3 md:mb-6">
                  {/* Icon Box - Square with 0 radius */}
                  <div className="
                    w-8 h-8 md:w-12 md:h-12 
                    flex items-center justify-center 
                    /* Light green tint BG */
                    bg-[#F0F5F2] group-hover:bg-[#4A7C59] 
                    rounded-none transition-colors duration-500
                  ">
                    <p.icon className="w-4 h-4 md:w-6 md:h-6 text-[#4A7C59] group-hover:text-white transition-colors duration-500" />
                  </div>
                  
                  {/* Number Watermark */}
                  <span className="font-mono text-[10px] md:text-xs text-[#243328]/20 group-hover:text-[#4A7C59]/40 transition-colors font-bold">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="font-serif text-[16px] md:text-2xl text-[#243328] mb-1.5 leading-none tracking-tight group-hover:text-[#4A7C59] transition-colors">
                  {p.title}
                </h3>
                
                {/* Tag Pill - Sharp corners to match theme */}
                <div className="mb-3 md:mb-5">
                   <span className="
                     inline-block 
                     px-1.5 py-[2px] rounded-none
                     bg-[#F0F5F2] group-hover:bg-[#E3F0E8]
                     font-mono text-[8px] md:text-[9px] font-bold uppercase tracking-wider 
                     text-[#4A7C59]
                     transition-colors duration-300
                   ">
                    {p.tag}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-auto pt-3 border-t border-[#F3F4F6] group-hover:border-[#4A7C59]/20 transition-colors">
                <p className="font-sans text-[11px] md:text-[15px] text-[#5D6B62] leading-[1.4] md:leading-relaxed">
                  {p.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}