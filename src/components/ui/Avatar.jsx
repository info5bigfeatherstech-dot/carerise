/** Circular portrait with descriptive alternative text. */
export default function Avatar({ src, alt, size = "md", className = "" }) {
  const dimensions =
    size === "lg" ? "h-16 w-16" : size === "sm" ? "h-9 w-9" : "h-12 w-12";
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`${dimensions} rounded-full object-cover ${className}`}
    />
  );
}
