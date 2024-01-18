import { create } from "zustand";

interface ListingFeaturesModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useListingFeaturesModal = create<ListingFeaturesModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));

export default useListingFeaturesModal;
