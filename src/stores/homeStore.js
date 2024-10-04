import { create } from "zustand";

const useHomeStore = create((set) => ({
  isHome: true,
  setIsHome: (value) => set({ isHome: value }),
}));

export default useHomeStore;
