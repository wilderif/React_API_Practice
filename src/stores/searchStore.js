import { create } from "zustand";

// Zustand 스토어 정의
const useSearchStore = create((set) => ({
  // 초기 상태
  date: null,
  region: "",
  keyword: "",

  // 상태 업데이트 함수
  setDate: (newDate) => set({ date: newDate }),
  setRegion: (newRegion) => set({ region: newRegion }),
  setKeyword: (newKeyword) => set({ keyword: newKeyword }),
}));

export default useSearchStore;
