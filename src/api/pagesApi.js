import { delay } from "./mockApi";

const pages = {
  about: {
    errorMessage: "Our story is temporarily unavailable.",
    eyebrow: "A little about us",
    title: "Care for every life is where a better future begins.",
    intro:
      "CareRise brings neighbours, animal-care teams and nature advocates together around one belief: every living being deserves a safer place to thrive.",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "CareRise volunteers working together in their community",
    storyTitle: "Local kindness, growing into lasting change",
    story:
      "Our work starts with the needs people see around them: an injured street animal, a thirsty bird, a neighbourhood that needs shade, or a shoreline that needs care. We connect people with practical ways to help, and stay involved long after the first act of kindness.",
    missionTitle: "Our mission",
    mission:
      "Protect vulnerable animals and restore the natural places that sustain every life through compassionate, community-led action.",
    visionTitle: "Our vision",
    vision:
      "A future where animals are treated with kindness and healthy, thriving nature is part of every neighbourhood.",
    valuesTitle: "What guides us",
    values: [
      {
        title: "Compassion",
        description:
          "We meet every animal and community with patience, dignity and care.",
        icon: "heart",
      },
      {
        title: "Togetherness",
        description:
          "Lasting change grows when people have a place and a reason to take part.",
        icon: "users",
      },
      {
        title: "Stewardship",
        description:
          "We care for the living world today and make room for it to flourish tomorrow.",
        icon: "leaf",
      },
    ],
    action: "Explore our animal care",
    actionTo: "/animal-care",
  },
  animalCare: {
    errorMessage: "Animal-care information is temporarily unavailable.",
    eyebrow: "Animal care",
    title: "A gentler, safer world for animals starts with showing up.",
    intro:
      "From a first rescue call to a loving forever home, our animal-care work gives vulnerable animals the support they need to feel safe, heal and thrive.",
    image:
      "https://images.unsplash.com/photo-1551730459-92db2a308d6a?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "A rescued dog sharing a gentle moment with a volunteer",
    sectionTitle: "Care through every chapter",
    sectionIntro:
      "Consistent, thoughtful support helps animals move from urgent need to a brighter next step.",
    programTitles: [
      "Animal Rescue",
      "Shelter & Treatment",
      "Street Animal Feeding",
      "Adoption Drives",
    ],
    stepsTitle: "How a little care adds up",
    steps: [
      {
        title: "Respond",
        description:
          "We coordinate reports and connect animals with trained local rescuers.",
      },
      {
        title: "Restore",
        description:
          "Safe shelter, nourishing food and veterinary treatment support recovery.",
      },
      {
        title: "Reconnect",
        description:
          "We help animals return to a safe community or find a loving adoptive home.",
      },
    ],
    calloutTitle: "A safe home changes everything.",
    calloutDescription:
      "Meet the animals who are ready for a family, or help fund their care today.",
    primaryAction: "Meet adoptable friends",
    primaryTo: "/adopt",
    secondaryAction: "Support animal care",
    secondaryTo: "/contact",
  },
  environment: {
    errorMessage: "Environmental information is temporarily unavailable.",
    eyebrow: "Caring for our shared home",
    title: "Healthier green spaces. Cleaner water. More room for life.",
    intro:
      "Nature is home to all of us. CareRise brings communities together to plant and nurture trees, protect local wildlife and care for the places we share.",
    image:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Green saplings growing in a restored natural space",
    sectionTitle: "Small community actions, rooted in care",
    sectionIntro:
      "Our environmental programs pair practical action with the local knowledge that helps it last.",
    programTitles: [
      "Tree Plantation",
      "Clean-up Drives",
      "Plastic-Free Awareness",
      "Water & Bird Conservation",
    ],
    stepsTitle: "Growing change together",
    steps: [
      {
        title: "Listen locally",
        description:
          "We learn what the neighbourhood needs and choose work that fits the place.",
      },
      {
        title: "Take action",
        description:
          "Volunteers plant, restore and clean up with practical, hands-on support.",
      },
      {
        title: "Keep it growing",
        description:
          "Follow-up care and community awareness help good work take root.",
      },
    ],
    calloutTitle: "Make room for a greener tomorrow.",
    calloutDescription:
      "Join a planting day, take part in a clean-up or help care for a local habitat.",
    primaryAction: "Find a way to help",
    primaryTo: "/get-involved",
    secondaryAction: "Get in touch",
    secondaryTo: "/contact",
  },
  adoption: {
    errorMessage: "Adoption information is temporarily unavailable.",
    eyebrow: "Adoption",
    title: "A forever home can start with one hello.",
    intro:
      "Meet the dogs, cats and other companions in our care. Every adoption begins with getting to know each other and finding the right fit for a lifetime.",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Two friendly dogs spending time together outdoors",
    processTitle: "A thoughtful match, every step of the way",
    process: [
      {
        title: "Meet",
        description:
          "Spend time with the animals and tell us about the home you can offer.",
      },
      {
        title: "Get to know",
        description:
          "We’ll help you find a good match and answer questions about settling in.",
      },
      {
        title: "Welcome home",
        description:
          "Our team stays available as your new friend finds their feet.",
      },
    ],
    emptyMessage:
      "No friends are listed in this category just yet. Please check back soon.",
    errorMessage:
      "Adoption profiles could not be loaded right now. Please try again shortly.",
    contactTitle: "Ready to meet your new friend?",
    contactAction: "Ask about adoption",
    contactTo: "/contact",
  },
  getInvolved: {
    errorMessage: "Get-involved information is temporarily unavailable.",
    eyebrow: "Get involved",
    title: "There’s a place for your kindness here.",
    intro:
      "Give your time, share a skill or support a local effort. Every person who shows up helps build a safer, greener home for all.",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "A group of community volunteers standing together",
    sectionTitle: "Choose how you’d like to help",
    sectionIntro:
      "Start with what feels right for you. We’ll help you find the next step.",
    contactTitle: "Want to join the next activity?",
    contactDescription:
      "Tell us a little about yourself and the kind of work you care about. We’ll help you find a good place to begin.",
    contactAction: "Talk to our team",
    contactTo: "/contact",
  },
  contact: {
    eyebrow: "Contact CareRise",
    title: "Let’s make something good happen.",
    intro:
      "Have a question, want to volunteer, or need help reporting an animal in distress? We’d love to hear from you.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "A person writing a thoughtful message at a desk",
    formTitle: "Send our team a message",
    nameLabel: "Your name",
    namePlaceholder: "Name",
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    topicLabel: "How can we help?",
    topicPlaceholder: "Choose a topic",
    topics: [
      "Animal rescue",
      "Adoption",
      "Volunteering",
      "Environmental programs",
      "Something else",
    ],
    messageLabel: "Your message",
    messagePlaceholder: "Tell us a little about what you need",
    submitAction: "Send message",
    formNotice:
      "This demo form does not transmit messages. You can also email our team directly.",
    successMessage:
      "Thanks for reaching out. This demo form does not transmit messages yet; please email our team directly.",
    emergencyTitle: "Found an animal in distress?",
    emergencyDescription:
      "Call our rescue helpline. If it’s safe, share the animal’s location and what you can observe.",
    errorMessage: "Contact information is temporarily unavailable.",
  },
};

/** Returns the shared page copy after a short delay, matching the mock API pattern. */
export async function getPagesContent() {
  await delay(280);
  return pages;
}
