import { useEffect, useRef } from 'react';
import { Stethoscope, Activity, Microscope, AlertCircle, Pill, ArrowRight } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function ServicesSection() {
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
    Stethoscope,
    Activity,
    Microscope,
    AlertCircle,
    Pill,
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-surface py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-wide text-secondary font-semibold mb-4">
            {siteContent.services.overline}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {siteContent.services.heading}
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            {siteContent.services.subtext}
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.services.cards.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                data-reveal
                className="reveal-init bg-white rounded-3xl p-8 shadow-lg border border-border hover:shadow-xl hover:scale-105 transition-all duration-300 relative"
              >
                {service.badge && (
                  <div className="absolute top-6 right-6">
                    <span className="bg-accent text-white text-xs px-3 py-1 rounded-full font-semibold">
                      {service.badge}
                    </span>
                  </div>
                )}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-base text-muted leading-relaxed mb-4">
                  {service.description}
                </p>
                <button className="text-primary font-medium hover:underline inline-flex items-center gap-1 group">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
