import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, TrendingUp, Compass, Globe } from 'lucide-react';
import { FACTS_STATISTICS } from '../data';

export default function ResultsSection() {
  const [counts, setCounts] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    // Elegant incremental step-up animation for portfolio statistics
    const duration = 2000;
    const intervalTime = 40;
    const steps = duration / intervalTime;

    const parsedStats = FACTS_STATISTICS.map(s => {
      const match = s.value.match(/^(\d+)/);
      const target = match ? parseInt(match[1], 10) : 0;
      return { id: s.id, target };
    });

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const nextCounts: { [key: string]: number } = {};

      parsedStats.forEach(({ id, target }) => {
        const value = Math.min(Math.round((target / steps) * currentStep), target);
        nextCounts[id] = value;
      });

      setCounts(nextCounts);

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const getSufix = (val: string) => {
    const match = val.match(/([^\d]+)$/);
    return match ? match[1] : '';
  };

  const iconsList = [
    <Globe className="w-6 h-6 text-soft-terracotta" />,
    <TrendingUp className="w-6 h-6 text-muted-olive" />,
    <Sparkles className="w-6 h-6 text-amber-600" />,
    <Compass className="w-6 h-6 text-blue-600" />
  ];

  return (
    <section id="results" className="py-24 bg-warm-ivory border-y border-warm-clay/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Asymmetric Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end text-left">
          <div className="lg:col-span-8" id="results-headline-col">
            <span className="text-xs uppercase tracking-widest font-mono text-soft-terracotta mb-2 inline-block">
              Provable Analytics // No Guesswork
            </span>
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-dark-charcoal leading-none tracking-tighter">
              Results <span className="italic font-light">Achieved</span>
            </h2>
          </div>
          <div className="lg:col-span-4" id="results-cta-col">
            <p className="text-mid-tint text-sm leading-relaxed font-light">
              We audit. We test. We rewrite. We refine. Because the most beautiful creative execution is useless unless it captures real attention and fuels sustainable, compounds revenue.
            </p>
          </div>
        </div>

        {/* Dynamic Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" id="stats-grid-container">
          {FACTS_STATISTICS.map((stat, idx) => {
            const currentNum = counts[stat.id] || 0;
            const suffix = getSufix(stat.value);

            return (
              <motion.div
                key={stat.id}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true }}
                className="relative bg-warm-beige p-8 sm:p-10 rounded-[2.2rem] border border-warm-clay/65 flex flex-col justify-between items-start text-left min-h-[260px] cursor-default transition-all duration-300"
                id={`stat-card-${stat.id}`}
              >
                {/* Visual Accent */}
                <div className="absolute top-8 right-8 p-3.5 bg-warm-ivory rounded-2xl border border-warm-clay/40 transition-colors">
                  {iconsList[idx % iconsList.length]}
                </div>

                <div className="mt-12 flex flex-col justify-end">
                  {/* Huge Number */}
                  <h3 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-dark-charcoal tracking-tighter leading-none mb-4 flex items-baseline">
                    <span>{currentNum}</span>
                    <span className="text-soft-terracotta italic ml-0.5">{suffix}</span>
                  </h3>

                  {/* Divider line like a high end magazine layout */}
                  <div className="w-12 h-[1.5px] bg-soft-terracotta mb-4"></div>

                  <p className="text-xs uppercase tracking-widest leading-relaxed text-dark-charcoal/70 font-semibold font-mono">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Footnote branding */}
        <div className="mt-16 text-center" id="results-footnote">
          <p className="text-xs font-serif italic text-dark-charcoal/40">
            &ldquo;Metrics gathered across 18 unique product verticals and 3 active years of production content engineering.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
