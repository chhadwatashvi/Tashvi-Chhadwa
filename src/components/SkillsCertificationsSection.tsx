import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, CheckCircle2, Bookmark } from 'lucide-react';
import { SKILLS, CERTIFICATIONS } from '../data';

export default function SkillsCertificationsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CERTIFICATIONS.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      id="skills"
      className="py-24 bg-warm-beige relative overflow-hidden border-b border-warm-clay/50 paper-texture"
    >
      <div className="absolute top-0 left-0 w-64 h-64 bg-soft-terracotta/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end text-left">
          <div className="lg:col-span-8" id="sc-header-col">
            <span className="text-xs uppercase tracking-widest font-mono text-soft-terracotta mb-2 inline-block">
              // Competencies &amp; Credentials
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-dark-charcoal leading-none tracking-tighter">
              Skills &amp; <span className="italic font-light">Credentials</span>
            </h2>
          </div>
          <div className="lg:col-span-4" id="sc-desc-col">
            <p className="text-mid-tint text-sm leading-relaxed font-light">
              A comprehensive toolkit covering creative direction, heavy analytical platforms, copywriting tools, design files, and conversion metrics.
            </p>
          </div>
        </div>

        {/* Competency Content Grid: Pills vs Stacks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start text-left">
          
          {/* Left Column: Pill-shaped Skills Cloud */}
          <div className="lg:col-span-7 space-y-6" id="skills-pill-col">
            <div className="flex items-center gap-2 mb-2">
              <Bookmark className="w-5 h-5 text-soft-terracotta" />
              <h3 className="font-serif text-2xl font-light text-dark-charcoal">
                Interactive Toolkit
              </h3>
            </div>

            <div className="flex flex-wrap gap-3.5" id="skills-pill-container">
              {SKILLS.map((skill, index) => (
                <div
                  key={index}
                  className="px-5 py-3 bg-warm-ivory text-xs font-semibold text-dark-charcoal tracking-wide rounded-full border border-warm-clay/55 shadow-xs hover:border-soft-terracotta hover:bg-dark-charcoal hover:sticky hover:text-warm-beige transform hover:scale-103 transition-all duration-300 cursor-default"
                  id={`skill-pill-${index}`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Stacked Certifications Preview */}
          <div className="lg:col-span-5 space-y-6" id="certs-stack-col">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-muted-olive" />
              <h3 className="font-serif text-2xl font-light text-dark-charcoal">
                Verified Credentials
              </h3>
            </div>

            {/* Automated Animated Stacked Cards Layer */}
            <div 
              className="relative min-h-[380px] flex flex-col items-center justify-center p-4"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute inset-0 bg-transparent pointer-events-none"></div>

              <div className="relative w-full max-w-[340px] h-[280px] flex items-center justify-center">
                {CERTIFICATIONS.map((cert, index) => {
                  const offset = (index - activeIndex + CERTIFICATIONS.length) % CERTIFICATIONS.length;
                  const isTop = offset === 0;

                  // Dynamic positions based on current offset in the stack
                  const rotations = [0, 4, -4];
                  const translationsY = [0, 16, 32];
                  const scales = [1, 0.95, 0.90];
                  const opacities = [1, 0.85, 0.7];
                  const zIndices = [30, 20, 10];

                  const rotation = rotations[offset % rotations.length];
                  const Y = translationsY[offset % translationsY.length];
                  const scale = scales[offset % scales.length];
                  const opacity = opacities[offset % opacities.length];
                  const zIndex = zIndices[offset % zIndices.length];

                  return (
                    <motion.div
                      key={index}
                      style={{
                        zIndex: zIndex,
                        transformOrigin: 'bottom center',
                      }}
                      initial={{ opacity: 0, y: 50, rotate: 0 }}
                      animate={{
                        opacity: opacity,
                        y: Y,
                        rotate: rotation,
                        scale: scale,
                      }}
                      whileHover={isTop ? {
                        y: Y - 12,
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      } : {
                        scale: scale + 0.02,
                        transition: { duration: 0.2 }
                      }}
                      onClick={() => setActiveIndex(index)}
                      transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 22,
                      }}
                      className={`absolute w-full max-w-[340px] aspect-[4/3] bg-warm-ivory p-6 rounded-2xl border border-warm-clay/80 shadow-md flex flex-col justify-between cursor-pointer select-none transition-shadow duration-300 ${isTop ? 'shadow-lg border-warm-clay' : 'hover:border-warm-clay/90'}`}
                    >
                      {/* Header */}
                      <div className="flex justify-between items-start">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-dark-charcoal/5 text-dark-charcoal border border-dark-charcoal/10">
                          <ShieldCheck className="w-5 h-5 text-soft-terracotta" />
                        </div>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#7F7B74]">
                          ISSUED &bull; {cert.year}
                        </span>
                      </div>

                      {/* Middle Core Info */}
                      <div className="space-y-1.5 py-4">
                        <h4 className="font-serif text-base sm:text-lg leading-tight text-dark-charcoal font-medium">
                          {cert.title}
                        </h4>
                        <p className="font-sans text-xs text-mid-tint italic">
                          {cert.issuer}
                        </p>
                      </div>

                      {/* Bottom Status decoration */}
                      <div className="flex items-center gap-1.5 border-t border-warm-clay/40 pt-3 text-left">
                        <CheckCircle2 className="w-3.5 h-3.5 text-muted-olive" />
                        <span className="font-mono text-[9px] tracking-widest uppercase font-semibold text-muted-olive">
                          Verified Credentials Active
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Progress Dot Indicators */}
              <div className="flex items-center gap-2.5 mt-8 z-40">
                {CERTIFICATIONS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="group relative p-1.5 focus:outline-none"
                    aria-label={`Go to certification ${index + 1}`}
                  >
                    <div className="relative w-2.5 h-2.5 rounded-full overflow-hidden">
                      <div className={`absolute inset-0 rounded-full transition-all duration-500 ${activeIndex === index ? 'bg-soft-terracotta scale-100' : 'bg-warm-clay/60 scale-75 group-hover:bg-warm-clay group-hover:scale-100'}`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
