import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFestivalDetail } from "../../api/festivalApi";
import useNavigationStore from "../../stores/navigationStore";
import useWishListStore from "../../stores/wishListStore";
import {
  CalendarIcon,
  HeartFillIcon,
  CallIcon,
  LocationIcon,
} from "../../components/ui/icon";
import FestivalIndicator from "../../components/FestivalIndicator";

const DetailPage = () => {
  const { id } = useParams();
  const [festivalDetail, setFestivalDetail] = useState(null);
  const [isInWishList, setIsInWishList] = useState(false);
  const { wishList, addToWishList, removeFromWishList } = useWishListStore();
  const setCurrentPage = useNavigationStore((state) => state.setCurrentPage);

  // const handleWishListClick = (e) => {
  //   e.stopPropagation();

  //   if (isInWishList) {
  //     removeFromWishList(festivalDetail.contentid);
  //   } else {
  //     addToWishList(festivalDetail);
  //   }
  // };

  useEffect(() => {
    setCurrentPage("detail");
  }, [setCurrentPage]);

  useEffect(() => {
    const loadFestivalDetail = async () => {
      const data = await fetchFestivalDetail(id);
      setFestivalDetail(data);
      setIsInWishList(
        wishList.some((item) => item.contentid === data.contentid),
      );
    };

    loadFestivalDetail();
  }, [id]);

  if (!festivalDetail) {
    return <div>Loading...</div>;
  }

  console.log(festivalDetail);

  return (
    <div className="mt-6">
      <div className="relative">
        <img
          src={festivalDetail.firstimage}
          alt={festivalDetail.title}
          className="h-60 w-full rounded-lg object-cover"
        />

        <div className="absolute left-4 top-4">
          <FestivalIndicator>개최중</FestivalIndicator>
        </div>
        <button
          className="absolute right-4 top-4"
          // onClick={handleWishListClick}
        >
          <HeartFillIcon active={isInWishList} />
        </button>
      </div>

      <div className="mt-4">
        <h1 className="text-lg font-bold">{festivalDetail.title}</h1>
        <div className="mt-2 flex items-center gap-2 text-base text-achromatic-medium">
          <CalendarIcon />
          <span>
            {festivalDetail.eventstartdate} - {festivalDetail.eventenddate}
          </span>
        </div>
        <div className="mt-2 flex items-center gap-2 text-base text-achromatic-medium">
          <LocationIcon />
          <span>{festivalDetail.addr1}</span>
        </div>
        <div className="mt-2 flex items-center gap-2 text-base text-achromatic-medium">
          <CallIcon />
          <span>{festivalDetail.tel}</span>
        </div>
      </div>

      <div className="mt-4 text-sm">
        <p>{festivalDetail.overview || "상세 설명이 준비 중입니다."}</p>
      </div>

      {/* 지도 기능 부분 */}
    </div>
  );
};

export default DetailPage;
