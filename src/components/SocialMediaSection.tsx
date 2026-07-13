import { Play, Instagram, Linkedin, Monitor, Smartphone, Sparkles, ExternalLink } from 'lucide-react';
import { SOCIAL_MEDIA_GRID } from '../data';

export default function SocialMediaSection() {
  return (
    <section id="social-media" className="py-24 bg-warm-beige relative overflow-hidden">
      <div className="absolute top-10 left-10 w-24 h-24 bg-soft-terracotta/5 rounded-full blur-2xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end text-left">
          <div className="lg:col-span-8" id="sm-heading-col">
            <span className="text-xs uppercase tracking-widest font-mono text-soft-terracotta mb-2 inline-block">
              // Creative &amp; Editorial Assets
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-dark-charcoal leading-none tracking-tighter">
              Social Media <span className="italic font-light">Content</span>
            </h2>
          </div>
          <div className="lg:col-span-4" id="sm-desc-col">
            <p className="text-mid-tint text-sm leading-relaxed font-light">
              High-fidelity scroll-stopping creatives. I write the briefs, design the assets, tape the reels, and deploy strategic social funnels that spark real community conversations.
            </p>
          </div>
        </div>

        {/* Dynamic Mixed Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch" id="social-grid-wrapper">
          
          {/* Item 1: Phone Frame (Instagram) */}
          <div className="lg:col-span-4 flex flex-col items-center" id="grid-item-sm1">
            <PhoneMockup item={SOCIAL_MEDIA_GRID[0]} />
          </div>

          {/* Item 2: Phone Frame (LinkedIn Post Carousel Preview) */}
          <div className="lg:col-span-4 flex flex-col items-center" id="grid-item-sm2">
            <PhoneMockup item={SOCIAL_MEDIA_GRID[1]} />
          </div>

          {/* Item 3: Phone Frame (Vlog/Strategy Video presentation) */}
          <div className="lg:col-span-4 flex flex-col items-center" id="grid-item-sm5">
            <PhoneMockup item={SOCIAL_MEDIA_GRID[4]} isVideo={true} />
          </div>

          {/* Item 4: Laptop Frame (Canva/Figma Visual Guideline) */}
          <div className="lg:col-span-6 md:col-span-2 flex flex-col items-center" id="grid-item-sm4">
            <LaptopMockup item={SOCIAL_MEDIA_GRID[3]} />
          </div>

          {/* Item 5: Large Widescreen Campaign Showcase representation */}
          <div className="lg:col-span-6 md:col-span-2 flex flex-col items-center" id="grid-item-sm3">
            <LargeShowcaseMockup item={SOCIAL_MEDIA_GRID[2]} />
          </div>

        </div>

      </div>
    </section>
  );
}

