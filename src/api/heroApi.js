import { delay } from "./mockApi";

const homeContent = {
  nav: {
    donateLabel: "Donate",
    menuLabel: "Toggle navigation menu",
    brandLabel: "CareRise home",
    links: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Animal Care", to: "/animal-care" },
      { label: "Environment", to: "/environment" },
      { label: "Adopt", to: "/adopt" },
      { label: "Get Involved", to: "/get-involved" },
      { label: "Contact", to: "/contact" },
    ],
  },
  hero: {
    eyebrow: "Animal Care & Environment NGO",
    title: "Caring for Every Life. Protecting Our Planet.",
    description:
      "CareRise rescues and treats injured animals and restores the green spaces they and we depend on.",
    primaryAction: "Donate Now",
    secondaryAction: "Adopt a Friend",
    image:
      "https://images.unsplash.com/photo-1551730459-92db2a308d6a?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "A rescued dog being cared for by a volunteer",
    insetImage:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=700&q=85",
    insetImageAlt: "A volunteer planting a young sapling in rich soil",
    trustPoints: [
      { value: "Registered NGO", label: "Working with care and accountability", icon: "shield" },
      { value: "2,400+", label: "Animals rescued and treated", icon: "heart" },
      { value: "18,000+", label: "Trees planted together", icon: "tree" },
    ],
  },
  about: {
    eyebrow: "A little about us",
    title: "One Mission: A Healthier Home for All Living Beings",
    description:
      "CareRise began with a simple belief: every living being deserves safety, and every community can help nature thrive. We bring neighbours together to rescue and care for animals, renew local green spaces, and create a kinder future.",
    missionTitle: "Our mission",
    mission:
      "To protect vulnerable animals and restore the natural places that sustain every life.",
    visionTitle: "Our vision",
    vision:
      "Communities where compassion for animals and care for the planet grow side by side.",
    action: "Learn More",
    images: [
      {
        src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=85",
        alt: "Two happy dogs enjoying time outdoors",
      },
      {
        src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=85",
        alt: "Sunlight falling across healthy green leaves",
      },
      {
        src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=700&q=85",
        alt: "Community volunteers joining hands for a cause",
      },
    ],
  },
  help: {
    eyebrow: "Be part of the change",
    title: "How You Can Help",
    subtitle: "A little care goes a long way. Choose the way that feels right for you.",
    error: "Ways to get involved are temporarily unavailable.",
    cards: [
      {
        title: "Donate",
        description: "Help provide food, medicine and safe shelter for animals in need.",
        action: "Give with care",
        icon: "heart",
      },
      {
        title: "Volunteer",
        description: "Bring your time and energy to a rescue, planting or clean-up day.",
        action: "Join a drive",
        icon: "users",
      },
      {
        title: "Adopt",
        description: "Make room in your home and heart for a friend who needs both.",
        action: "Meet our animals",
        icon: "paw",
      },
      {
        title: "Sponsor a Tree",
        description: "Help plant and nurture trees that will shelter life for years to come.",
        action: "Plant hope",
        icon: "tree",
      },
    ],
  },
  cta: {
    title: "Every Small Act Helps Life Rise.",
    description: "Your kindness can become a safer home, a greener street and a brighter tomorrow.",
    donateAction: "Donate Now",
    contactAction: "Get in Touch",
  },
  donate: {
    title: "Help care rise",
    description:
      "Your contribution supports rescue, treatment, safe shelter and community-led care for the environment.",
    note: "Donations are processed securely. This demo keeps the action local.",
    action: "Continue to donate",
  },
  comingSoon: {
    eyebrow: "A little more time",
    title: "This part of CareRise is growing.",
    description: "We are preparing this page with the same care we bring to every life. In the meantime, explore our work from the home page.",
    action: "Back to Home",
  },
  footer: {
    about:
      "CareRise brings people together to protect animals, restore nature and create healthier communities.",
    quickLinksTitle: "Explore",
    programsTitle: "Our work",
    contactTitle: "Say hello",
    links: [
      { label: "About us", to: "/about" },
      { label: "Adoption", to: "/adopt" },
      { label: "Get involved", to: "/get-involved" },
      { label: "Contact", to: "/contact" },
    ],
    programLinks: [
      { label: "Animal rescue", to: "/animal-care" },
      { label: "Tree plantation", to: "/environment" },
      { label: "Community clean-ups", to: "/environment" },
    ],
    address: "24 Greenway Road, Pune, Maharashtra",
    phone: "+91 98765 43210",
    email: "hello@carerise.org",
    emergencyLabel: "Rescue helpline",
    emergencyPhone: "+91 80000 11223",
    newsletterTitle: "Notes from the field",
    newsletterDescription: "A little good news and ways to help, once a month.",
    newsletterPlaceholder: "Your email address",
    newsletterAction: "Subscribe",
    newsletterSuccess: "Thanks for staying connected. We’ll be in touch soon.",
    socialLabel: "Follow CareRise",
    copyright: "© 2026 CareRise Foundation. Made with care for every life.",
  },
};

export async function getHomeContent() {
  await delay();
  return homeContent;
}
