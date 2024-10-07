import { create } from "zustand";
import { persist } from "zustand/middleware";

// 위시리스트를 관리하는 store
// 전역 상태와 localStorage에 동시에 저장
const useWishListStore = create(
  persist(
    (set) => ({
      wishList: [],

      addToWishList: (festival) =>
        set((state) => ({
          wishList: [...state.wishList, festival],
        })),

      removeFromWishList: (contentid) =>
        set((state) => ({
          wishList: state.wishList.filter(
            (item) => item.contentid !== contentid,
          ),
        })),

      resetWishList: () => set({ wishList: [] }),
    }),
    {
      name: "wishList-storage",
    },
  ),
);

export default useWishListStore;
