import { useHomeContent } from "../hooks/useHomeContent";
import { usePagesContent } from "../hooks/usePagesContent";
import { useUIStore } from "../store/useUIStore";
import PageHero from "../components/pages/PageHero";
import PageCallout from "../components/pages/PageCallout";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Skeleton from "../components/ui/Skeleton";

/** Presents practical ways for visitors to join CareRise activities. */
export default function GetInvolved() {
  const { data: pages, isLoading, isError } = usePagesContent();
  const { data: home, isLoading: homeLoading, isError: homeError } = useHomeContent();
  const openDonateModal = useUIStore((state) => state.openDonateModal);
  const page = pages?.getInvolved;
  const help = home?.help;

  return (
    <>
      <PageHero content={page} isLoading={isLoading} isError={isError} />
      {page ? (
        <>
          <Section bg="gray">
            <SectionHeading eyebrow={help?.eyebrow} title={page.sectionTitle ?? help?.title} subtitle={help?.subtitle} align="center" />
            {homeLoading ? (
              <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{Array.from({ length: 4 }, (_, index) => <Skeleton key={index} className="h-64" />)}</div>
            ) : homeError || !help ? (
              <p role="status" className="mt-7 text-center text-sm text-brand">{help?.error ?? "Ways to get involved are temporarily unavailable."}</p>
            ) : (
              <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {help.cards.map((item) => {
                  const actionProps = item.title === "Donate"
                    ? { onClick: openDonateModal }
                    : { asLink: true, to: item.title === "Adopt" ? "/adopt" : item.title === "Sponsor a Tree" ? "/environment" : "/contact" };
                  return <Card key={item.title} variant="icon" icon={item.icon} title={item.title} description={item.description} action={item.action} actionProps={actionProps} />;
                })}
              </div>
            )}
          </Section>
          <PageCallout title={page.contactTitle} description={page.contactDescription} action={page.contactAction} to={page.contactTo} />
        </>
      ) : null}
    </>
  );
}
