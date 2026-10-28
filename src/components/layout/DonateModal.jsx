import { useState } from "react";
import { useUIStore } from "../../store/useUIStore";
import { useHomeContent } from "../../hooks/useHomeContent";
import Modal from "../ui/Modal";
import Button from "../ui/Button";

/** Presents the donation action without navigating away from the home page. */
export default function DonateModal() {
  const open = useUIStore((state) => state.isDonateModalOpen);
  const closeDonateModal = useUIStore((state) => state.closeDonateModal);
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const { data } = useHomeContent();
  const donation = data?.donate;
  if (!donation) return null;

  return (
    <Modal open={open} onClose={closeDonateModal} title={donation.title}>
      <p className="text-sm leading-7 text-brand/75">{donation.description}</p>
      <div className="mt-6 grid grid-cols-3 gap-3" aria-label="Choose a donation amount">
        {[500, 1000, 2500].map((amount) => (
          <button
            type="button"
            key={amount}
            aria-pressed={selectedAmount === amount}
            onClick={() => setSelectedAmount(amount)}
            className={`rounded-xl border px-3 py-3 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${selectedAmount === amount ? "border-brand bg-brand-light text-brand" : "border-brand/20 text-brand/75 hover:bg-surface-muted"}`}
          >
            ₹{amount.toLocaleString("en-IN")}
          </button>
        ))}
      </div>
      <p className="mt-5 text-xs leading-5 text-brand/60">{donation.note}</p>
      <Button className="mt-6 w-full" onClick={closeDonateModal}>
        {donation.action}
      </Button>
    </Modal>
  );
}
