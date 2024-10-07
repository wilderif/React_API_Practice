import { create } from "zustand";

const useNavigationStore = create((set) => ({
  // 초기값: home
  // home, searchDate, searchRegion detail, wishList
  currentPage: "home",
  setCurrentPage: (page) => set({ currentPage: page }),
}));

export default useNavigationStore;
