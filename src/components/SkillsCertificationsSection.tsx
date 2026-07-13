import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  Bookmark,
} from 'lucide-react';
import { SKILLS, CERTIFICATIONS } from '../data';

// --- Official/Real SVG Logo Components for each Platform ---

const CreativeStrategyLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="creativeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFA000" />
        <stop offset="100%" stopColor="#FF3D00" />
      </linearGradient>
    </defs>
    <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" fill="url(#creativeGrad)" />
    <circle cx="18.5" cy="5.5" r="1.5" fill="#FFC107" />
    <circle cx="5.5" cy="18.5" r="1.5" fill="#FFC107" />
  </svg>
);

const CanvaLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="canvaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#7d2ae8" />
        <stop offset="100%" stopColor="#00c4cc" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#canvaGrad)" />
    <path d="M7.5 12C7.5 9.5 9.5 7.5 12 7.5C13.2 7.5 14.3 8 15 8.8L13.8 10C13.4 9.5 12.7 9.2 12 9.2C10.5 9.2 9.2 10.5 9.2 12C9.2 13.5 10.5 14.8 12 14.8C12.7 14.8 13.4 14.5 13.8 14L15 15.2C14.3 16 13.2 16.5 12 16.5C9.5 16.5 7.5 14.5 7.5 12Z" fill="white" />
  </svg>
);

const FigmaLogo = () => (
  <svg viewBox="0 0 24 36" className="w-5 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0H6C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12H12V0Z" fill="#F24E1E"/>
    <path d="M18 12C21.3137 12 24 9.31371 24 6C24 2.68629 21.3137 0 18 0C14.6863 0 12 2.68629 12 6C12 9.31371 14.6863 12 18 12Z" fill="#FF7262"/>
    <path d="M12 12H6C2.68629 12 0 14.6863 0 18C0 21.3137 2.68629 24 6 24H12V12Z" fill="#A259FF"/>
    <path d="M18 24C21.3137 24 24 21.3137 24 18C24 14.6863 21.3137 12 18 12C14.6863 12 12 14.6863 12 18C12 21.3137 14.6863 24 18 24Z" fill="#1ABC9C"/>
    <path d="M6 36C9.31371 36 12 33.3137 12 30V24H6C2.68629 24 0 26.6863 0 30C0 33.3137 2.68629 36 6 36Z" fill="#0ACF83"/>
  </svg>
);

const InstagramLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="igGrad" cx="0.2" cy="1" r="1.4">
        <stop offset="0%" stopColor="#fed976" />
        <stop offset="40%" stopColor="#f58529" />
        <stop offset="60%" stopColor="#dd2a7b" />
        <stop offset="80%" stopColor="#8134af" />
        <stop offset="100%" stopColor="#515bd4" />
      </radialGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#igGrad)" />
    <rect x="5" y="5" width="14" height="14" rx="4" stroke="white" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.8" />
    <circle cx="16.5" cy="7.5" r="1" fill="white" />
  </svg>
);

const MetaLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.275 6c-1.84 0-3.111.96-4.275 2.164C10.836 6.96 9.565 6 7.725 6 4.3 6 1.5 8.7 1.5 12c0 3.3 2.8 6 6.225 6 1.84 0 3.111-.96 4.275-2.164 1.164 1.204 2.435 2.164 4.275 2.164 3.425 0 6.225-2.7 6.225-6 0-3.3-2.8-6-6.225-6zm-8.55 9.56c-2.106 0-3.725-1.564-3.725-3.56 0-1.996 1.619-3.56 3.725-3.56 1.562 0 2.658.98 3.332 1.895A22.863 22.863 0 017.15 12.518c-.461 0-.915-.126-1.287-.4-.094.469.198.984.697 1.147.375.122.784.093 1.163-.082a6.685 6.685 0 001.399-.812c.451.872.247 1.954-1.797 2.189zm8.55 0c-1.562 0-2.658-.98-3.332-1.895a22.863 22.863 0 013.907-2.183c.461 0 .915.126 1.287.4.094-.469-.198-.984-.697-1.147-.375-.122-.784-.093-1.163.082a6.685 6.685 0 00-1.399.812c-.451-.872-.247-1.954 1.797-2.189 2.106 0 3.725 1.564 3.725 3.56 0 1.996-1.619 3.56-3.725 3.56z" fill="#0064E0"/>
  </svg>
);

const GoogleAnalyticsLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="14" width="4" height="6" rx="1.5" fill="#F4B400" />
    <rect x="10" y="8" width="4" height="12" rx="1.5" fill="#E37400" />
    <rect x="17" y="3" width="4" height="17" rx="1.5" fill="#F4B400" />
  </svg>
);

const SeoLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="seoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00E676" />
        <stop offset="100%" stopColor="#00B0FF" />
      </linearGradient>
    </defs>
    <rect x="2" y="3" width="20" height="18" rx="3" stroke="url(#seoGrad)" strokeWidth="2.2" />
    <line x1="6" y1="8" x2="14" y2="8" stroke="url(#seoGrad)" strokeWidth="2.2" strokeLinecap="round" />
    <line x1="6" y1="12" x2="10" y2="12" stroke="url(#seoGrad)" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="15" cy="14" r="3.2" stroke="#00B0FF" strokeWidth="2.2" />
    <line x1="17.3" y1="16.3" x2="21" y2="20" stroke="#00B0FF" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const HubSpotLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#FF7A59" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="4" fill="none" />
    <circle cx="12" cy="12" r="1.5" fill="#FF7A59" />
    <line x1="8" y1="12" x2="4" y2="12" />
    <circle cx="3" cy="12" r="1.5" fill="#FF7A59" />
    <line x1="14.8" y1="9.2" x2="18.3" y2="5.7" />
    <circle cx="19.5" cy="4.5" r="1.5" fill="#FF7A59" />
    <line x1="12" y1="16" x2="12" y2="20" />
    <circle cx="12" cy="21" r="1.5" fill="#FF7A59" />
  </svg>
);

const PinterestLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.62 11.16-.1-.95-.19-2.4.04-3.43.21-.93 1.34-5.69 1.34-5.69s-.34-.69-.34-1.71c0-1.6 1-2.8 2.18-2.8 1.03 0 1.53.77 1.53 1.7 0 1.03-.66 2.58-1 4.01-.28 1.2.6 2.18 1.78 2.18 2.14 0 3.78-2.25 3.78-5.5 0-2.88-2.07-4.9-5.03-4.9-3.43 0-5.44 2.57-5.44 5.22 0 1.04.4 2.15.9 2.76.1.12.11.23.08.35-.09.37-.29 1.18-.33 1.34-.05.22-.18.27-.41.16C4.4 17.5 3 14.88 3 11.9c0-4.43 3.22-8.5 9.28-8.5 4.87 0 8.65 3.47 8.65 8.1 0 4.84-3.05 8.74-7.28 8.74-1.42 0-2.76-.74-3.22-1.62l-.88 3.35c-.32 1.22-1.18 2.74-1.76 3.68C8.83 23.8 10.37 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" fill="#E60023"/>
  </svg>
);

const SKILL_LOGOS: Record<string, { logo: any; bgColor: string; label: string; tag: string }> = {
  "Creative Strategy": {
    logo: CreativeStrategyLogo,
    bgColor: "bg-amber-500/5 hover:bg-amber-500/10 border-amber-500/20",
    label: "Creative Strategy",
    tag: "METHODOLOGY"
  },
  "Canva": {
    logo: CanvaLogo,
    bgColor: "bg-[#00C4CC]/5 hover:bg-[#00C4CC]/10 border-[#00C4CC]/20",
    label: "Canva Studio",
    tag: "DESIGN PLATFORM"
  },
  "Figma": {
    logo: FigmaLogo,
    bgColor: "bg-orange-500/5 hover:bg-orange-500/10 border-orange-500/20",
    label: "Figma Pro",
    tag: "PRODUCT DESIGN"
  },
  "Social Media Management": {
    logo: InstagramLogo,
    bgColor: "bg-[#E1306C]/5 hover:bg-[#E1306C]/10 border-[#E1306C]/20",
    label: "Social Management",
    tag: "CAMPAIGNS"
  },
  "Meta Ads Suite": {
    logo: MetaLogo,
    bgColor: "bg-[#1877F2]/5 hover:bg-[#1877F2]/10 border-[#1877F2]/20",
    label: "Meta Ads Suite",
    tag: "ACQUISITION"
  },
  "Google Analytics 4": {
    logo: GoogleAnalyticsLogo,
    bgColor: "bg-[#F4B400]/5 hover:bg-[#F4B400]/10 border-[#F4B400]/20",
    label: "Google Analytics 4",
    tag: "MEASUREMENT"
  },
  "SEO Content Design": {
    logo: SeoLogo,
    bgColor: "bg-emerald-500/5 hover:bg-emerald-500/10 border-emerald-500/20",
    label: "SEO Content",
    tag: "ORGANIC GROWTH"
  },
  "HubSpot Suite": {
    logo: HubSpotLogo,
    bgColor: "bg-[#FF7A59]/5 hover:bg-[#FF7A59]/10 border-[#FF7A59]/20",
    label: "HubSpot CRM",
    tag: "AUTOMATION"
  },
  "Pinterest Marketing": {
    logo: PinterestLogo,
    bgColor: "bg-[#E60023]/5 hover:bg-[#E60023]/10 border-[#E60023]/20",
    label: "Pinterest Marketing",
    tag: "VISUAL SEARCH"
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

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6" id="skills-pill-container">
              {SKILLS.map((skill, index) => {
                const config = SKILL_LOGOS[skill] || {
                  logo: Bookmark,
                  bgColor: "bg-dark-charcoal/5 border-dark-charcoal/15",
                  label: skill,
                  tag: "PLATFORM"
                };
                const LogoComponent = config.logo;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.04, y: -4 }}
                    className={`p-6 md:p-7 min-h-[185px] rounded-2xl border ${config.bgColor} shadow-sm hover:shadow-lg flex flex-col items-center justify-center text-center gap-4 bg-warm-ivory/90 hover:bg-warm-beige/45 cursor-default transition-all duration-300`}
                    id={`skill-pill-${index}`}
                  >
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-warm-beige/50 border border-warm-clay/40 shadow-inner group-hover:scale-110 transition-all duration-300">
                      {LogoComponent ? (
                        <LogoComponent />
                      ) : (
                        <Bookmark className="w-8 h-8 text-dark-charcoal/65" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <span className="block text-sm font-semibold text-dark-charcoal tracking-tight leading-snug">
                        {config.label}
                      </span>
                      <span className="block text-[8.5px] font-mono uppercase tracking-widest text-[#7F7B74]/90 font-medium">
                        {config.tag}
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
