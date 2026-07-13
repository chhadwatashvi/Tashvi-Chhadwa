import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Lightbulb, Plus, Minus } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function AboutSection() {
  const [expandedSection, setExpandedSection] = useState<string | null>('who-i-am');

  const toggleSection = (id: string) => {
    setExpandedSection(prev => (prev === id ? null : id));
  };
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
                src="https://lh3.googleusercontent.com/d/11TjkP9O8m3rBDCnkgck79Kj3rBWzbKXo"
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
          <div className="lg:col-span-7 space-y-6 text-left" id="about-right-side">
            
            {/* Editorial Stories - Interactive Accordion */}
            <div className="space-y-5">
              <div 
                id="who-i-am"
                className={`relative p-6 pr-14 rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                  expandedSection === 'who-i-am' 
                    ? 'bg-warm-beige border-warm-clay shadow-md' 
                    : 'bg-warm-ivory/40 border-warm-clay/30 hover:border-warm-clay/60'
                }`}
                onClick={() => toggleSection('who-i-am')}
              >
                {/* Background decorative visual trace */}
                {expandedSection === 'who-i-am' && (
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-soft-terracotta/5 rounded-full blur-xl pointer-events-none" />
                )}

                <h4 className="font-serif text-sm sm:text-base uppercase tracking-widest font-semibold text-soft-terracotta mb-2.5 select-none flex items-center gap-1.5">
                  <span className="font-mono text-xs opacity-60">01 //</span> Who I Am
                </h4>

                <div className={`absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  expandedSection === 'who-i-am' 
                    ? 'border-soft-terracotta bg-soft-terracotta/10 text-soft-terracotta scale-105' 
                    : 'border-warm-clay/50 text-[#7F7B74]'
                }`}>
                  {expandedSection === 'who-i-am' ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>

                <motion.div 
                  initial={false}
                  animate={{ 
                    height: expandedSection === 'who-i-am' ? 'auto' : '24px',
                    opacity: expandedSection === 'who-i-am' ? 1 : 0.75
                  }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="text-dark-charcoal/85 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xl cursor-pointer">
                    {expandedSection === 'who-i-am' 
                      ? "As a former design lead turned multi-channel growth strategist, I bridge the gap between creative execution and raw performance. I don't just build grids—I build visual engines that drive revenue."
                      : "Creative strategist bridging the gap between artistic execution and performance growth."
                    }
                  </p>

                  {/* Micro tagging chips */}
                  {expandedSection === 'who-i-am' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                      className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-warm-clay/35"
                    >
                      <span className="px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider bg-warm-ivory border border-warm-clay/40 text-[#7F7B74] rounded-full shadow-2xs">
                        Growth Architect
                      </span>
                      <span className="px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider bg-warm-ivory border border-warm-clay/40 text-[#7F7B74] rounded-full shadow-2xs">
                        Art Direction
                      </span>
                      <span className="px-2.5 py-1 text-[9px] font-mono uppercase tracking-wider bg-warm-ivory border border-warm-clay/40 text-[#7F7B74] rounded-full shadow-2xs">
                        Acquisition
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              </div>

              <div 
                id="what-i-do"
                className={`relative p-6 pr-14 rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                  expandedSection === 'what-i-do' 
                    ? 'bg-warm-beige border-warm-clay shadow-md' 
                    : 'bg-warm-ivory/40 border-warm-clay/30 hover:border-warm-clay/60'
                }`}
                onClick={() => toggleSection('what-i-do')}
              >
                {/* Background decorative visual trace */}
                {expandedSection === 'what-i-do' && (
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-muted-olive/5 rounded-full blur-xl pointer-events-none" />
                )}

                <h4 className="font-serif text-sm sm:text-base uppercase tracking-widest font-semibold text-soft-terracotta mb-2.5 select-none flex items-center gap-1.5">
                  <span className="font-mono text-xs opacity-60">02 //</span> What I Do
                </h4>

                <div className={`absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  expandedSection === 'what-i-do' 
                    ? 'border-soft-terracotta bg-soft-terracotta/10 text-soft-terracotta scale-105' 
                    : 'border-warm-clay/50 text-[#7F7B74]'
                }`}>
                  {expandedSection === 'what-i-do' ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>

                <motion.div 
                  initial={false}
                  animate={{ 
                    height: expandedSection === 'what-i-do' ? 'auto' : '24px',
                    opacity: expandedSection === 'what-i-do' ? 1 : 0.75
                  }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="text-dark-charcoal/85 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xl cursor-pointer">
                    {expandedSection === 'what-i-do' 
                      ? "I act as a translator. I build creative strategies containing fully developed visual guidelines, copywriting models, and performance targets. Once set, I personally direct campaigns to hit, trace, and exceed key acquisition objectives."
                      : "Translating brand identity into aesthetic digital pipelines and conversion engines."
                    }
                  </p>

                  {/* Micro Process grid */}
                  {expandedSection === 'what-i-do' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                      className="mt-5 pt-4 border-t border-warm-clay/35"
                    >
                      <p className="text-[9px] uppercase font-mono tracking-widest text-soft-terracotta mb-3">Creative Growth Pipeline</p>
                      <div className="grid grid-cols-3 gap-2.5 text-center text-[10px] font-mono text-[#7F7B74]">
                        <div className="bg-warm-ivory border border-warm-clay/40 p-2.5 rounded-xl flex flex-col justify-between h-14 shadow-2xs">
                          <span className="font-bold text-dark-charcoal text-[11px]">01</span>
                          <span className="text-[8px] tracking-wider uppercase font-semibold">CONCEPT</span>
                        </div>
                        <div className="bg-warm-ivory border border-warm-clay/40 p-2.5 rounded-xl flex flex-col justify-between h-14 shadow-2xs">
                          <span className="font-bold text-dark-charcoal text-[11px]">02</span>
                          <span className="text-[8px] tracking-wider uppercase font-semibold">DESIGN</span>
                        </div>
                        <div className="bg-warm-ivory border border-warm-clay/40 p-2.5 rounded-xl flex flex-col justify-between h-14 shadow-2xs">
                          <span className="font-bold text-dark-charcoal text-[11px]">03</span>
                          <span className="text-[8px] tracking-wider uppercase font-semibold">GROWTH</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>

              <div 
                id="what-makes-me-different"
                className={`relative p-6 pr-14 rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
                  expandedSection === 'what-makes-me-different' 
                    ? 'bg-warm-beige border-warm-clay shadow-md' 
                    : 'bg-warm-ivory/40 border-warm-clay/30 hover:border-warm-clay/60'
                }`}
                onClick={() => toggleSection('what-makes-me-different')}
              >
                {/* Background decorative visual trace */}
                {expandedSection === 'what-makes-me-different' && (
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-soft-terracotta/5 rounded-full blur-xl pointer-events-none" />
                )}

                <h4 className="font-serif text-sm sm:text-base uppercase tracking-widest font-semibold text-soft-terracotta mb-2.5 select-none flex items-center gap-1.5">
                  <span className="font-mono text-xs opacity-60">03 //</span> My DNA
                </h4>

                <div className={`absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                  expandedSection === 'what-makes-me-different' 
                    ? 'border-soft-terracotta bg-soft-terracotta/10 text-soft-terracotta scale-105' 
                    : 'border-warm-clay/50 text-[#7F7B74]'
                }`}>
                  {expandedSection === 'what-makes-me-different' ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>

                <motion.div 
                  initial={false}
                  animate={{ 
                    height: expandedSection === 'what-makes-me-different' ? 'auto' : '24px',
                    opacity: expandedSection === 'what-makes-me-different' ? 1 : 0.75
                  }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="text-dark-charcoal/85 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-xl cursor-pointer">
                    {expandedSection === 'what-makes-me-different' 
                      ? "Unlike conventional agency teams that build cookie-cutter templates, my creative workflows operate like a designer. I rely heavily on visual balance, textured color palettes, and deep emotional copy hooks."
                      : "Merging editorial-grade design aesthetics with deep emotional copy hooks."
                    }
                  </p>

                  {/* Dual Capability Matrix sliders */}
                  {expandedSection === 'what-makes-me-different' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                      className="mt-5 pt-4 border-t border-warm-clay/35 space-y-3"
                    >
                      <p className="text-[9px] uppercase font-mono tracking-widest text-soft-terracotta">Dual Capability Matrix</p>
                      <div className="space-y-2.5">
                        <div>
                          <div className="flex justify-between text-[9px] font-mono text-[#7F7B74] mb-1">
                            <span className="font-semibold">AESTHETIC CRAFTSMANSHIP</span>
                            <span className="font-bold text-dark-charcoal">95%</span>
                          </div>
                          <div className="h-1.5 bg-warm-clay/30 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: '95%' }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              className="h-full bg-soft-terracotta rounded-full"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-[9px] font-mono text-[#7F7B74] mb-1">
                            <span className="font-semibold">ANALYTICAL PERFORMANCE</span>
                            <span className="font-bold text-dark-charcoal">90%</span>
                          </div>
                          <div className="h-1.5 bg-warm-clay/30 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: '90%' }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              className="h-full bg-muted-olive rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
