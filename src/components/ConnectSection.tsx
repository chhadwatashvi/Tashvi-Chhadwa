import { useState } from 'react';
import { Mail, Linkedin, Instagram, Youtube, FileText, Calendar, ArrowUpRight, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function ConnectSection() {
  const [copied, setCopied] = useState(false);
  const emailVal = "chhadwatashvi@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailVal);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: <Linkedin className="w-4 h-4" />,
      color: 'hover:text-amber-700'
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/sydney.lim',
      icon: <Instagram className="w-4 h-4" />,
      color: 'hover:text-pink-600'
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com',
      icon: <Youtube className="w-4 h-4" />,
      color: 'hover:text-red-600'
    },
    {
      name: 'Email Support',
      href: `mailto:${emailVal}`,
      icon: <Mail className="w-4 h-4" />,
      color: 'hover:text-blue-500'
    }
  ];

  return (
    <section id="connect" className="py-24 bg-warm-beige relative overflow-hidden paper-texture">
      <div className="absolute top-1/2 left-10 w-48 h-48 bg-soft-terracotta/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Column 1: Massive Editorial Title & Copy Action */}
          <div className="lg:col-span-7 space-y-10 text-left" id="connect-left-side">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest font-mono text-soft-terracotta font-semibold">
                // Let's Collaborate
              </span>
              <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-dark-charcoal leading-none tracking-tighter">
                Let's Create <span className="italic font-light">Something Meaningful</span> Together
              </h2>
            </div>

            <p className="text-mid-tint text-base sm:text-lg font-light leading-relaxed max-w-xl">
              Whether you are looking to scale your organic social channels by double digits, audit your current content lifecycle, or build an entire luxury brand identity from scratch, let's explore how we can align forces.
            </p>

            {/* Quick Email Copy block */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md pt-4" id="email-copy-panel">
              <div className="flex-1 bg-warm-ivory px-6 py-4 rounded-full border border-warm-clay/65 flex justify-between items-center">
                <span className="text-xs text-dark-charcoal/80 font-mono select-all">
                  chhadwatashvi@gmail.com
                </span>
                <button
                  onClick={handleCopy}
                  className="p-1.5 rounded-full bg-dark-charcoal/5 hover:bg-dark-charcoal/10 text-mid-tint hover:text-dark-charcoal transition-all cursor-pointer"
                  title="Copy email to clipboard"
                  id="copy-email-btn"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-muted-olive" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <a
                href={`mailto:chhadwatashvi@gmail.com`}
                className="inline-flex justify-center items-center gap-2 bg-dark-charcoal text-warm-beige hover:bg-dark-charcoal/90 hover:shadow-md text-xs uppercase tracking-widest font-semibold px-6 py-4 rounded-full transition-all duration-300"
                id="direct-mail-btn"
              >
                Send Email
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Large Button Matrices list */}
          <div className="lg:col-span-5 space-y-8" id="connect-right-side">
            <h3 className="font-serif text-2xl font-light text-dark-charcoal text-left border-b border-warm-clay/60 pb-3">
              Direct Channels
            </h3>

            <div className="space-y-4" id="direct-action-links">
              {/* LinkedIn Link card */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-5 bg-warm-ivory rounded-2xl border border-warm-clay/60 hover:border-soft-terracotta/40 hover:bg-warm-beige transition-all group"
                id="connect-linkedin-card"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="p-3 bg-dark-charcoal/5 rounded-xl text-dark-charcoal group-hover:bg-soft-terracotta/10 group-hover:text-soft-terracotta transition-all">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-dark-charcoal font-medium">Professional Network</h4>
                    <p className="text-[10px] text-mid-tint uppercase tracking-widest font-mono">Connect on LinkedIn</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-mid-tint group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform group-hover:text-soft-terracotta" />
              </a>

              {/* Instagram link card */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-5 bg-warm-ivory rounded-2xl border border-warm-clay/60 hover:border-soft-terracotta/40 hover:bg-warm-beige transition-all group"
                id="connect-instagram-card"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="p-3 bg-dark-charcoal/5 rounded-xl text-dark-charcoal group-hover:bg-soft-terracotta/10 group-hover:text-soft-terracotta transition-all">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-dark-charcoal font-medium">Creative Visual Portfolio</h4>
                    <p className="text-[10px] text-mid-tint uppercase tracking-widest font-mono">Follow Instagram</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-mid-tint group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform group-hover:text-soft-terracotta" />
              </a>

              {/* Download Resume Link */}
              <button
                onClick={() => alert("Resume Download Initiated (Mock file download complete).")}
                className="w-full flex items-center justify-between p-5 bg-warm-ivory rounded-2xl border border-warm-clay/60 hover:border-soft-terracotta/40 hover:bg-warm-beige transition-all group cursor-pointer"
                id="connect-resume-btn"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="p-3 bg-dark-charcoal/5 rounded-xl text-dark-charcoal group-hover:bg-soft-terracotta/10 group-hover:text-soft-terracotta transition-all">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-dark-charcoal font-medium">Download Resume PDF</h4>
                    <p className="text-[10px] text-mid-tint uppercase tracking-widest font-mono">1.2 MB &bull; Active Version</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-mid-tint group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform group-hover:text-soft-terracotta" />
              </button>

              {/* Schedule a call Link */}
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-5 bg-dark-charcoal rounded-2xl border border-transparent hover:bg-dark-charcoal/90 transition-all group shadow-sm"
                id="connect-calendly-card"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className="p-3 bg-white/10 rounded-xl text-warm-beige">
                    <Calendar className="w-5 h-5 text-soft-terracotta" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-warm-beige font-medium">Schedule A Strategy Call</h4>
                    <p className="text-[10px] text-warm-beige/60 uppercase tracking-widest font-mono">Calendly &bull; 15 Min Discovery</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-warm-beige/50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-warm-beige" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
