/** Small semantic label for pet ages, categories and statuses. */
export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-brand-light px-3 py-1 text-xs font-medium text-brand ${className}`}
    >
      {children}
    </span>
  );
}
