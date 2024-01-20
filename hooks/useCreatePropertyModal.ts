import { create } from "zustand";

interface CreatePropertyStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useCreatePropertyModal = create<CreatePropertyStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));

export default useCreatePropertyModal;
