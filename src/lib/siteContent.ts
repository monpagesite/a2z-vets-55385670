export const siteContent = {
  meta: {
    title: "A2Z VETS - Expert Veterinary Care with Same-Day Appointments",
    description: "Your pet's health from A to Z. Expert veterinary care with same-day appointments, compassionate team, and complete care for every stage of life.",
  },
  
  header: {
    logo: "A2Z VETS",
    nav: [
      { label: "Services", href: "#services" },
      { label: "Why Us", href: "#why-us" },
      { label: "Our Team", href: "#team" },
    ],
    cta: {
      call: "Call Us",
      book: "Book Now",
    },
  },
  
  hero: {
    headline: "Your pet's health from",
    headlineHighlight: "A to Z",
    subtext: "Expert veterinary care with same-day appointments. Our team treats every pet like family—from routine wellness to urgent care.",
    cta: {
      primary: "Book an appointment",
      secondary: "Call us now",
    },
    trustBadges: [
      { icon: "Clock", text: "Same-day appointments" },
      { icon: "Heart", text: "Compassionate care" },
      { icon: "Shield", text: "Experienced vets" },
    ],
    image: {
      alt: "Happy pets receiving compassionate veterinary care",
    },
  },
  
  services: {
    overline: "What we offer",
    heading: "Complete care for every stage of life",
    subtext: "From puppy vaccines to senior wellness, we're here for your pet's journey.",
    cards: [
      {
        icon: "Stethoscope",
        title: "Wellness exams & vaccinations",
        description: "Annual check-ups, puppy and kitten packages, and senior pet care plans to keep your companion healthy at every age.",
      },
      {
        icon: "Activity",
        title: "Surgery & dental care",
        description: "Spay/neuter procedures, soft tissue surgery, and dental cleanings under anesthesia with modern monitoring.",
      },
      {
        icon: "Microscope",
        title: "Diagnostics & lab work",
        description: "In-house bloodwork, digital X-rays, and ultrasound for fast, accurate diagnosis when your pet needs answers.",
      },
      {
        icon: "AlertCircle",
        title: "Emergency & urgent care",
        description: "Same-day sick visits and injury assessment. After-hours triage support for peace of mind when emergencies happen.",
        badge: "Urgent",
      },
      {
        icon: "Pill",
        title: "Pharmacy & prescriptions",
        description: "Convenient medication pickup, flea and tick prevention, and prescription diets—all in one place.",
      },
    ],
  },
  
  whyUs: {
    stat: {
      number: "15+",
      label: "Years of trusted care",
      subtext: "Serving the community since 2009",
    },
    reasons: [
      {
        icon: "Users",
        title: "Experienced team",
        description: "Board-certified vets and compassionate techs who genuinely love animals.",
      },
      {
        icon: "Building",
        title: "Modern facility",
        description: "State-of-the-art equipment and a calm, welcoming environment designed for pets.",
      },
      {
        icon: "Clock",
        title: "Same-day availability",
        description: "No waiting weeks for care when your pet needs attention today.",
      },
    ],
    processOverline: "How we care",
    processHeading: "Your visit, step by step",
    processSteps: [
      {
        number: "01",
        title: "Book online or call",
        description: "Choose a convenient time—many same-day slots available.",
      },
      {
        number: "02",
        title: "Warm welcome & exam",
        description: "Our team greets you and your pet, performs a thorough check-up, and answers all your questions.",
      },
      {
        number: "03",
        title: "Clear diagnosis & plan",
        description: "We explain findings in plain language and create a treatment plan that fits your pet's needs and your budget.",
      },
      {
        number: "04",
        title: "Follow-up & support",
        description: "We're here after your visit—call anytime with questions or to schedule your next check-up.",
      },
    ],
  },
  
  team: {
    overline: "Meet the team",
    heading: "Compassionate experts who love what they do",
    subtext: "Every member of our team is here because they're passionate about animal health and wellbeing.",
    members: [
      {
        name: "Dr. Sarah Mitchell",
        role: "Lead Veterinarian",
        credentials: "DVM, Board Certified",
        description: "15 years of experience in small animal medicine and surgery. Special interest in geriatric pet care.",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Dr. James Chen",
        role: "Veterinarian",
        credentials: "DVM",
        description: "Specializes in emergency medicine and orthopedic surgery. Gentle with even the most anxious pets.",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Maria Rodriguez",
        role: "Lead Veterinary Technician",
        credentials: "CVT, 10 years experience",
        description: "Expert in anesthesia monitoring and patient care. Has a special way with scared or nervous animals.",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  
  bookingCta: {
    heading: "Ready to give your pet the care they deserve?",
    subtext: "Join hundreds of happy pet families in our community. Book your appointment today.",
    cta: "Schedule an appointment",
    phone: "(555) 123-4567",
  },
  
  footer: {
    logo: "A2Z VETS",
    tagline: "Complete veterinary care from A to Z",
    hours: {
      title: "Hours",
      schedule: [
        "Monday – Friday: 8am – 6pm",
        "Saturday: 9am – 4pm",
        "Sunday: Closed",
        "Emergency: Call for triage",
      ],
    },
    contact: {
      title: "Contact",
      address: "123 Pet Care Lane",
      city: "Your City, ST 12345",
      phone: "(555) 123-4567",
      email: "hello@a2zvets.com",
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { label: "Services", href: "#services" },
        { label: "Why Choose Us", href: "#why-us" },
        { label: "Our Team", href: "#team" },
        { label: "Book Appointment", href: "#book" },
      ],
    },
    social: [
      { icon: "Facebook", href: "#", label: "Facebook" },
      { icon: "Instagram", href: "#", label: "Instagram" },
      { icon: "Twitter", href: "#", label: "Twitter" },
    ],
    copyright: "© 2024 A2Z VETS. All rights reserved.",
  },
} as const;

export type SiteContent = typeof siteContent;
