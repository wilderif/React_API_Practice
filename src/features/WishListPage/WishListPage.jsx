import { useEffect } from "react";

import FestivalCard from "../../components/FestivalCard";

import useWishListStore from "../../stores/wishListStore";
import useNavigationStore from "../../stores/navigationStore";

const WhishListPage = () => {
  const { wishList } = useWishListStore();
  const setCurrentPage = useNavigationStore((state) => state.setCurrentPage);

  useEffect(() => {
    setCurrentPage("wishList");
  }, [setCurrentPage]);

  return (
    <div>
      {wishList.length > 0 ? (
        <div>
          {wishList.map((festival) => (
            <FestivalCard key={festival.contentid} festival={festival} />
          ))}
        </div>
      ) : (
        <p className="pt-6 text-base dark:text-achromatic-light">
          저장된 축제가 없습니다.
        </p>
      )}
    </div>
  );
};

export default WhishListPage;
