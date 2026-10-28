import { delay } from "./mockApi";

const programs = {
  heading: {
    eyebrow: "What we do",
    title: "Care in action, for every kind of life.",
    subtitle:
      "From a safe place to heal to a cleaner, greener neighbourhood, every program begins with care.",
    action: "Explore all programs",
  },
  cardCaption: "Caring, together",
  error: "Programs could not be loaded right now. Please try again shortly.",
  empty: "No programs are available right now.",
  items: [
    {
      title: "Animal Rescue",
      description:
        "A timely response for injured, abandoned and vulnerable animals.",
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Rescued dogs being cared for outdoors",
      icon: "paw",
    },
    {
      title: "Shelter & Treatment",
      description:
        "A safe place to heal, with patient care and veterinary support.",
      image:
        "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80",
      imageAlt: "A cat resting comfortably in a safe home",
      icon: "heart",
    },
    {
      title: "Street Animal Feeding",
      description:
        "Regular, responsible feeding that keeps neighbourhood animals nourished.",
      image:
        "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=800&q=80",
      imageAlt: "A dog receiving gentle care from a person",
      icon: "hand-heart",
    },
    {
      title: "Adoption Drives",
      description:
        "Helping animals and their people find a loving match for life.",
      image:
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80",
      imageAlt: "A friendly dog ready to meet a new family",
      icon: "home",
    },
    {
      title: "Tree Plantation",
      description:
        "Planting native trees and caring for them as they take root.",
      image:
        "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80",
      imageAlt: "A young tree growing in a green landscape",
      icon: "tree",
    },
    {
      title: "Clean-up Drives",
      description:
        "Making shared green spaces and waterways cleaner, together.",
      image:
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Volunteers working together in their community",
      icon: "users",
    },
    {
      title: "Plastic-Free Awareness",
      description:
        "Practical conversations and action for lighter, cleaner communities.",
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Reusable materials supporting a plastic-free lifestyle",
      icon: "leaf",
    },
    {
      title: "Water & Bird Conservation",
      description:
        "Protecting water sources and creating welcoming spaces for birds.",
      image:
        "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=800&q=80",
      imageAlt: "A small bird resting on a branch",
      icon: "droplets",
    },
  ],
};

export async function getPrograms() {
  await delay(450);
  return programs;
}
