import Container from "./Container";

/** Provides standard vertical spacing and the two allowed section surfaces. */
export default function Section({
  children,
  bg = "white",
  className = "",
  id,
  container = true,
  ...props
}) {
  const content = container ? <Container>{children}</Container> : children;
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 sm:py-20 lg:py-24 ${bg === "gray" ? "bg-surface-muted" : "bg-surface"} ${className}`}
      {...props}
    >
      {content}
    </section>
  );
}
