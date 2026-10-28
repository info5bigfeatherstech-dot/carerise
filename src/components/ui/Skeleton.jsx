/** Announces pending content and renders a neutral loading placeholder. */
export default function Skeleton({ className = "h-48 w-full", rounded = "rounded-3xl" }) {
  return <div aria-hidden="true" className={`animate-pulse bg-surface-muted ${rounded} ${className}`} />;
}
