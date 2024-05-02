import { create } from 'zustand';

type ManageStore = {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useManage = create<ManageStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));