import { useHomeContent } from "../../hooks/useHomeContent";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Skeleton from "../ui/Skeleton";

/** Connects the organization story to its mission and vision. */
export default function About() {
  const { data, isLoading, isError } = useHomeContent();
  const about = data?.about;
  if (isLoading) {
    return (
      <Section id="about" bg="gray">
        <div className="grid gap-10 lg:grid-cols-2">
          <Skeleton className="h-[400px]" />
          <Skeleton className="h-[400px]" />
        </div>
      </Section>
    );
  }
  if (isError || !about) {
    return (
      <Section id="about" bg="gray">
        <p role="status" className="text-sm text-brand">
          Our story is temporarily unavailable.
        </p>
      </Section>
    );
  }

  return (
    <Section id="about" bg="gray">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4">
          <img
            src={about.images[0].src}
            alt={about.images[0].alt}
            loading="lazy"
            className="row-span-2 h-full min-h-[330px] w-full rounded-3xl object-cover sm:min-h-[470px]"
          />
          <img
            src={about.images[1].src}
            alt={about.images[1].alt}
            loading="lazy"
            className="h-40 w-full rounded-3xl object-cover sm:h-56"
          />
          <img
            src={about.images[2].src}
            alt={about.images[2].alt}
            loading="lazy"
            className="h-40 w-full rounded-3xl object-cover sm:h-56"
          />
        </div>
        <div>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />
          <p className="mt-5 text-sm leading-7 text-brand/75 sm:text-base sm:leading-8">
            {about.description}
          </p>
          <div className="mt-7 grid gap-4 sm:grid-cols-2">
            {[
              ["leaf", about.missionTitle, about.mission],
              ["tree", about.visionTitle, about.vision],
            ].map(([icon, title, copy]) => (
              <article key={title} className="rounded-2xl bg-white p-5">
                <Icon name={icon} className="h-5 w-5 text-accent" />
                <h3 className="mt-3 font-display text-xl font-medium text-brand">
                  {title}
                </h3>
                <p className="mt-2 text-xs leading-6 text-brand/70">{copy}</p>
              </article>
            ))}
          </div>
          <Button
            asLink
            to="/about"
            variant="outline"
            className="mt-7"
            icon="arrow-right"
          >
            {about.action}
          </Button>
        </div>
      </div>
    </Section>
  );
}
