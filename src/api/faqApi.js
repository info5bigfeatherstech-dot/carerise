import { delay } from "./mockApi";

export async function getFaqs() {
  await delay();
  return {
    heading: {
      eyebrow: "Good to know",
      title: "Questions, answered with care.",
      subtitle:
        "Can’t find what you’re looking for? Our team is happy to help.",
    },
    error: "Frequently asked questions could not be loaded.",
    empty: "There are no questions to show right now.",
    items: [
      {
        id: "adoption",
        question: "What does the adoption process look like?",
        answer:
          "Start by meeting the animals and telling us about your home and routine. Our team will help you find a good match, arrange a conversation and guide you through a thoughtful home visit and adoption.",
      },
      {
        id: "donations",
        question: "How are donations used?",
        answer:
          "Donations support veterinary care, medicines, food and safe shelter, along with native saplings, community clean-ups and local conservation work. We share regular updates about the impact of your support.",
      },
      {
        id: "volunteering",
        question: "Can I volunteer if I have no prior experience?",
        answer:
          "Absolutely. We welcome new volunteers and provide a clear orientation before each activity. You can choose from animal-care support, planting days, clean-ups and community awareness events.",
      },
      {
        id: "visits",
        question: "Can I visit the shelter?",
        answer:
          "Yes, visits are arranged by appointment so animals can rest and receive consistent care. Please contact our team and we will find a suitable time.",
      },
      {
        id: "rescue",
        question: "What should I do if I find an injured animal?",
        answer:
          "Keep a safe distance, avoid moving the animal unless there is immediate danger, and call our rescue helpline with your location and what you can observe. Our team will advise you on the next step.",
      },
    ],
  };
}
