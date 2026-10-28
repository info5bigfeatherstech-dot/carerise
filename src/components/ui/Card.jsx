import Icon from "./Icon";
import Button from "./Button";

/** Displays image, icon, statistic and adoption-card content in a shared shell. */
export default function Card({
  variant = "image",
  image,
  imageAlt = "",
  icon,
  title,
  description,
  value,
  action,
  actionProps,
  meta,
  className = "",
  children,
}) {
  if (variant === "stat") {
    return (
      <article className={`py-4 text-center sm:px-3 ${className}`}>
        {icon ? (
          <Icon name={icon} className="mx-auto mb-4 h-6 w-6 text-accent" />
        ) : null}
        <p className="font-display text-4xl font-medium text-brand sm:text-5xl">
          {value}
        </p>
        <h3 className="mt-2 text-sm text-brand/75">{title}</h3>
      </article>
    );
  }

  if (variant === "icon") {
    return (
      <article
        className={`rounded-3xl border border-brand/10 bg-white p-6 sm:p-7 ${className}`}
      >
        {icon ? (
          <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-brand">
            <Icon name={icon} className="h-6 w-6" />
          </span>
        ) : null}
        <h3 className="font-display text-2xl font-medium text-brand">
          {title}
        </h3>
        {description ? (
          <p className="mt-3 text-sm leading-6 text-brand/70">{description}</p>
        ) : null}
        {children}
        {action ? (
          <Button
            className="mt-5"
            variant="ghost"
            size="sm"
            icon="arrow-right"
            {...actionProps}
          >
            {action}
          </Button>
        ) : null}
      </article>
    );
  }

  return (
    <article
      className={`group overflow-hidden rounded-3xl border border-brand/10 bg-white ${className}`}
    >
      {image ? (
        <div className="overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : null}
      <div className="p-5 sm:p-6">
        {meta ? (
          <p className="mb-2 text-xs font-medium text-accent">{meta}</p>
        ) : null}
        <h3 className="font-display text-2xl font-medium text-brand">
          {title}
        </h3>
        {description ? (
          <p className="mt-2 text-sm leading-6 text-brand/70">{description}</p>
        ) : null}
        {children}
        {action ? <div className="mt-5">{action}</div> : null}
      </div>
    </article>
  );
}
