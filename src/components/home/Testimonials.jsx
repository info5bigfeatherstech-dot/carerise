import { useTestimonials } from "../../hooks/useTestimonials";
import { useUIStore } from "../../store/useUIStore";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Avatar from "../ui/Avatar";
import Icon from "../ui/Icon";
import Skeleton from "../ui/Skeleton";

/** Accessible one-at-a-time story carousel controlled by global UI state. */
export default function Testimonials() {
  const { data, isLoading, isError } = useTestimonials();
  const active = useUIStore((state) => state.activeTestimonial);
  const setActive = useUIStore((state) => state.setActiveTestimonial);
  const move = (direction) => setActive((active + direction + data.items.length) % data.items.length);

  return (
    <Section bg="white">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
        <SectionHeading eyebrow={data?.heading.eyebrow} title={data?.heading.title ?? " "} />
        {isLoading ? <Skeleton className="h-56" /> : isError ? (
          <p role="status" className="text-sm text-brand">{data?.error ?? "Stories are temporarily unavailable."}</p>
        ) : !data?.items?.length ? (
          <p className="text-sm text-brand/70">{data?.empty}</p>
        ) : (
          <div aria-live="polite" aria-atomic="true">
            <span className="font-display text-6xl leading-none text-accent" aria-hidden="true">“</span>
            <blockquote className="-mt-2 font-display text-2xl leading-snug text-brand sm:text-3xl">{data.items[active]?.quote}</blockquote>
            <div className="mt-7 flex flex-wrap items-center justify-between gap-5 border-t border-brand/10 pt-5">
              <div className="flex items-center gap-3">
                <Avatar src={data.items[active]?.image} alt={data.items[active]?.imageAlt} />
                <div>
                  <p className="text-sm font-medium text-brand">{data.items[active]?.name}</p>
                  <p className="mt-1 text-xs text-brand/65">{data.items[active]?.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => move(-1)} aria-label={data.previousLabel} className="rounded-full border border-brand/20 p-3 text-brand hover:bg-brand-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"><Icon name="arrow-left" className="h-4 w-4" /></button>
                <button type="button" onClick={() => move(1)} aria-label={data.nextLabel} className="rounded-full border border-brand/20 p-3 text-brand hover:bg-brand-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"><Icon name="arrow-right" className="h-4 w-4" /></button>
              </div>
            </div>
            <div className="sr-only">{data.positionLabel} {active + 1} {data.ofLabel} {data.items.length}</div>
          </div>
        )}
      </div>
    </Section>
  );
}
