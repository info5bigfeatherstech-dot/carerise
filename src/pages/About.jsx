import { useHomeContent } from "../hooks/useHomeContent";
import { useImpactStats } from "../hooks/useImpactStats";
import { usePagesContent } from "../hooks/usePagesContent";
import PageHero from "../components/pages/PageHero";
import PageCallout from "../components/pages/PageCallout";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Skeleton from "../components/ui/Skeleton";

/** Full CareRise story, values and mission. */
export default function About() {
  const { data: pages, isLoading, isError } = usePagesContent();
  const { data: home } = useHomeContent();
  const {
    data: stats,
    isLoading: statsLoading,
    isError: statsError,
  } = useImpactStats();
  const page = pages?.about;

  return (
    <>
      <PageHero content={page} isLoading={isLoading} isError={isError} />
      {page ? (
        <>
          <Section bg="gray">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <SectionHeading
                eyebrow={home?.about.eyebrow}
                title={page.storyTitle}
              />
              <div>
                <p className="text-base leading-8 text-brand/75">
                  {page.story}
                </p>
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {[
                    ["leaf", page.missionTitle, page.mission],
                    ["tree", page.visionTitle, page.vision],
                  ].map(([icon, title, description]) => (
                    <Card
                      key={title}
                      variant="icon"
                      icon={icon}
                      title={title}
                      description={description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Section>
          <Section>
            <SectionHeading
              eyebrow={page.eyebrow}
              title={page.valuesTitle}
              align="center"
            />
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {page.values.map((value) => (
                <Card
                  key={value.title}
                  variant="icon"
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>
          </Section>
        </>
      ) : null}
      {statsLoading ? (
        <Section bg="gray">
          <Skeleton className="h-32" rounded="rounded-xl" />
        </Section>
      ) : statsError ? (
        <Section bg="gray">
          <p role="status" className="text-center text-sm text-brand">
            {stats?.error ?? "Impact totals are temporarily unavailable."}
          </p>
        </Section>
      ) : stats?.items?.length ? (
        <Section bg="gray">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.items.map((stat) => (
              <Card
                key={stat.label}
                variant="stat"
                icon={stat.icon}
                value={`${stat.value.toLocaleString("en-IN")}${stat.suffix}`}
                title={stat.label}
              />
            ))}
          </div>
        </Section>
      ) : (
        <Section bg="gray">
          <p className="text-center text-sm text-brand/70">{stats?.empty}</p>
        </Section>
      )}
      {page ? (
        <PageCallout
          title={home?.cta.title}
          description={home?.cta.description}
          action={page.action}
          to={page.actionTo}
          secondaryAction={home?.cta.contactAction}
          secondaryTo="/contact"
        />
      ) : null}
    </>
  );
}
