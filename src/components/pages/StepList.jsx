import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

/** Shows a short ordered process in a responsive set of cards. */
export default function StepList({ title, intro, steps, bg = "gray" }) {
  return (
    <Section bg={bg}>
      <SectionHeading title={title} subtitle={intro} align="center" />
      <ol className="mt-10 grid gap-5 md:grid-cols-3">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="rounded-3xl border border-brand/10 bg-white p-6 sm:p-8"
          >
            <span className="font-display text-3xl text-accent">
              0{index + 1}
            </span>
            <h3 className="mt-5 font-display text-2xl font-medium text-brand">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-brand/70">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
