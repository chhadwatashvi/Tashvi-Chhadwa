import { useRef } from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-warm-beige border-b border-warm-clay/50 relative overflow-hidden paper-texture">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end text-left">
          <div className="lg:col-span-8" id="test-header-col">
            <span className="text-xs uppercase tracking-widest font-mono text-soft-terracotta mb-2 inline-block">
              // Creative Endorsements
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-dark-charcoal leading-none tracking-tighter">
              Kind <span className="italic font-light">Words</span>
            </h2>
          </div>
          
          {/* Scroll Slider Controls on Right */}
          <div className="lg:col-span-4 flex items-center justify-start lg:justify-end gap-3" id="test-scroll-controls">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-dark-charcoal/15 bg-warm-ivory text-dark-charcoal hover:bg-dark-charcoal hover:text-warm-beige flex items-center justify-center transition-all cursor-pointer shadow-sm"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-dark-charcoal/15 bg-warm-ivory text-dark-charcoal hover:bg-dark-charcoal hover:text-warm-beige flex items-center justify-center transition-all cursor-pointer shadow-sm"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Swiper */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 sm:space-x-8 overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-warm-clay scrollbar-track-transparent snap-x snap-mandatory"
          style={{ scrollSnapType: 'x mandatory' }}
          id="testimonials-scroll-list"
        >
          {TESTIMONIALS.map((testimonial) => {
            // Pick aesthetic color accents based on role to reinforce magazine cutout look
            const tagColors: { [key: string]: string } = {
              Client: 'bg-soft-terracotta/15 text-soft-terracotta border-soft-terracotta/25',
              Manager: 'bg-muted-olive/15 text-muted-olive border-muted-olive/25',
              Collaborator: 'bg-dark-charcoal/5 text-dark-charcoal border-dark-charcoal/10',
              Mentor: 'bg-amber-100 text-amber-800 border-amber-200'
            };

            return (
              <div
                key={testimonial.id}
                className="snap-start flex-none w-[310px] sm:w-[380px] bg-warm-ivory p-8 sm:p-10 rounded-[2.2rem] border border-warm-clay/70 hover:shadow-lg transition-all duration-300 relative select-none flex flex-col justify-between"
                id={`testimonial-card-${testimonial.id}`}
              >
                
                {/* Large Background Quote Symbol for paper feel */}
                <div className="absolute top-6 right-8 text-dark-charcoal/5 pointer-events-none">
                  <Quote className="w-16 h-16 stroke-[1.2px]" />
                </div>

                <div className="space-y-6">
                  {/* Testimonial Role Pill */}
                  <span className={`inline-block px-3.5 py-1 text-[10px] uppercase font-mono tracking-widest font-bold rounded-full border ${tagColors[testimonial.relation]}`}>
                    {testimonial.relation}
                  </span>

                  {/* Body description */}
                  <p className="font-serif text-base sm:text-lg text-dark-charcoal/90 leading-relaxed font-light italic relative z-10 text-left">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                {/* Footer Creator Details */}
                <div className="mt-8 pt-6 border-t border-warm-clay/40 text-left">
                  <h4 className="font-serif text-base font-semibold text-dark-charcoal leading-none">
                    {testimonial.author}
                  </h4>
                  <p className="font-sans text-xs text-mid-tint mt-1 leading-normal font-light">
                    {testimonial.role}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
