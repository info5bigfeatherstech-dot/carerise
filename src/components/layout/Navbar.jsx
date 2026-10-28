import { Link } from "react-router-dom";
import { useHomeContent } from "../../hooks/useHomeContent";
import { useUIStore } from "../../store/useUIStore";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import MobileMenu from "./MobileMenu";
import DonateModal from "./DonateModal";

/** Persistent forest-green site header with responsive navigation and donation dialog. */
export default function Navbar() {
  const { data, isLoading, isError } = useHomeContent();
  const toggleMobileMenu = useUIStore((state) => state.toggleMobileMenu);
  const openDonateModal = useUIStore((state) => state.openDonateModal);
  const links = data?.nav?.links ?? [];

  return (
    <>
      <header className="sticky top-0 z-50 bg-brand text-white">
        <div className="relative mx-auto flex h-[76px] max-w-content items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link
            to="/"
            aria-label={data?.nav?.brandLabel ?? "CareRise home"}
            className="inline-flex items-center gap-2 font-display text-2xl font-bold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/25">
              <Icon name="leaf" className="h-5 w-5" />
              <Icon
                name="paw"
                className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-brand"
              />
            </span>
            CareRise
          </Link>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-5 xl:flex"
          >
            {links.map((link) => (
              <Link
                key={`${link.label}-${link.to}`}
                to={link.to}
                className="text-xs font-medium text-white/85 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              onClick={openDonateModal}
              className="hidden sm:inline-flex"
            >
              {data?.nav?.donateLabel}
            </Button>
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent xl:hidden"
              aria-label={data?.nav?.menuLabel}
              aria-expanded={useUIStore((state) => state.isMobileMenuOpen)}
            >
              <Icon
                name={
                  useUIStore((state) => state.isMobileMenuOpen)
                    ? "close"
                    : "menu"
                }
              />
            </button>
          </div>
          <MobileMenu
            links={links}
            onDonate={openDonateModal}
            donateLabel={data?.nav?.donateLabel}
          />
        </div>
        {isLoading ? (
          <span className="sr-only" role="status">
            Loading navigation
          </span>
        ) : null}
        {isError ? (
          <span className="sr-only" role="status">
            Navigation could not be loaded
          </span>
        ) : null}
      </header>
      <DonateModal />
    </>
  );
}
