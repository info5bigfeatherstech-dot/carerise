import { delay } from "./mockApi";

export async function getTestimonials() {
  await delay();
  return {
    heading: {
      eyebrow: "Kind words, shared",
      title: "Care grows when we grow it together.",
    },
    error: "Stories are temporarily unavailable.",
    empty: "Community stories will be shared soon.",
    previousLabel: "Previous story",
    nextLabel: "Next story",
    positionLabel: "Story",
    ofLabel: "of",
    items: [
      {
        quote:
          "I came to help at one weekend clean-up and found a community that keeps showing up. It feels good to turn care into something you can see.",
        name: "Ananya Rao",
        role: "Community volunteer",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
        imageAlt: "Portrait of Ananya Rao",
      },
      {
        quote:
          "Adopting Bruno changed our home in the best way. The CareRise team helped us find a friend who fit right into our family.",
        name: "Rohan Mehta",
        role: "Proud pet parent",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
        imageAlt: "Portrait of Rohan Mehta",
      },
      {
        quote:
          "Planting trees with my neighbours reminded me that small actions become powerful when we do them together.",
        name: "Meera Kulkarni",
        role: "Tree-planting volunteer",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
        imageAlt: "Portrait of Meera Kulkarni",
      },
    ],
  };
}
