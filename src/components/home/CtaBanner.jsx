import { useHomeContent } from "../../hooks/useHomeContent";
import { useUIStore } from "../../store/useUIStore";
import Section from "../ui/Section";
import Button from "../ui/Button";
import Skeleton from "../ui/Skeleton";

/** Ends the page with a clear, quiet invitation to participate. */
export default function CtaBanner() {
  const { data, isLoading, isError } = useHomeContent();
  const openDonateModal = useUIStore((state) => state.openDonateModal);
  const cta = data?.cta;
  return (
    <Section bg="white" className="pt-8 sm:pt-10">
      {isLoading ? <Skeleton className="h-64" /> : isError || !cta ? (
        <p role="status" className="text-sm text-brand">The invitation section is temporarily unavailable.</p>
      ) : (
        <div className="rounded-[2rem] border border-brand/20 px-6 py-10 text-center sm:px-12 sm:py-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">A kinder future starts here</p>
          <h2 className="font-display text-3xl font-medium text-brand sm:text-5xl">{cta.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-brand/70">{cta.description}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button size="lg" onClick={openDonateModal}>{cta.donateAction}</Button>
            <Button asLink to="/contact" size="lg" variant="outline">{cta.contactAction}</Button>
          </div>
        </div>
      )}
    </Section>
  );
}
