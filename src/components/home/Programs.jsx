import { Link } from "react-router-dom";
import { usePrograms } from "../../hooks/usePrograms";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Icon from "../ui/Icon";
import Skeleton from "../ui/Skeleton";

/** Presents animal-care and environmental programs from the mock service. */
export default function Programs() {
  const { data, isLoading, isError } = usePrograms();
  return (
    <Section id="programs" bg="white">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow={data?.heading.eyebrow}
          title={data?.heading.title ?? " "}
          subtitle={data?.heading.subtitle}
        />
        <Link
          to="/animal-care"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-brand hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          {data?.heading.action} <Icon name="arrow-right" className="h-4 w-4" />
        </Link>
      </div>
      {isLoading ? (
        <div
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="Loading programs"
        >
          {Array.from({ length: 8 }, (_, index) => (
            <Skeleton key={index} className="h-[330px]" />
          ))}
        </div>
      ) : isError ? (
        <p role="status" className="mt-8 text-sm text-brand">
          {data?.error ??
            "Programs could not be loaded right now. Please try again shortly."}
        </p>
      ) : !data?.items?.length ? (
        <p className="mt-8 text-sm text-brand/70">{data?.empty}</p>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((program) => (
            <Card
              key={program.title}
              variant="image"
              image={program.image}
              imageAlt={program.imageAlt}
              title={program.title}
              description={program.description}
              className="h-full"
            >
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-brand">
                <Icon name={program.icon} className="h-4 w-4 text-accent" />{" "}
                {data.cardCaption}
              </span>
            </Card>
          ))}
        </div>
      )}
    </Section>
  );
}
