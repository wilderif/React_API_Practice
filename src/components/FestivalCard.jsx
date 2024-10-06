import { HeartFillIcon } from "./ui/icon/index";
import FestivalIndicator from "./FestivalIndicator";
import areaCode from "../constans/areaCode";

const FestivalCard = ({ festival }) => {
  const calculateDday = (startDate) => {
    const today = new Date(); // 현재 날짜
    const eventDate = new Date(
      `${startDate.substring(0, 4)}-${startDate.substring(4, 6)}-${startDate.substring(6, 8)}`,
    ); // eventstartdate를 Date 객체로 변환

    // 남은 날짜 계산
    const differenceInTime = eventDate - today;
    const differenceInDays = Math.ceil(
      differenceInTime / (1000 * 60 * 60 * 24),
    );

    return differenceInDays >= 0 ? `D-${differenceInDays}` : `개최중`;
  };

  return (
    <div className="relative mt-6 w-full">
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
      <button className="absolute right-2 top-2">
        <HeartFillIcon active={false} />
      </button>
      <div>
        <h2 className="mt-2 text-base font-bold">{festival.title}</h2>
        <p className="mt-1.5 text-xs">
          {festival.eventstartdate} - {festival.eventenddate}
        </p>
        <p className="text-xs">{areaCode[festival.areacode]}</p>
      </div>
    </div>
  );
};

export default FestivalCard;
