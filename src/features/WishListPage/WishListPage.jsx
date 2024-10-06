import useWishListStore from "../../stores/wishListStore";
import useNavigationStore from "../../stores/navigationStore";
import FestivalCard from "../../components/FestivalCard";

const WhishListPage = () => {
  const { wishList } = useWishListStore(); // Fetch wishlist data from store
  const setCurrentPage = useNavigationStore((state) => state.setCurrentPage);
  setCurrentPage("wishList");

  return (
    <div>
      {wishList.length > 0 ? (
        <div>
          {wishList.map((festival) => (
            <FestivalCard key={festival.contentid} festival={festival} />
          ))}
        </div>
      ) : (
        <p className="pt-6 text-base">저장된 축제가 없습니다.</p> // No festivals in wishlist
      )}
    </div>
  );
};

export default WhishListPage;
