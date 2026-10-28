/** Labeled input with accessible error and hint associations. */
export default function Input({
  label,
  id,
  error,
  hint,
  labelClassName = "text-brand",
  className = "",
  inputClassName = "",
  ...props
}) {
  const helpId = `${id}-help`;
  return (
    <div className={className}>
      {label ? <label htmlFor={id} className={`mb-2 block text-sm font-medium ${labelClassName}`}>{label}</label> : null}
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error || hint ? helpId : undefined}
        className={`min-h-12 w-full rounded-xl border border-white/30 bg-white px-4 text-sm text-brand placeholder:text-brand/45 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/40 ${inputClassName}`}
        {...props}
      />
      {error || hint ? (
        <p id={helpId} className={`mt-2 text-xs ${error ? "text-accent" : "text-white/75"}`}>
          {error || hint}
        </p>
      ) : null}
    </div>
  );
}
