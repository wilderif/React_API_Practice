import { create } from "zustand";

// 테마를 관리하는 store
const useThemeStore = create((set) => ({
  theme: "light",

  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));

export default useThemeStore;
