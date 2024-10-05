import { HeartFillIcon } from "./ui/icon/index";
import FestivalIndicator from "./FestivalIndicator";
import areaCode from "../constans/areaCode";

const FestivalCard = ({ festival }) => {
  return (
    <div className="relative mt-6 w-full">
      <img
        src={festival.firstimage}
        alt={festival.title}
        className="h-60 w-full rounded-xl object-cover"
      />
      <div className="absolute left-2 top-2">
        <FestivalIndicator>개최중</FestivalIndicator>
      </div>
      <button className="absolute right-2 top-2">
        <HeartFillIcon active={false} />
      </button>
      <div>
        <h2 className="mt-2 text-base font-bold">{festival.title}</h2>
        <p className="mt-1.5 text-xs">
          {festival.eventstartdate} - {festival.eventenddate}
        </p>
        <p className="text-xs">{areaCode[festival.sigungucode]}</p>
      </div>
    </div>
  );
};

export default FestivalCard;
