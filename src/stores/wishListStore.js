import { create } from "zustand";
import { persist } from "zustand/middleware";

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
