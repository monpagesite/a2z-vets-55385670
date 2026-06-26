import { useEffect, useRef } from 'react';
import { Users, Building, Clock } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function WhySection() {
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
    Users,
    Building,
    Clock,
  };

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="bg-background py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Part 1 - Trust Signals (Asymmetric 40/60) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">
          {/* Left - Stat Card (40%) */}
          <div
            data-reveal
            className="reveal-init md:col-span-2"
          >
            <div className="bg-primary text-white rounded-3xl p-12 shadow-xl h-full flex flex-col justify-center">
              <div className="text-6xl md:text-7xl font-bold mb-4">
                {siteContent.whyUs.stat.number}
              </div>
              <div className="text-xl md:text-2xl font-semibold mb-2">
                {siteContent.whyUs.stat.label}
              </div>
              <div className="text-sm opacity-90">
                {siteContent.whyUs.stat.subtext}
              </div>
            </div>
          </div>

          {/* Right - 3 Reasons (60%) */}
          <div className="md:col-span-3 space-y-8">
            {siteContent.whyUs.reasons.map((reason, index) => {
              const Icon = iconMap[reason.icon as keyof typeof iconMap];
              return (
                <div
                  key={index}
                  data-reveal
                  className="reveal-init flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-base text-muted leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part 2 - Process Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-wide text-secondary font-semibold mb-4">
              {siteContent.whyUs.processOverline}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900">
              {siteContent.whyUs.processHeading}
            </h2>
          </div>

          <div className="space-y-8">
            {siteContent.whyUs.processSteps.map((step, index) => (
              <div
                key={index}
                data-reveal
                className="reveal-init flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center font-display text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
