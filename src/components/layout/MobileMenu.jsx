import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUIStore } from "../../store/useUIStore";
import Button from "../ui/Button";

/** Slide-down navigation for small screens, synchronized with the UI store. */
export default function MobileMenu({ links = [], onDonate, donateLabel }) {
  const isOpen = useUIStore((state) => state.isMobileMenuOpen);
  const closeMobileMenu = useUIStore((state) => state.closeMobileMenu);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") closeMobileMenu();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeMobileMenu, isOpen]);

  if (!isOpen) return null;
  return (
    <div className="absolute inset-x-0 top-full border-t border-white/15 bg-brand px-5 pb-6 pt-3 shadow-soft lg:hidden">
      <nav aria-label="Mobile navigation" className="mx-auto max-w-content">
        <ul className="divide-y divide-white/10">
          {links.map((link) => (
            <li key={`${link.label}-${link.to}`}>
              <Link
                to={link.to}
                onClick={closeMobileMenu}
                className="block py-3 text-sm text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button
          variant="primary"
          className="mt-5 w-full"
          onClick={() => {
            closeMobileMenu();
            onDonate();
          }}
        >
          {donateLabel}
        </Button>
      </nav>
    </div>
  );
}
