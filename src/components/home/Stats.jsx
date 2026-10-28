import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useImpactStats } from "../../hooks/useImpactStats";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Skeleton from "../ui/Skeleton";

function AnimatedValue({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return undefined;
    let frame;
    const start = performance.now();
    const duration = 1400;
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(value * (1 - (1 - progress) ** 3)));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

/** Reveals impact totals with a restrained count-up when the section enters view. */
export default function Stats() {
  const { data, isLoading, isError } = useImpactStats();
  const stats = data?.items ?? [];
  return (
    <Section bg="white">
      <div className="text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {data?.heading.eyebrow}
        </p>
        <h2 className="font-display text-3xl font-medium text-brand sm:text-4xl">
          {data?.heading.title}
        </h2>
      </div>
      {isLoading ? (
        <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {Array.from({ length: 4 }, (_, i) => (
            <Skeleton key={i} className="h-32" rounded="rounded-xl" />
          ))}
        </div>
      ) : isError ? (
        <p role="status" className="mt-8 text-center text-sm text-brand">
          {data?.error ?? "Impact totals are temporarily unavailable."}
        </p>
      ) : !stats.length ? (
        <p className="mt-8 text-center text-sm text-brand/70">{data?.empty}</p>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-7 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={index > 0 ? "border-brand/15 lg:border-l" : ""}
            >
              <Card
                variant="stat"
                icon={stat.icon}
                value={
                  <AnimatedValue value={stat.value} suffix={stat.suffix} />
                }
                title={stat.label}
              />
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
