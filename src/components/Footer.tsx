import { PawPrint, Facebook, Instagram, Twitter } from 'lucide-react';
import { siteContent } from '../lib/siteContent';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const iconMap = {
    Facebook,
    Instagram,
    Twitter,
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <PawPrint className="w-8 h-8 text-secondary" />
              <span className="font-display text-2xl font-bold">
                {siteContent.footer.logo}
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              {siteContent.footer.tagline}
            </p>
            <div className="flex gap-4">
              {siteContent.footer.social.map((social, index) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Hours Column */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">
              {siteContent.footer.hours.title}
            </h3>
            <ul className="space-y-2 text-gray-400">
              {siteContent.footer.hours.schedule.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">
              {siteContent.footer.contact.title}
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>{siteContent.footer.contact.address}</li>
              <li>{siteContent.footer.contact.city}</li>
              <li>
                <a
                  href="tel:7550291783"
                  className="hover:text-secondary transition-colors"
                >
                  {siteContent.footer.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@a2zvets.com"
                  className="hover:text-secondary transition-colors"
                >
                  {siteContent.footer.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">
              {siteContent.footer.quickLinks.title}
            </h3>
            <ul className="space-y-2">
              {siteContent.footer.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className="text-gray-400 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>{siteContent.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
