import create from "zustand";
import { persist } from "zustand/middleware";

const useThemeStore = create(
  persist(
    (set) => ({
      theme: "light", // 기본값은 'light'

      // 테마 변경 함수
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "theme-storage", // 로컬 스토리지에 저장될 키 이름
    },
  ),
);

export default useThemeStore;
