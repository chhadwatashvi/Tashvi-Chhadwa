import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, TrendingUp, Compass, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function HeroSection() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-warm-beige paper-texture"
    >
      {/* Background doodles / shapes */}
      {/* Background Decoration */}
      <div className="absolute top-[-50px] right-[-50px] w-96 h-96 bg-[#F5F1E9]/60 rounded-full -z-10 opacity-60"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 border border-warm-clay rounded-full opacity-40 -z-10"></div>
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-soft-terracotta/5 rounded-full blur-2xl animate-float-slow -z-10"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-muted-olive/5 rounded-full blur-3xl animate-float-delayed -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Editorial Column */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left z-10" id="hero-left-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-soft-terracotta">
              TASHVI CHHADWA <span className="font-light opacity-50 ml-2">/ Creative Strategist</span>
            </span>
            <div className="w-10 h-[1px] bg-soft-terracotta"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-light italic text-dark-charcoal/80 tracking-wide">
              Hi, I'm {PERSONAL_INFO.name}
            </h2>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[100px] leading-[0.85] tracking-tighter mb-8 text-dark-charcoal text-left">
              Creative <br/>
              <span className="italic text-soft-terracotta ml-12 sm:ml-16">Marketing</span> <br/>
              Professional <br/>
              &amp; <span className="ml-24 sm:ml-32 text-soft-terracotta">Strategist.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-dark-charcoal/70 max-w-xl font-light leading-relaxed"
          >
            I turn ideas into campaigns, content into communities, and strategy into measurable growth. Bridging the gap between <span className="italic underline underline-offset-4 decoration-warm-clay">aesthetic content</span> and <span className="font-medium">hard-data marketing results.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm text-mid-tint max-w-lg leading-relaxed font-light"
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 pt-4"
            id="hero-cta-buttons"
          >
            <button
              onClick={() => handleScroll('social-media')}
              className="group relative inline-flex items-center justify-between gap-3 bg-dark-charcoal text-warm-beige hover:bg-black text-xs uppercase tracking-widest font-semibold px-8 py-4.5 rounded-full transition-all duration-300 shadow-md cursor-pointer hover:shadow-lg"
              id="hero-view-work-btn"
            >
              View My Work
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <button
              onClick={() => handleScroll('connect')}
              className="group inline-flex items-center gap-2 border border-dark-charcoal hover:bg-[#F5F1E9] text-dark-charcoal text-xs uppercase tracking-widest font-semibold px-8 py-4.5 rounded-full transition-all duration-300 cursor-pointer"
              id="hero-connect-btn"
            >
              The Process
            </button>
          </motion.div>
        </div>

        {/* Right Layout with Elegant Portrait Container & Floating Icons */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-12 lg:mt-0" id="hero-right-visual">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-sm sm:max-w-md aspect-[3/4] bg-warm-clay rounded-[60px] overflow-hidden border border-warm-clay shadow-2xl group"
          >
            {/* The Professional Image */}
            <img
              src="/src/assets/images/marketer_portrait_1782102978826.jpg"
              alt="Tashvi Chhadwa Marketing Specialist"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale-15 group-hover:grayscale-0 transition-all duration-1000 scale-102 group-hover:scale-105"
              id="hero-portrait-img"
            />
            {/* Overlay Grid lines like a digital magazine frame */}
            <div className="absolute inset-0 border-3 border-warm-beige/30 m-4 pointer-events-none rounded-[40px]"></div>
            <div className="absolute bottom-6 left-6 right-6 bg-dark-charcoal/80 backdrop-blur-md px-6 py-4 rounded-2xl text-left border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              <p className="text-[10px] uppercase tracking-widest font-mono text-soft-terracotta">Active Director</p>
              <h4 className="font-serif text-lg text-warm-beige mt-0.5">Tashvi Chhadwa &bull; London</h4>
            </div>
          </motion.div>

          {/* Organic Floating Doodles / Functional Marketing Symbols */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-10 right-[-20px] bg-white p-4 rounded-2xl shadow-lg border border-[#F5F1E9] rotate-12 flex items-center gap-3 z-20 pointer-events-none"
            id="floating-widget-clicks"
          >
            <div className="p-2.5 bg-soft-terracotta/10 rounded-xl text-soft-terracotta">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-tighter font-bold mb-1">UGC Content</p>
              <div className="w-24 h-1 bg-dark-charcoal"></div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-[-30px] bg-dark-charcoal text-white p-6 rounded-full shadow-lg -rotate-12 flex items-center gap-3 z-20 pointer-events-none"
            id="floating-widget-spark"
          >
            <div className="text-xs font-serif italic">"Strategic &amp; Reliable"</div>
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute -top-8 right-12 w-12 h-12 border border-dashed border-dark-charcoal/20 rounded-full flex items-center justify-center p-2 text-dark-charcoal/30 pointer-events-none"
            id="floating-compass"
          >
            <Compass className="w-5 h-5" />
          </motion.div>

          <div className="absolute -bottom-10 left-12 p-3 bg-dark-charcoal rounded-full text-warm-beige shadow-lg transform rotate-12 scale-90 pointer-events-none md:block hidden">
            <MessageCircle className="w-4 h-4" />
          </div>
        </div>

      </div>
    </section>
  );
}
