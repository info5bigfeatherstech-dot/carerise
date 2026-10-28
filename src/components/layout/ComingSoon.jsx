import { Link } from "react-router-dom";
import { useHomeContent } from "../../hooks/useHomeContent";
import Container from "../ui/Container";
import Button from "../ui/Button";

/** Shared placeholder destination for every non-home navigation route. */
export default function ComingSoon() {
  const { data } = useHomeContent();
  const content = data?.comingSoon;
  return (
    <main id="main-content" className="flex min-h-[65vh] items-center bg-surface py-20">
      <Container className="text-center">
        {content ? (
          <>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">{content.eyebrow}</p>
            <h1 className="mx-auto max-w-2xl font-display text-4xl font-medium text-brand sm:text-6xl">{content.title}</h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-brand/75">{content.description}</p>
            <Button asLink to="/" className="mt-8">{content.action}</Button>
          </>
        ) : <p role="status">Loading…</p>}
      </Container>
    </main>
  );
}
