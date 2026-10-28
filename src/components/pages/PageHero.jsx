import { motion } from "framer-motion";
import Section from "../ui/Section";
import Skeleton from "../ui/Skeleton";

/** Reusable split introduction for interior pages. */
export default function PageHero({ content, isLoading, isError }) {
  if (isLoading) {
    return <Section><div className="grid items-center gap-10 lg:grid-cols-2"><Skeleton className="h-72" /><Skeleton className="h-80" /></div></Section>;
  }
  if (isError || !content) {
    return <Section><p role="status" className="text-sm text-brand">{content?.errorMessage ?? "Page information is temporarily unavailable."}</p></Section>;
  }

  return (
    <Section className="pb-14 pt-12 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{content.eyebrow}</p>
          <h1 className="font-display text-4xl font-medium leading-tight tracking-tight text-brand sm:text-5xl lg:text-6xl">{content.title}</h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-brand/75 sm:text-base sm:leading-8">{content.intro}</p>
        </motion.div>
        <img src={content.image} alt={content.imageAlt} className="h-72 w-full rounded-[2rem] object-cover sm:h-[420px]" />
      </div>
    </Section>
  );
}
