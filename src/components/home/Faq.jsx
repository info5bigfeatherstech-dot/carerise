import { useFaqs } from "../../hooks/useFaqs";
import { useUIStore } from "../../store/useUIStore";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Accordion from "../ui/Accordion";
import Skeleton from "../ui/Skeleton";

/** Answers common questions with the expanded FAQ item persisted in Zustand. */
export default function Faq() {
  const { data, isLoading, isError } = useFaqs();
  const openFaqId = useUIStore((state) => state.openFaqId);
  const setOpenFaqId = useUIStore((state) => state.setOpenFaqId);
  return (
    <Section id="faq" bg="gray">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
        <SectionHeading eyebrow={data?.heading.eyebrow} title={data?.heading.title ?? " "} subtitle={data?.heading.subtitle} />
        {isLoading ? <Skeleton className="h-72" rounded="rounded-xl" /> : isError ? (
          <p role="status" className="text-sm text-brand">{data?.error ?? "Frequently asked questions could not be loaded."}</p>
        ) : !data?.items?.length ? (
          <p className="text-sm text-brand/70">{data?.empty}</p>
        ) : (
          <Accordion items={data.items} openId={openFaqId} onToggle={setOpenFaqId} />
        )}
      </div>
    </Section>
  );
}
