import { Link } from "react-router-dom";
import Icon from "./Icon";

const variants = {
  primary: "bg-accent text-white hover:bg-accent-dark",
  secondary: "bg-brand text-white hover:bg-brand-dark",
  outline: "border border-brand text-brand hover:bg-brand-light",
  ghost: "text-brand hover:bg-brand-light",
};

const sizes = {
  sm: "min-h-10 px-4 text-xs",
  md: "min-h-12 px-5 text-sm",
  lg: "min-h-14 px-7 text-sm",
};

/** Accessible action button with link, icon and loading support. */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  loading = false,
  asLink = false,
  to,
  type = "button",
  className = "",
  disabled,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      {loading ? (
        <span
          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"
          aria-label="Loading"
        />
      ) : icon && iconPosition === "left" ? (
        <Icon name={icon} className="h-4 w-4" />
      ) : null}
      {children}
      {!loading && icon && iconPosition === "right" ? (
        <Icon name={icon} className="h-4 w-4" />
      ) : null}
    </>
  );

  if (asLink && to) {
    return (
      <Link
        to={to}
        className={classes}
        aria-disabled={disabled || loading}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      type={type}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
}
