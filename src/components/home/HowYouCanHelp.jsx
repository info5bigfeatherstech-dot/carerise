import { useHomeContent } from "../../hooks/useHomeContent";
import { useUIStore } from "../../store/useUIStore";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Skeleton from "../ui/Skeleton";

/** Gives visitors four clear ways to contribute to the CareRise mission. */
export default function HowYouCanHelp() {
  const { data, isLoading, isError } = useHomeContent();
  const openDonateModal = useUIStore((state) => state.openDonateModal);
  const help = data?.help;
  return (
    <Section bg="gray">
      {help ? <SectionHeading eyebrow={help.eyebrow} title={help.title} subtitle={help.subtitle} align="center" /> : null}
      {isLoading ? (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{Array.from({ length: 4 }, (_, i) => <Skeleton key={i} className="h-64" />)}</div>
      ) : isError || !help ? (
        <p role="status" className="mt-8 text-center text-sm text-brand">Ways to get involved are temporarily unavailable.</p>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {help.cards.map((item) => (
            <Card
              key={item.title}
              variant="icon"
              icon={item.icon}
              title={item.title}
              description={item.description}
              action={item.action}
              actionProps={item.title === "Donate" ? { onClick: openDonateModal } : { asLink: true, to: item.title === "Adopt" ? "/adopt" : "/get-involved" }}
            />
          ))}
        </div>
      )}
    </Section>
  );
}
