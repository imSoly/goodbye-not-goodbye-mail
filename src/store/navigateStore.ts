import { create } from "zustand";

interface NavigateStore {
  isCollapsed: boolean;
  toggleIsCollapsed: () => void;
}

export const useNavigateStore = create<NavigateStore>((set) => ({
  isCollapsed: false,
  toggleIsCollapsed: () =>
    set((state) => ({ isCollapsed: !state.isCollapsed })),
}));
