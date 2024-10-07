import { useNavigate } from "react-router-dom";
import { HeartFillIcon } from "./ui/icon/index";
import FestivalIndicator from "./FestivalIndicator";
import areaCode from "../constans/areaCode";
import useWishListStore from "../stores/wishListStore";

const FestivalCard = ({ festival }) => {
  const navigate = useNavigate();
  const { wishList, addToWishList, removeFromWishList } = useWishListStore();

  const handleCardClick = () => {
    navigate(`/detail/${festival.contentid}`);
  };

  const isInWishList = wishList.some(
    (item) => item.contentid === festival.contentid,
  );

  const handleWishListClick = (e) => {
    e.stopPropagation();

    if (isInWishList) {
      removeFromWishList(festival.contentid);
    } else {
      addToWishList(festival);
    }
  };

  const calculateDday = (startDate) => {
    const today = new Date();
    const eventDate = new Date(
      `${startDate.substring(0, 4)}-${startDate.substring(4, 6)}-${startDate.substring(6, 8)}`,
    );
    const differenceInTime = eventDate - today;
    const differenceInDays =
      Math.ceil(differenceInTime / (1000 * 60 * 60 * 24)) - 1;

    return differenceInDays >= 0 ? `D-${differenceInDays}` : `개최중`;
  };

  return (
    <div className="relative mt-6 w-full" onClick={handleCardClick}>
      <img
        src={festival.firstimage}
        alt={festival.title}
        className="h-60 w-full rounded-xl object-cover"
      />
      <div className="absolute left-2 top-2">
        <FestivalIndicator>
          {calculateDday(festival.eventstartdate)}
        </FestivalIndicator>
      </div>
      <button className="absolute right-2 top-2" onClick={handleWishListClick}>
        <HeartFillIcon active={isInWishList} />
      </button>
      <div>
        <h2 className="mt-2 text-base font-bold dark:text-white">
          {festival.title}
        </h2>
        <p className="mt-1.5 text-xs dark:text-achromatic-light">
          {festival.eventstartdate} - {festival.eventenddate}
        </p>
        <p className="text-xs dark:text-achromatic-light">
          {areaCode[festival.areacode]}
        </p>
      </div>
    </div>
  );
};

export default FestivalCard;
