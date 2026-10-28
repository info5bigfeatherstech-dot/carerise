import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useAdoption } from "../hooks/useAdoption";
import { usePagesContent } from "../hooks/usePagesContent";
import { useUIStore } from "../store/useUIStore";
import PageHero from "../components/pages/PageHero";
import PageCallout from "../components/pages/PageCallout";
import StepList from "../components/pages/StepList";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Skeleton from "../components/ui/Skeleton";

/** Full adoption directory with animal filters and a clear adoption enquiry route. */
export default function Adopt() {
  const { data: pages, isLoading: pageLoading, isError: pageError } = usePagesContent();
  const { data: adoption, isLoading, isError } = useAdoption();
  const filter = useUIStore((state) => state.adoptionFilter);
  const setFilter = useUIStore((state) => state.setAdoptionFilter);
  const page = pages?.adoption;
  const petsData = adoption?.pets ?? [];
  const pets = useMemo(
    () => petsData.filter((pet) => filter === "All" || pet.type === filter),
    [petsData, filter],
  );

  return (
    <>
      <PageHero content={page} isLoading={pageLoading} isError={pageError} />
      {page ? (
        <>
          <Section bg="gray">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{adoption?.heading.eyebrow}</p>
                <h2 className="font-display text-3xl font-medium text-brand sm:text-4xl">{adoption?.heading.title}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-brand/70">{adoption?.heading.subtitle}</p>
              </div>
              {adoption?.filters ? (
                <div className="flex flex-wrap gap-2" role="group" aria-label={adoption.filterGroupLabel}>
                  {adoption.filters.map((item) => (
                    <button
                      type="button"
                      key={item.value}
                      aria-pressed={filter === item.value}
                      onClick={() => setFilter(item.value)}
                      className={`rounded-full px-4 py-2.5 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${filter === item.value ? "bg-brand text-white" : "bg-white text-brand hover:bg-brand-light"}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
            {isLoading ? (
              <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{Array.from({ length: 6 }, (_, index) => <Skeleton key={index} className="h-[390px]" />)}</div>
            ) : isError ? (
              <p className="mt-8 text-sm text-brand" role="status">{adoption?.error ?? page.errorMessage}</p>
            ) : pets.length ? (
              <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {pets.map((pet) => (
                  <Card key={pet.name} variant="pet" image={pet.image} imageAlt={pet.imageAlt} title={pet.name} description={pet.note} meta={pet.type}>
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <Badge>{pet.age}</Badge>
                      <Button asLink to={`/contact?topic=Adoption&pet=${encodeURIComponent(pet.name)}`} variant="outline" size="sm">{adoption.adoptAction}</Button>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="mt-8 text-sm text-brand/70">{page.emptyMessage}</p>
            )}
          </Section>
          <StepList title={page.processTitle} steps={page.process} />
          <PageCallout title={page.contactTitle} action={page.contactAction} to={page.contactTo} />
        </>
      ) : null}
    </>
  );
}
