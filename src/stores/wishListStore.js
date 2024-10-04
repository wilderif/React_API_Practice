import create from "zustand";
import { persist } from "zustand/middleware";

const useWishlistStore = create(
  persist(
    (set) => ({
      wishlist: [],

      // 찜 목록에 추가
      addToWishlist: (festival) =>
        set((state) => ({
          wishlist: [...state.wishlist, festival],
        })),

      // 찜 목록에서 제거
      removeFromWishlist: (id) =>
        set((state) => ({
          wishlist: state.wishlist.filter((item) => item.id !== id),
        })),

      // 찜 목록 초기화
      resetWishlist: () => set({ wishlist: [] }),
    }),
    {
      name: "wishlist-storage", // 로컬 스토리지에 저장될 키 이름
    },
  ),
);

export default useWishlistStore;