/* Phone Mockup Component with iOS status bar detail */
function PhoneMockup({ item, isVideo = false }: { item: typeof SOCIAL_MEDIA_GRID[0]; isVideo?: boolean }) {
  return (
    <div className="w-full max-w-[290px] flex flex-col text-left">
      <div className="relative aspect-[9/18.5] w-full bg-[#1E1C18] rounded-[2.8rem] p-3 shadow-xl border border-warm-clay/50 group/phone transition-all duration-300 hover:shadow-2xl">
        {/* Time notch / Dynamic Island bar */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-30 flex justify-between items-center px-4">
          <span className="text-[9px] text-white/90 font-mono font-bold leading-none">9:41</span>
          <div className="w-12 h-3 bg-neutral-900 rounded-full flex justify-end items-center px-1">
            <div className="w-2.5 h-1 bg-white/70 rounded-full"></div>
          </div>
        </div>

        {/* Speaker element */}
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-neutral-800 rounded-full z-20"></div>

        {/* Smartphone Inner Screen Canvas */}
        <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-warm-clay/20 border border-neutral-900/40">
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale-10 group-hover/phone:grayscale-0 group-hover/phone:scale-105 transition-all duration-700"
          />
          {/* Overlay mask */}
          <div className="absolute inset-0 bg-linear-to-t from-dark-charcoal/80 via-dark-charcoal/10 to-transparent group-hover/phone:from-dark-charcoal/90 transition-all duration-500"></div>

          {/* Video Play Button on Hover */}
          {(isVideo || item.type === 'video' || item.type === 'instagram') && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 bg-warm-beige/95 text-dark-charcoal rounded-full flex items-center justify-center shadow-lg transform group-hover/phone:scale-110 group-hover/phone:bg-soft-terracotta group-hover/phone:text-warm-beige transition-all duration-300">
                <Play className="w-6 h-6 fill-current pl-0.5" />
              </div>
            </div>
          )}

          {/* Brand channel Indicator */}
          <div className="absolute top-12 left-4 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-soft-terracotta flex items-center justify-center text-white p-1">
              {item.type === 'instagram' ? <Instagram className="w-3.5 h-3.5" /> : <Linkedin className="w-3.5 h-3.5" />}
            </div>
            <span className="text-[10px] text-white font-semibold font-mono tracking-wide bg-black/30 backdrop-blur-xs px-2 py-0.5 rounded-full">
              {item.type === 'instagram' ? '@tashvi.chhadwa' : 'Tashvi Chhadwa'}
            </span>
          </div>

          {/* Social details bottom overlay */}
          <div className="absolute bottom-6 left-5 right-5 text-left text-warm-beige">
            <p className="text-[10px] uppercase font-mono tracking-widest text-soft-terracotta font-bold">
              {item.type.toUpperCase()}
            </p>
            <h4 className="font-serif text-lg leading-tight mt-1 mb-1.5 text-warm-beige">
              {item.title}
            </h4>
            <p className="text-[11px] leading-relaxed text-warm-beige/85 font-light line-clamp-2">
              {item.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* MacBook / Browser frame Mockup component */
function LaptopMockup({ item }: { item: typeof SOCIAL_MEDIA_GRID[0] }) {
  return (
    <div className="w-full flex flex-col text-left">
      <div className="relative w-full bg-linear-to-b from-[#1C1A17] to-[#121110] rounded-2xl p-2 sm:p-3 shadow-xl border border-warm-clay/30 group/laptop hover:shadow-2xl transition-all duration-300">
        
        {/* Laptop Titlebar with macOS style dots */}
        <div className="flex items-center gap-1.5 pb-2 px-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
          <div className="bg-[#121110] px-4 py-0.5 rounded-md text-[9px] text-mid-tint/70 font-mono flex items-center gap-1 ml-4 w-32 justify-between">
            <span>canva.com/design</span>
            <ExternalLink className="w-2 h-2" />
          </div>
        </div>

        {/* Laptop Screen Area */}
        <div className="relative aspect-video w-full rounded-lg overflow-hidden bg-neutral-900 border border-neutral-800">
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale-15 group-hover/laptop:grayscale-0 group-hover/laptop:scale-102 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-dark-charcoal/85 via-transparent to-transparent"></div>

          {/* Medium Indicator Icon */}
          <div className="absolute top-4 right-4 bg-dark-charcoal/80 backdrop-blur-md p-2.5 rounded-xl text-warm-beige border border-white/10">
            <Monitor className="w-4 h-4 text-soft-terracotta" />
          </div>

          <div className="absolute bottom-6 left-6 right-6 text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[9px] font-mono tracking-widest text-soft-terracotta uppercase bg-soft-terracotta/10 px-2 py-0.5 rounded-sm">
                Editorial Design Grid
              </span>
            </div>
            <h4 className="font-serif text-xl text-warm-beige leading-tight">
              {item.title}
            </h4>
            <p className="text-xs text-warm-beige/85 font-light mt-1 max-w-md">
              {item.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Large Magazine Widescreen Showcase layout card */
function LargeShowcaseMockup({ item }: { item: typeof SOCIAL_MEDIA_GRID[0] }) {
  return (
    <div className="w-full flex flex-col text-left">
      <div className="relative w-full rounded-2xl overflow-hidden bg-warm-clay/30 aspect-video lg:aspect-square xl:aspect-video border border-warm-clay/60 group/large cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
        <img
          src={item.image}
          alt={item.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale opacity-90 group-hover/large:grayscale-0 group-hover/large:scale-105 group-hover/large:opacity-100 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-linear-to-t from-dark-charcoal/90 via-dark-charcoal/30 to-transparent"></div>

        {/* Spark decoration in corner */}
        <div className="absolute top-6 left-6 bg-dark-charcoal/80 backdrop-blur-md p-3 rounded-full text-soft-terracotta border border-white/10 animate-pulse">
          <Sparkles className="w-4 h-4" />
        </div>

        <div className="absolute bottom-8 left-8 right-8 text-left">
          <span className="text-[10px] font-mono tracking-widest text-muted-olive uppercase font-bold bg-muted-olive/10 px-3 py-1 rounded-full border border-muted-olive/20 leading-none">
            Featured Showcase // Portfolio
          </span>
          <h4 className="font-serif text-3xl sm:text-4xl text-warm-beige leading-none mt-3.5 mb-2 font-normal">
            {item.title}
          </h4>
          <p className="text-xs text-warm-beige/70 font-light max-w-lg leading-relaxed">
            {item.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
