import Section from "../ui/Section";
import Button from "../ui/Button";

/** Shared bordered callout with primary and optional secondary route actions. */
export default function PageCallout({
  title,
  description,
  action,
  to,
  secondaryAction,
  secondaryTo,
}) {
  return (
    <Section className="pt-8 sm:pt-10">
      <div className="rounded-[2rem] border border-brand/20 px-6 py-10 text-center sm:px-12 sm:py-14">
        <h2 className="font-display text-3xl font-medium text-brand sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-brand/70">
            {description}
          </p>
        ) : null}
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {action ? (
            <Button asLink to={to} size="lg">
              {action}
            </Button>
          ) : null}
          {secondaryAction ? (
            <Button asLink to={secondaryTo} size="lg" variant="outline">
              {secondaryAction}
            </Button>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
