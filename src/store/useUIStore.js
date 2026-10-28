import { create } from "zustand";

export const useUIStore = create((set) => ({
  isMobileMenuOpen: false,
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  isDonateModalOpen: false,
  openDonateModal: () => set({ isDonateModalOpen: true }),
  closeDonateModal: () => set({ isDonateModalOpen: false }),
  adoptionFilter: "All",
  setAdoptionFilter: (adoptionFilter) => set({ adoptionFilter }),
  activeTestimonial: 0,
  setActiveTestimonial: (activeTestimonial) => set({ activeTestimonial }),
  openFaqId: null,
  setOpenFaqId: (openFaqId) => set({ openFaqId }),
}));
