import { delay } from "./mockApi";

export async function getCampaigns() {
  await delay(420);
  return {
    heading: {
      eyebrow: "Join the work happening now",
      title: "Current campaigns",
      subtitle:
        "Your support helps turn urgent needs into lasting, local care.",
    },
    error: "Campaigns could not be loaded right now.",
    empty: "There are no active campaigns at the moment.",
    raisedLabel: "raised",
    goalLabel: "goal",
    fundedLabel: "funded",
    progressLabel: "fundraising progress",
    raisedWord: "raised",
    goalWord: "goal",
    items: [
      {
        title: "A Safe Haven for Every Paw",
        description: "Help us make room for more rescued friends to heal.",
        raised: 68000,
        goal: 100000,
        image:
          "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=85",
        imageAlt: "Rescued dogs finding comfort and safety",
        action: "Support this campaign",
      },
      {
        title: "Roots for a Greener Tomorrow",
        description:
          "Native saplings need care, water and a community behind them.",
        raised: 42000,
        goal: 75000,
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=85",
        imageAlt: "New green growth in a thriving natural space",
        action: "Support this campaign",
      },
      {
        title: "Clean Shores, Living Seas",
        description:
          "Join local volunteers working to keep our waterways healthy.",
        raised: 31000,
        goal: 60000,
        image:
          "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=85",
        imageAlt: "Clean blue water meeting a natural coastline",
        action: "Support this campaign",
      },
    ],
  };
}
