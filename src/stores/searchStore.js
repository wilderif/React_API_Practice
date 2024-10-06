import { create } from "zustand";

import getCurrentDate from "../util/getCurrentDate";

// Zustand 스토어 정의
const useSearchStore = create((set) => ({
  // 초기 상태
  date: getCurrentDate(), // 현재 날짜
  region: "0",

  // 상태 업데이트 함수
  setDate: (newDate) => set({ date: newDate }),
  setRegion: (newRegion) => set({ region: newRegion }),
}));

export default useSearchStore;
