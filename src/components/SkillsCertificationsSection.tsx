import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Bookmark,
  Sparkles,
  Palette,
  Figma,
  Instagram,
  Megaphone,
  BarChart3,
  Search,
  Workflow,
  Mail,
  Pin,
  PenTool,
  Scissors,
  Linkedin,
  Split,
  Compass
} from 'lucide-react';
import { SKILLS, CERTIFICATIONS } from '../data';

const SKILL_LOGOS: Record<string, { icon: any; color: string; bgColor: string; label: string }> = {
  "Creative Strategy": {
    icon: Sparkles,
    color: "text-amber-600",
    bgColor: "bg-amber-500/5 hover:bg-amber-500/10 border-amber-500/20",
    label: "Creative Strategy"
  },
  "Canva": {
    icon: Palette,
    color: "text-[#00C4CC]",
    bgColor: "bg-[#00C4CC]/5 hover:bg-[#00C4CC]/10 border-[#00C4CC]/20",
    label: "Canva Studio"
  },
  "Figma": {
    icon: Figma,
    color: "text-orange-500",
    bgColor: "bg-orange-500/5 hover:bg-orange-500/10 border-orange-500/20",
    label: "Figma Pro"
  },
  "Social Media Management": {
    icon: Instagram,
    color: "text-[#E1306C]",
    bgColor: "bg-[#E1306C]/5 hover:bg-[#E1306C]/10 border-[#E1306C]/20",
    label: "Social Management"
  },
  "Meta Ads Suite": {
    icon: Megaphone,
    color: "text-[#1877F2]",
    bgColor: "bg-[#1877F2]/5 hover:bg-[#1877F2]/10 border-[#1877F2]/20",
    label: "Meta Ads"
  },
  "Google Analytics 4": {
    icon: BarChart3,
    color: "text-[#F4B400]",
    bgColor: "bg-[#F4B400]/5 hover:bg-[#F4B400]/10 border-[#F4B400]/20",
    label: "Google Analytics"
  },
  "SEO Content Design": {
    icon: Search,
    color: "text-emerald-600",
    bgColor: "bg-emerald-500/5 hover:bg-emerald-500/10 border-emerald-500/20",
    label: "SEO Content"
  },
  "HubSpot Suite": {
    icon: Workflow,
    color: "text-[#FF7A59]",
    bgColor: "bg-[#FF7A59]/5 hover:bg-[#FF7A59]/10 border-[#FF7A59]/20",
    label: "HubSpot CRM"
  },
  "Mailchimp": {
    icon: Mail,
    color: "text-[#FFE01B] filter brightness-75",
    bgColor: "bg-[#FFE01B]/5 hover:bg-[#FFE01B]/10 border-[#FFE01B]/20",
    label: "Mailchimp"
  },
  "Pinterest Marketing": {
    icon: Pin,
    color: "text-[#E60023]",
    bgColor: "bg-[#E60023]/5 hover:bg-[#E60023]/10 border-[#E60023]/20",
    label: "Pinterest"
  },
  "Copywriting": {
    icon: PenTool,
    color: "text-indigo-600",
    bgColor: "bg-indigo-500/5 hover:bg-indigo-500/10 border-indigo-500/20",
    label: "Copywriting"
  },
  "CapCut": {
    icon: Scissors,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/5 hover:bg-cyan-500/10 border-cyan-500/20",
    label: "CapCut Video"
  },
  "LinkedIn Content Architecture": {
    icon: Linkedin,
    color: "text-[#0077B5]",
    bgColor: "bg-[#0077B5]/5 hover:bg-[#0077B5]/10 border-[#0077B5]/20",
    label: "LinkedIn Arch."
  },
  "A/B Testing Studio": {
    icon: Split,
    color: "text-violet-600",
    bgColor: "bg-violet-500/5 hover:bg-violet-500/10 border-violet-500/20",
    label: "A/B Testing"
  },
  "Brand Positioning": {
    icon: Compass,
    color: "text-rose-600",
    bgColor: "bg-rose-500/5 hover:bg-rose-500/10 border-rose-500/20",
    label: "Brand Positioning"
  }
};

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
          
          {/* Left Column: Grid of Brand App Logos */}
          <div className="lg:col-span-7 space-y-6" id="skills-pill-col">
            <div className="flex items-center gap-2 mb-2">
              <Bookmark className="w-5 h-5 text-soft-terracotta" />
              <h3 className="font-serif text-2xl font-light text-dark-charcoal">
                Interactive Toolkit
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4" id="skills-pill-container">
              {SKILLS.map((skill, index) => {
                const config = SKILL_LOGOS[skill] || {
                  icon: Bookmark,
                  color: "text-dark-charcoal",
                  bgColor: "bg-dark-charcoal/5 border-dark-charcoal/15",
                  label: skill
                };
                const IconComponent = config.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className={`p-4 rounded-2xl border ${config.bgColor} shadow-xs hover:shadow-md flex flex-col items-center justify-center text-center gap-3 bg-warm-ivory/80 cursor-default transition-all duration-300`}
                    id={`skill-pill-${index}`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-warm-beige/80 border border-warm-clay/40 ${config.color} shadow-inner`}>
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="block text-xs font-semibold text-dark-charcoal tracking-tight leading-tight">
                        {config.label}
                      </span>
                      <span className="block text-[8px] font-mono uppercase tracking-wider text-[#7F7B74]">
                        TOOL &bull; PLATFORM
                      </span>
                    </div>
                  </motion.div>
                );
              })}
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
