import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Lightbulb } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-warm-ivory border-y border-warm-clay/50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-muted-olive/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Asymmetrical Grid Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-6 text-left" id="about-heading-col">
            <p className="text-xs uppercase tracking-widest font-mono text-soft-terracotta mb-2 flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 bg-soft-terracotta rounded-full"></span>
              Aesthetic Strategist
            </p>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-dark-charcoal leading-none tracking-tighter">
              About <span className="italic font-light">Me</span>
            </h2>
          </div>
          <div className="lg:col-span-6 text-left" id="about-intro-col">
            <h3 className="font-serif text-2xl md:text-3xl text-dark-charcoal font-light italic leading-relaxed max-w-lg">
              "Connecting the dots between high-fidelity art and cold, hard performance data."
            </h3>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Image Frame & Creative Narrative */}
          <div className="lg:col-span-5 space-y-10 text-left" id="about-left-side">
            <div className="relative group overflow-hidden rounded-[2rem] bg-warm-clay/30 aspect-[4/5] border border-warm-clay/40">
              <img
                src="/src/assets/images/marketer_portrait_1782102978826.jpg"
                alt="Tashvi Chhadwa Visual Workspace"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                id="about-portrait-img"
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark-charcoal/45 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-warm-beige bg-dark-charcoal/40 backdrop-blur-xs p-4 rounded-xl border border-white/15">
                <p className="text-[10px] uppercase tracking-widest font-mono text-soft-terracotta">Aesthetic Ethos</p>
                <p className="font-serif text-sm mt-1 text-warm-beige/90 italic">
                  &ldquo;A clean layout converts better than a noisy campaign everyday.&rdquo;
                </p>
              </div>
            </div>

            {/* Quick Facts Container */}
            <div className="p-8 bg-warm-beige rounded-[2rem] border border-warm-clay/60 text-left" id="quick-facts-panel">
              <div className="flex items-center gap-2 mb-6">
                <Lightbulb className="w-5 h-5 text-soft-terracotta" />
                <h4 className="font-serif text-lg font-light text-dark-charcoal tracking-wide">
                  Quick Facts
                </h4>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PERSONAL_INFO.quickFacts.map((fact, index) => (
                  <div
                    key={index}
                    className="group relative bg-warm-ivory hover:bg-dark-charcoal hover:sticky hover:text-warm-beige p-3.5 rounded-xl border border-warm-clay/55 text-xs text-dark-charcoal transition-all duration-300"
                    id={`quick-fact-${index}`}
                  >
                    <span className="font-medium flex items-center gap-1">
                      {fact.text}
                    </span>
                    {/* Tooltip detail */}
                    <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block w-48 bg-dark-charcoal text-warm-beige p-2.5 rounded-lg text-[10px] tracking-wide border border-warm-clay/20 z-30 shadow-md">
                      {fact.hoverText}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Core Methodology & Personality Traits */}
          <div className="lg:col-span-7 space-y-12 text-left" id="about-right-side">
            
            {/* Editorial Stories */}
            <div className="space-y-8">
              <div id="who-i-am">
                <h4 className="font-serif text-xs uppercase tracking-widest font-semibold text-soft-terracotta mb-2">
                  01 // Who I Am
                </h4>
                <p className="text-dark-charcoal/85 text-base font-light leading-relaxed max-w-xl">
                  {PERSONAL_INFO.brief}
                </p>
              </div>

              <div id="what-i-do">
                <h4 className="font-serif text-xs uppercase tracking-widest font-semibold text-soft-terracotta mb-2">
                  02 // What I Do
                </h4>
                <p className="text-dark-charcoal/85 text-base font-light leading-relaxed max-w-xl">
                  I act as a translator. I build creative strategies containing fully developed visual guidelines, copywriting models, and performance targets. Once set, I personally direct campaigns to hit, trace, and exceed key acquisition objectives.
                </p>
              </div>

              <div id="what-makes-me-different">
                <h4 className="font-serif text-xs uppercase tracking-widest font-semibold text-soft-terracotta mb-2">
                  03 // My DNA
                </h4>
                <p className="text-dark-charcoal/85 text-base font-light leading-relaxed max-w-xl">
                  Unlike conventional agency teams that build cookie-cutter landing templates, my creative workflows operate like a high-end designer. I rely heavily on visual balance, textured color pallets, and deep emotional copy hooks.
                </p>
              </div>
            </div>


          </div>

        </div>
      </div>
    </section>
  );
}
