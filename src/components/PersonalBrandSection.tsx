import { motion } from 'motion/react';
import { Camera, Heart, Palette, Globe, Quote, Coffee } from 'lucide-react';
import { PERSONAL_BRAND } from '../data';

export default function PersonalBrandSection() {
  const iconList = [
    <Palette className="w-5 h-5 text-soft-terracotta" />,
    <Coffee className="w-5 h-5 text-muted-olive" />,
    <Heart className="w-5 h-5 text-amber-600" />
  ];

  return (
    <section
      id="brand"
      className="py-24 bg-warm-ivory border-b border-warm-clay/50 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-muted-olive/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end text-left">
          <div className="lg:col-span-8" id="pb-header-col">
            <span className="text-xs uppercase tracking-widest font-mono text-soft-terracotta mb-2 inline-block">
              // Creative Identity
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-dark-charcoal leading-none tracking-tighter">
              Beyond <span className="italic font-light">Marketing</span>
            </h2>
          </div>
          <div className="lg:col-span-4" id="pb-desc-col">
            <p className="text-mid-tint text-sm leading-relaxed font-light">
              Deconstructing a modern marketer: a synthesis of visual design discipline, architectural curation, and genuine human engagement.
            </p>
          </div>
        </div>

        {/* High End Magazine Style Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="personal-brand-grid">
          
          {/* Main Large Column Left: Philosophy & Aspirations */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8" id="pb-left-col">
            
            {/* Elegant Large Quote Box */}
            <div className="bg-warm-beige p-10 rounded-[2.5rem] border border-warm-clay/65 text-left relative overflow-hidden flex flex-col justify-center min-h-[220px]">
              <div className="absolute top-6 left-6 text-dark-charcoal/5">
                <Quote className="w-24 h-24 stroke-[1px]" />
              </div>
              <p className="font-serif text-2xl sm:text-3xl italic font-light text-dark-charcoal max-w-xl relative z-10 leading-relaxed">
                &ldquo;{PERSONAL_BRAND.quote}&rdquo;
              </p>
            </div>

            {/* Asymmetrical Grid of brand elements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {PERSONAL_BRAND.sections.slice(0, 2).map((section, idx) => (
                <div
                  key={idx}
                  className="bg-warm-beige p-8 rounded-[2rem] border border-warm-clay/60 hover:border-warm-clay hover:shadow-xs transition-all duration-300"
                  id={`pb-section-${idx}`}
                >
                  <div className="p-2.5 bg-warm-ivory rounded-xl border border-warm-clay/40 inline-flex items-center justify-center mb-4">
                    {iconList[idx % iconList.length]}
                  </div>
                  <h4 className="font-serif text-lg text-dark-charcoal font-medium mb-2.5">
                    {section.title}
                  </h4>
                  <p className="text-xs text-mid-tint leading-relaxed font-light">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Mini Curation Frame & Third core item */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left" id="pb-right-col">
            
            {/* Third Core Item */}
            <div className="bg-warm-beige p-8 rounded-[2rem] border border-warm-clay/60 hover:border-warm-clay hover:shadow-xs transition-all duration-300">
              <div className="p-2.5 bg-warm-ivory rounded-xl border border-warm-clay/40 inline-flex items-center justify-center mb-4">
                {iconList[2]}
              </div>
              <h4 className="font-serif text-lg text-dark-charcoal font-medium mb-2.5">
                {PERSONAL_BRAND.sections[2].title}
              </h4>
              <p className="text-xs text-mid-tint leading-relaxed font-light font-sans">
                {PERSONAL_BRAND.sections[2].text}
              </p>
            </div>

            {/* Visual Workspace Inspiration block */}
            <div className="relative group rounded-[2.5rem] overflow-hidden border border-warm-clay/70 aspect-[4/3] bg-warm-clay/40 shadow-md">
              <img
                src="https://lh3.googleusercontent.com/d/19lY4EISc7YvUzCKB8SZ4WJfuzv56fbTt"
                alt="Workspace and architectural design aesthetic mockup"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale opacity-95 group-hover:scale-103 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark-charcoal/80 to-transparent"></div>

              {/* Float indicators */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full border border-white/10">
                <Camera className="w-3 h-3 text-warm-beige" />
                <span className="text-[9px] font-mono tracking-widest text-warm-beige font-semibold uppercase">
                  Aesthetic Curation #042
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-warm-beige">
                <p className="font-serif text-lg italic text-warm-beige/95">&ldquo;Luxury lies in the quiet details.&rdquo;</p>
                <p className="text-[10px] text-warm-beige/65 uppercase tracking-widest font-mono mt-1">&mdash; Tashvi Chhadwa</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
