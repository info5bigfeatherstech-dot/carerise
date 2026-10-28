import { delay } from "./mockApi";

export async function getImpactStats() {
  await delay();
  return {
    heading: {
      eyebrow: "Small acts, lasting impact",
      title: "Together, we’re making room for life.",
    },
    error: "Impact totals are temporarily unavailable.",
    empty: "Impact totals will be shared soon.",
    items: [
      { label: "Animals Rescued", value: 2400, suffix: "+", icon: "paw" },
      { label: "Trees Planted", value: 18000, suffix: "+", icon: "tree" },
      { label: "Volunteers", value: 860, suffix: "+", icon: "users" },
      { label: "Clean-up Drives", value: 125, suffix: "+", icon: "sparkles" },
    ],
  };
}
