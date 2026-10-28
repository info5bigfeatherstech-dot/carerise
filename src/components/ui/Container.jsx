/** Keeps page content aligned to the shared responsive layout width. */
export default function Container({
  children,
  className = "",
  as: Element = "div",
  ...props
}) {
  return (
    <Element
      className={`mx-auto w-full max-w-content px-5 sm:px-8 lg:px-12 ${className}`}
      {...props}
    >
      {children}
    </Element>
  );
}
