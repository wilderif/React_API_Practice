import { create } from "zustand";

const useNavigationStore = create((set) => ({
  // 초기값: home
  // home, search, detail, wishList
  currentPage: "home",
  setPage: (page) => set({ currentPage: page }), // 페이지 변경 함수
}));

export default useNavigationStore;
