import { useState, useEffect } from "react";

export const useWishList = () => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    const storedWishList = JSON.parse(localStorage.getItem("wishList")) || [];
    setWishList(storedWishList);
  }, []);

  return { wishList };
};
