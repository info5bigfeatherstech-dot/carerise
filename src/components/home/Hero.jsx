import { motion } from "framer-motion";
import { useHomeContent } from "../../hooks/useHomeContent";
import { useUIStore } from "../../store/useUIStore";
import Section from "../ui/Section";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Skeleton from "../ui/Skeleton";

/** Introduces the CareRise mission with a hopeful image-led hero. */
export default function Hero() {
  const { data, isLoading, isError } = useHomeContent();
  const openDonateModal = useUIStore((state) => state.openDonateModal);
  const hero = data?.hero;
  if (isLoading) {
    return <Section><div className="grid gap-10 lg:grid-cols-2"><Skeleton className="h-[420px]" /><Skeleton className="h-[420px]" /></div></Section>;
  }
  if (isError || !hero) {
    return <Section><p role="status" className="text-sm text-brand">The welcome section is temporarily unavailable.</p></Section>;
  }

  return (
    <Section className="overflow-hidden pb-12 pt-12 sm:pb-16 sm:pt-16 lg:pb-20 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:gap-16">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{hero.eyebrow}</p>
          <h1 className="max-w-2xl font-display text-5xl font-medium leading-[1.03] tracking-tight text-brand sm:text-6xl lg:text-[4.35rem]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-brand/75 sm:text-base sm:leading-8">{hero.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={openDonateModal} size="lg" icon="arrow-right">{hero.primaryAction}</Button>
            <Button asLink to="/adopt" variant="outline" size="lg">{hero.secondaryAction}</Button>
          </div>
          <ul className="mt-10 grid gap-5 border-t border-brand/10 pt-7 sm:grid-cols-3 sm:gap-4">
            {hero.trustPoints.map((point) => (
              <li key={point.value} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand">
                  <Icon name={point.icon} className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-display text-base font-medium text-brand">{point.value}</span>
                  <span className="mt-1 block text-xs leading-5 text-brand/65">{point.label}</span>
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
        <div className="relative mx-auto w-full max-w-[650px] lg:mx-0">
          <div className="overflow-hidden rounded-[2rem]">
            <img src={hero.image} alt={hero.imageAlt} className="h-[360px] w-full object-cover sm:h-[500px] lg:h-[580px]" />
          </div>
          <div className="absolute -bottom-7 right-4 w-36 rounded-2xl border-4 border-white bg-white p-1 shadow-soft sm:right-8 sm:w-52">
            <img src={hero.insetImage} alt={hero.insetImageAlt} loading="lazy" className="h-28 w-full rounded-xl object-cover sm:h-36" />
          </div>
          <span className="absolute -left-3 top-8 hidden h-14 w-14 items-center justify-center rounded-full bg-accent text-white sm:flex">
            <Icon name="leaf" className="h-7 w-7" />
          </span>
        </div>
      </div>
    </Section>
  );
}
