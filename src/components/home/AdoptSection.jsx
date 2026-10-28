import { useMemo } from "react";
import { useAdoption } from "../../hooks/useAdoption";
import { useUIStore } from "../../store/useUIStore";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import Skeleton from "../ui/Skeleton";

/** Shows adoptable animals with the selected filter stored globally in Zustand. */
export default function AdoptSection() {
  const { data, isLoading, isError } = useAdoption();
  const filter = useUIStore((state) => state.adoptionFilter);
  const setFilter = useUIStore((state) => state.setAdoptionFilter);
  const petsData = data?.pets ?? [];
  const pets = useMemo(
    () => petsData.filter((pet) => filter === "All" || pet.type === filter),
    [petsData, filter],
  );

  return (
    <Section id="adopt" bg="gray">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow={data?.heading.eyebrow}
          title={data?.heading.title ?? " "}
          subtitle={data?.heading.subtitle}
        />
        {data?.filters ? (
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label={data.filterGroupLabel}
          >
            {data.filters.map((item) => (
              <button
                type="button"
                key={item.value}
                aria-pressed={filter === item.value}
                onClick={() => setFilter(item.value)}
                className={`rounded-full px-4 py-2.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${filter === item.value ? "bg-brand text-white" : "bg-white text-brand hover:bg-brand-light"}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        ) : null}
      </div>
      {isLoading ? (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => (
            <Skeleton key={i} className="h-[380px]" />
          ))}
        </div>
      ) : isError ? (
        <p role="status" className="mt-8 text-sm text-brand">
          {data?.error ?? "Adoption profiles could not be loaded right now."}
        </p>
      ) : pets.length ? (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pets.map((pet) => (
            <Card
              key={pet.name}
              variant="pet"
              image={pet.image}
              imageAlt={pet.imageAlt}
              title={pet.name}
              description={pet.note}
              meta={pet.type}
            >
              <div className="mt-3 flex items-center justify-between">
                <Badge>{pet.age}</Badge>
                <Button asLink to="/adopt" variant="outline" size="sm">
                  {data.adoptAction ?? "Adopt Me"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <p className="mt-8 text-sm text-brand/70">{data?.empty}</p>
      )}
    </Section>
  );
}
