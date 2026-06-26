import { useEffect, useRef } from 'react';
import { Phone } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function BookingCTA() {
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

  const handleBooking = () => {
    // In production, this would open a booking form or redirect to booking page
    window.alert('Booking system would open here. For now, please call us!');
  };

  const handleCall = () => {
    window.location.href = 'tel:7550291783';
  };

  return (
    <section
      id="book"
      ref={sectionRef}
      className="bg-background py-16 md:py-24"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div
          data-reveal
          className="reveal-init bg-gradient-to-br from-primary to-primary/90 rounded-3xl p-10 md:p-16 shadow-2xl text-center text-white relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              {siteContent.bookingCta.heading}
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-95">
              {siteContent.bookingCta.subtext}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleBooking}
                className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                {siteContent.bookingCta.cta}
              </button>
              <div className="flex items-center gap-2 text-white/90">
                <span className="text-sm">or call</span>
                <button
                  onClick={handleCall}
                  className="flex items-center gap-2 font-semibold text-lg hover:text-secondary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {siteContent.bookingCta.phone}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
