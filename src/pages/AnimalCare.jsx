import { usePrograms } from "../hooks/usePrograms";
import { usePagesContent } from "../hooks/usePagesContent";
import PageHero from "../components/pages/PageHero";
import PageCallout from "../components/pages/PageCallout";
import StepList from "../components/pages/StepList";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Skeleton from "../components/ui/Skeleton";

/** Animal rescue, shelter, treatment, feeding and adoption-drive information. */
export default function AnimalCare() {
  const { data: pages, isLoading, isError } = usePagesContent();
  const {
    data: programs,
    isLoading: programsLoading,
    isError: programsError,
  } = usePrograms();
  const page = pages?.animalCare;
  const items =
    programs?.items.filter((program) =>
      page?.programTitles.includes(program.title),
    ) ?? [];

  return (
    <>
      <PageHero content={page} isLoading={isLoading} isError={isError} />
      {page ? (
        <>
          <Section bg="gray">
            <SectionHeading
              title={page.sectionTitle}
              subtitle={page.sectionIntro}
            />
            {programsLoading ? (
              <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }, (_, i) => (
                  <Skeleton key={i} className="h-80" />
                ))}
              </div>
            ) : programsError ? (
              <p className="mt-7 text-sm text-brand" role="status">
                {programs?.error ??
                  "Animal-care programs are temporarily unavailable."}
              </p>
            ) : !items.length ? (
              <p className="mt-7 text-sm text-brand/70">{programs?.empty}</p>
            ) : (
              <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((program) => (
                  <Card
                    key={program.title}
                    image={program.image}
                    imageAlt={program.imageAlt}
                    title={program.title}
                    description={program.description}
                  />
                ))}
              </div>
            )}
          </Section>
          <StepList title={page.stepsTitle} steps={page.steps} />
          <PageCallout
            title={page.calloutTitle}
            description={page.calloutDescription}
            action={page.primaryAction}
            to={page.primaryTo}
            secondaryAction={page.secondaryAction}
            secondaryTo={page.secondaryTo}
          />
        </>
      ) : null}
    </>
  );
}
