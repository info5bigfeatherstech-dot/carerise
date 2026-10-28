import { delay } from "./mockApi";

export async function getAdoptionData() {
  await delay(380);
  return {
    heading: {
      eyebrow: "Meet your new friend",
      title: "A forever home can start with one hello.",
      subtitle: "Each of these lovely companions is ready to find a safe, caring home.",
    },
    adoptAction: "Adopt Me",
    filterGroupLabel: "Filter adoptable animals",
    error: "Adoption profiles could not be loaded right now.",
    empty: "There are no adoption profiles in this category just yet.",
    filters: [
      { label: "All friends", value: "All" },
      { label: "Dogs", value: "Dogs" },
      { label: "Cats", value: "Cats" },
      { label: "Others", value: "Others" },
    ],
    pets: [
      {
        name: "Milo",
        type: "Dogs",
        age: "2 years",
        note: "A gentle soul who loves slow walks and sunny naps.",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=85",
        imageAlt: "Milo, a golden dog looking calmly at the camera",
      },
      {
        name: "Cleo",
        type: "Cats",
        age: "1 year",
        note: "Curious, affectionate and always ready for a little play.",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=85",
        imageAlt: "Cleo, a curious calico cat sitting in the sunlight",
      },
      {
        name: "Biscuit",
        type: "Dogs",
        age: "8 months",
        note: "A playful pup learning that the world can be kind.",
        image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=85",
        imageAlt: "Biscuit, a small brown-and-white puppy outdoors",
      },
      {
        name: "Pepper",
        type: "Cats",
        age: "3 years",
        note: "A calm companion who enjoys a quiet corner and company.",
        image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=85",
        imageAlt: "Pepper, a relaxed grey cat resting at the shelter",
      },
      {
        name: "Golu",
        type: "Others",
        age: "4 years",
        note: "A kind-hearted calf who is happiest in a gentle herd.",
        image: "https://images.unsplash.com/photo-1524024973431-2ad916746881?auto=format&fit=crop&w=800&q=85",
        imageAlt: "Golu, a young calf standing safely in a green field",
      },
      {
        name: "Luna",
        type: "Dogs",
        age: "4 years",
        note: "A thoughtful friend with a soft spot for children.",
        image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=85",
        imageAlt: "Luna, a friendly dog with bright eyes",
      },
    ],
  };
}
