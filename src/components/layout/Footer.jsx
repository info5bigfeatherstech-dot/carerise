import { useState } from "react";
import { Link } from "react-router-dom";
import { useHomeContent } from "../../hooks/useHomeContent";
import Icon from "../ui/Icon";
import Input from "../ui/Input";
import Button from "../ui/Button";

const socialLinks = [
  { icon: "instagram", href: "https://www.instagram.com/", label: "Instagram" },
  { icon: "facebook", href: "https://www.facebook.com/", label: "Facebook" },
  { icon: "linkedin", href: "https://www.linkedin.com/", label: "LinkedIn" },
];

/** Shared forest-green footer with navigation, contact details and newsletter form. */
export default function Footer() {
  const { data, isLoading, isError } = useHomeContent();
  const [subscribed, setSubscribed] = useState(false);
  const footer = data?.footer;

  if (isLoading) {
    return (
      <footer className="bg-brand px-5 py-12 text-white" aria-busy="true">
        <p className="mx-auto max-w-content text-sm">Loading footer…</p>
      </footer>
    );
  }
  if (isError || !footer) {
    return (
      <footer className="bg-brand px-5 py-12 text-white">
        <p className="mx-auto max-w-content text-sm" role="status">
          Footer information is temporarily unavailable.
        </p>
      </footer>
    );
  }

  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto grid max-w-content gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-5 lg:px-12 lg:py-16">
        <div className="lg:col-span-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-display text-2xl font-bold"
            aria-label="CareRise home"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25">
              <Icon name="leaf" />
            </span>
            CareRise
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/75">
            {footer.about}
          </p>
          <p className="mt-6 text-xs font-medium uppercase tracking-[0.16em] text-white/70">
            {footer.socialLabel}
          </p>
          <div className="mt-3 flex gap-2">
            {socialLinks.map((item) => (
              <a
                key={item.icon}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="rounded-full border border-white/20 p-2.5 text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Icon name={item.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-display text-lg font-medium">
            {footer.quickLinksTitle}
          </h2>
          <ul className="mt-4 space-y-3">
            {footer.links.map((link) => (
              <li key={link.label}>
                <Link
                  className="text-sm text-white/75 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  to={link.to}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg font-medium">
            {footer.programsTitle}
          </h2>
          <ul className="mt-4 space-y-3">
            {footer.programLinks.map((link) => (
              <li key={link.label}>
                <Link
                  className="text-sm text-white/75 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  to={link.to}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-lg font-medium">
            {footer.contactTitle}
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex gap-2">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0" />
              {footer.address}
            </li>
            <li className="flex gap-2">
              <Icon name="phone" className="h-4 w-4 shrink-0" />
              <a
                href={`tel:${footer.phone.replaceAll(" ", "")}`}
                className="hover:text-white"
              >
                {footer.phone}
              </a>
            </li>
            <li className="flex gap-2">
              <Icon name="mail" className="h-4 w-4 shrink-0" />
              <a href={`mailto:${footer.email}`} className="hover:text-white">
                {footer.email}
              </a>
            </li>
          </ul>
          <p className="mt-5 text-xs font-medium text-white">
            {footer.emergencyLabel}
          </p>
          <a
            href={`tel:${footer.emergencyPhone.replaceAll(" ", "")}`}
            className="mt-1 inline-block text-sm text-white/75 hover:text-white"
          >
            {footer.emergencyPhone}
          </a>
        </div>
        <form
          className="border-t border-white/15 pt-8 md:col-span-2 lg:col-span-5 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-8"
          onSubmit={(event) => {
            event.preventDefault();
            setSubscribed(true);
          }}
        >
          <div>
            <h2 className="font-display text-xl font-medium">
              {footer.newsletterTitle}
            </h2>
            <p className="mt-2 text-sm text-white/75">
              {footer.newsletterDescription}
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <Input
              id="newsletter-email"
              type="email"
              required
              placeholder={footer.newsletterPlaceholder}
              aria-label={footer.newsletterPlaceholder}
              className="sm:min-w-72"
            />
            <Button type="submit" variant="primary" size="md">
              {footer.newsletterAction}
            </Button>
          </div>
          {subscribed ? (
            <p
              className="mt-3 text-sm text-white/85 lg:col-span-2"
              role="status"
            >
              {footer.newsletterSuccess}
            </p>
          ) : null}
        </form>
        <p className="border-t border-white/15 pt-6 text-xs text-white/60 md:col-span-2 lg:col-span-5">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
