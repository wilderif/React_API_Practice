import { create } from "zustand";

// 검색 기능을 위한 store
const useSearchStore = create((set) => ({
  date: new Date(), // 현재 날짜
  region: "0",

  setDate: (newDate) => set({ date: newDate }),
  setRegion: (newRegion) => set({ region: newRegion }),
}));

export default useSearchStore;
