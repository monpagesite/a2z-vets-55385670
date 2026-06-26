import { useEffect, useRef } from 'react';
import { siteContent } from '../lib/siteContent';

export default function TeamSection() {
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

  return (
    <section
      id="team"
      ref={sectionRef}
      className="bg-surface py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-wide text-secondary font-semibold mb-4">
            {siteContent.team.overline}
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {siteContent.team.heading}
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            {siteContent.team.subtext}
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.team.members.map((member, index) => (
            <div
              key={index}
              data-reveal
              className="reveal-init bg-white rounded-3xl overflow-hidden shadow-lg border border-border hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-1">
                  {member.role}
                </p>
                <p className="text-sm text-muted mb-4">
                  {member.credentials}
                </p>
                <p className="text-base text-muted leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
