import { Linkedin, Instagram, Youtube, Mail, ArrowUpCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="root-footer"
      className="bg-warm-ivory py-16 border-t border-warm-clay/60 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Logo Brand / Brief */}
          <div className="space-y-4 text-center md:text-left" id="footer-brand">
            <h3 className="font-serif text-2xl font-light text-dark-charcoal tracking-wide flex items-center justify-center md:justify-start gap-1">
              {PERSONAL_INFO.name}
              <span className="w-1.5 h-1.5 bg-soft-terracotta rounded-full inline-block"></span>
            </h3>
            <p className="font-sans text-xs text-mid-tint max-w-sm leading-relaxed">
              &ldquo;Creative enough for content. Strategic enough for marketing. Reliable enough to deliver results.&rdquo;
            </p>
          </div>

          {/* Social Channels Network */}
          <div className="flex flex-col items-center md:items-end gap-4" id="footer-socials">
            <p className="text-[9px] font-mono tracking-widest text-[#7F7B74] uppercase font-bold">
              ESTABLISH CHANNELS
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-warm-clay/65 bg-warm-beige hover:border-soft-terracotta hover:bg-dark-charcoal hover:text-warm-beige transition-all flex items-center justify-center text-dark-charcoal"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-warm-clay/65 bg-warm-beige hover:border-soft-terracotta hover:bg-dark-charcoal hover:text-warm-beige transition-all flex items-center justify-center text-dark-charcoal"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-warm-clay/65 bg-warm-beige hover:border-soft-terracotta hover:bg-dark-charcoal hover:text-warm-beige transition-all flex items-center justify-center text-dark-charcoal"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="mailto:chhadwatashvi@gmail.com"
                className="w-10 h-10 rounded-full border border-warm-clay/65 bg-warm-beige hover:border-soft-terracotta hover:bg-dark-charcoal hover:text-warm-beige transition-all flex items-center justify-center text-dark-charcoal"
                aria-label="Email support"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 border-t border-warm-clay/40"></div>

        {/* Bottom Metadata & Scroll Top Action */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left text-[11px] text-mid-tint/80 font-mono tracking-wider font-medium">
          <div>
            <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name} &bull; Editorial Creative Director Portfolio Network.</p>
            <p className="mt-1 text-[10px] text-mid-tint/50">Designed in London &bull; Operating Globals.</p>
          </div>

          <button
            onClick={scrollUp}
            className="group inline-flex items-center gap-1.5 hover:text-soft-terracotta transition-colors uppercase text-[10px] tracking-widest font-semibold cursor-pointer"
            id="scroll-to-top-btn"
          >
            <span>Scroll To Top</span>
            <ArrowUpCircle className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
