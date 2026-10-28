import { useCampaigns } from "../../hooks/useCampaigns";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Skeleton from "../ui/Skeleton";
import { useUIStore } from "../../store/useUIStore";

/** Displays current fundraising campaigns with clear progress information. */
export default function Campaigns() {
  const { data, isLoading, isError } = useCampaigns();
  const openDonateModal = useUIStore((state) => state.openDonateModal);
  return (
    <Section id="campaigns" bg="white">
      {data?.heading ? (
        <SectionHeading
          eyebrow={data.heading.eyebrow}
          title={data.heading.title}
          subtitle={data.heading.subtitle}
          align="center"
        />
      ) : null}
      {isLoading ? (
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {Array.from({ length: 3 }, (_, i) => (
            <Skeleton key={i} className="h-[430px]" />
          ))}
        </div>
      ) : isError ? (
        <p role="status" className="mt-8 text-center text-sm text-brand">
          {data?.error ?? "Campaigns could not be loaded right now."}
        </p>
      ) : !data?.items?.length ? (
        <p className="mt-8 text-center text-sm text-brand/70">{data?.empty}</p>
      ) : (
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {data.items.map((campaign) => {
            const progress = Math.min(
              (campaign.raised / campaign.goal) * 100,
              100,
            );
            return (
              <Card
                key={campaign.title}
                image={campaign.image}
                imageAlt={campaign.imageAlt}
                title={campaign.title}
                description={campaign.description}
                className="flex h-full flex-col"
              >
                <div className="mt-5">
                  <div className="mb-2 flex justify-between text-xs text-brand/70">
                    <span>
                      ₹{campaign.raised.toLocaleString("en-IN")}{" "}
                      {data.raisedWord}
                    </span>
                    <span>
                      ₹{campaign.goal.toLocaleString("en-IN")} {data.goalWord}
                    </span>
                  </div>
                  <div
                    className="h-2 overflow-hidden rounded-full bg-brand-light"
                    role="progressbar"
                    aria-label={`${campaign.title} fundraising progress`}
                    aria-valuenow={Math.round(progress)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="mt-2 text-right text-xs font-medium text-brand">
                    {Math.round(progress)}% {data.fundedLabel}
                  </p>
                </div>
                <Button className="mt-5 w-full" onClick={openDonateModal}>
                  {campaign.action}
                </Button>
              </Card>
            );
          })}
        </div>
      )}
    </Section>
  );
}
