import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowDown, ChevronRight, TrendingUp, Sparkles, Plus, Minus, Leaf, BookOpen } from 'lucide-react';
import { CASE_STUDIES } from '../data';

export default function CaseStudiesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="case-studies" className="py-24 bg-warm-ivory border-y border-warm-clay/50 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-48 h-48 bg-soft-terracotta/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end text-left">
          <div className="lg:col-span-8" id="cs-header-col">
            <span className="text-xs uppercase tracking-widest font-mono text-soft-terracotta mb-2 inline-block">
              // Deep-Dive Strategies
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-dark-charcoal leading-none tracking-tighter">
              Case <span className="italic font-light">Studies</span>
            </h2>
          </div>
          <div className="lg:col-span-4" id="cs-desc-col">
            <p className="text-mid-tint text-sm leading-relaxed font-light font-sans">
              Comprehensive breakdowns of high-end positioning. Click on any card to slide open and reveal original brand challenges, execution layers, and core audited outcomes.
            </p>
          </div>
        </div>

        {/* Dynamic Editorial Cards Stack */}
        <div className="space-y-8" id="case-studies-stack">
          {CASE_STUDIES.map((study, idx) => {
            const isExpanded = expandedId === study.id;
            
            return (
              <div
                key={study.id}
                className="bg-warm-beige rounded-[2rem] border border-warm-clay/65 overflow-hidden transition-all duration-300"
                id={`case-card-${study.id}`}
              >
                {/* Main Card Header Area - Always Visible */}
                <div
                  onClick={() => toggleExpand(study.id)}
                  className="p-8 sm:p-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 cursor-pointer hover:bg-warm-clay/15 transition-all duration-300 relative group"
                  id={`case-card-header-${study.id}`}
                >
                  <div className="flex flex-col sm:flex-row items-start gap-5 max-w-2xl text-left">
                    {/* Visual Case Icon Badge */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border shadow-2xs group-hover:scale-105 transition-transform duration-300 ${
                      study.id === 'cs1' 
                        ? 'bg-[#E3E8E1] border-muted-olive/35 text-muted-olive shadow-muted-olive/5' 
                        : 'bg-soft-terracotta/10 border-soft-terracotta/35 text-soft-terracotta shadow-soft-terracotta/5'
                    }`}>
                      {study.id === 'cs1' ? (
                        <Leaf className="w-6 h-6 stroke-[1.75]" />
                      ) : (
                        <BookOpen className="w-6 h-6 stroke-[1.75]" />
                      )}
                    </div>

                    <div className="space-y-2.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-block px-3 py-1 bg-dark-charcoal/5 border border-dark-charcoal/10 rounded-full font-mono text-[9px] font-semibold text-mid-tint tracking-widest uppercase">
                          {study.tag}
                        </span>
                        <span className="text-xs font-mono text-soft-terracotta font-semibold">0{idx + 1} // CASE STUDY</span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-dark-charcoal font-light leading-tight">
                        {study.title}
                      </h3>
                    </div>
                  </div>

                  {/* Highlights/Prominent Metrics Preview */}
                  <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto mt-2 lg:mt-0 lg:self-center shrink-0">
                    {study.metrics.slice(0, 2).map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="bg-warm-ivory px-4 py-2.5 rounded-full border border-warm-clay/50 text-xs font-serif font-semibold text-dark-charcoal flex items-center gap-1.5 shadow-3xs"
                      >
                        <TrendingUp className="w-3.5 h-3.5 text-soft-terracotta" />
                        {m}
                      </div>
                    ))}

                    {/* Expand/Collapse Custom Button */}
                    <button
                      className={`w-12 h-12 rounded-full border border-dark-charcoal/15 flex items-center justify-center transition-all ${
                        isExpanded ? 'bg-dark-charcoal text-warm-beige' : 'bg-warm-ivory text-dark-charcoal hover:bg-dark-charcoal/5'
                      }`}
                      id={`expand-btn-${study.id}`}
                      aria-label="Expand Case Study"
                    >
                      {isExpanded ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Animated Drawer Section */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="border-t border-warm-clay/40 overflow-hidden"
                    >
                      <div className="p-8 sm:p-10 bg-warm-ivory/55 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
                        
                        {/* Column Left: Challenge & Strategy */}
                        <div className="lg:col-span-6 space-y-6">
                          <div>
                            <h4 className="text-[10px] uppercase font-mono tracking-widest text-soft-terracotta font-bold mb-2">
                              THE CHALLENGE
                            </h4>
                            <p className="text-sm font-light leading-relaxed text-dark-charcoal/80">
                              {study.challenge}
                            </p>
                          </div>

                          <div className="border-t border-warm-clay/40 pt-6">
                            <h4 className="text-[10px] uppercase font-mono tracking-widest text-muted-olive font-bold mb-2">
                              THE POSITIONING STRATEGY
                            </h4>
                            <p className="text-sm font-light leading-relaxed text-dark-charcoal/80">
                              {study.strategy}
                            </p>
                          </div>
                        </div>

                        {/* Column Right: Execution & Final Impact */}
                        <div className="lg:col-span-6 space-y-6">
                          <div>
                            <h4 className="text-[10px] uppercase font-mono tracking-widest text-dark-charcoal/40 font-bold mb-2">
                              TACTICAL EXECUTION SPRINT
                            </h4>
                            <p className="text-sm font-light leading-relaxed text-dark-charcoal/80">
                              {study.execution}
                            </p>
                          </div>

                          <div className="border-t border-warm-clay/40 pt-6 bg-muted-olive/5 p-6 rounded-2xl border border-muted-olive/15">
                            <h4 className="text-[10px] uppercase font-mono tracking-widest text-muted-olive font-bold mb-2 flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5" />
                              AUDITED CAMPAIGN AUDIT OUTCOME
                            </h4>
                            <p className="text-sm font-serif font-medium text-dark-charcoal leading-relaxed mb-4">
                              {study.results}
                            </p>

                            {/* Detailed Metrics Badges */}
                            <div className="flex flex-wrap gap-2.5">
                              {study.metrics.map((val, mIdx) => (
                                <span
                                  key={mIdx}
                                  className="inline-flex items-center gap-1 bg-warm-beige px-3.5 py-1.5 rounded-lg border border-warm-clay/60 text-[11px] font-mono font-medium text-dark-charcoal"
                                >
                                  <Check className="w-3 h-3 text-soft-terracotta" />
                                  {val}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
