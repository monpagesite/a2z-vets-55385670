import { useEffect, useRef } from 'react';
import { Clock, Heart, Shield } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('[data-reveal]').forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('reveal-visible');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const iconMap = {
    Clock,
    Heart,
    Shield,
  };

  const handleBooking = () => {
    document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCall = () => {
    window.location.href = 'tel:7550291783';
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="bg-background py-20 md:py-28 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="md:col-span-3 space-y-8">
            <h1
              data-reveal
              className="reveal-init font-display text-5xl md:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight"
            >
              {siteContent.hero.headline}{' '}
              <span className="text-secondary">{siteContent.hero.headlineHighlight}</span>
            </h1>

            <p
              data-reveal
              className="reveal-init text-lg md:text-xl text-muted leading-relaxed max-w-2xl"
            >
              {siteContent.hero.subtext}
            </p>

            {/* CTAs */}
            <div
              data-reveal
              className="reveal-init flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={handleBooking}
                className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                {siteContent.hero.cta.primary}
              </button>
              <button
                onClick={handleCall}
                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                {siteContent.hero.cta.secondary}
              </button>
            </div>

            {/* Trust Badges */}
            <div
              data-reveal
              className="reveal-init flex flex-wrap gap-6 mt-8"
            >
              {siteContent.hero.trustBadges.map((badge, index) => {
                const Icon = iconMap[badge.icon as keyof typeof iconMap];
                return (
                  <div key={index} className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted font-medium">{badge.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="md:col-span-2">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1600&q=80"
                alt={siteContent.hero.image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
