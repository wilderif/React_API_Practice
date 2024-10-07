import { create } from "zustand";

// 현재 어떤 페이지를 보고 있는지 관리하는 store
const useNavigationStore = create((set) => ({
  // 초기값: home
  // home, searchDate, searchRegion detail, wishList
  currentPage: "home",
  setCurrentPage: (page) => set({ currentPage: page }),
}));

export default useNavigationStore;
