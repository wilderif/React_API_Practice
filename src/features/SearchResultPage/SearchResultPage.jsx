import useNavigationStore from "../../stores/navigationStore";
import useSearchStore from "../../stores/searchStore";
import FestivalCardList from "../../components/FestivalCardList";
import areaCode from "../../constans/areaCode";

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}년 ${month}월 ${day}일`;
};

const SearchResultPage = () => {
  const setCurrentPage = useNavigationStore((state) => state.setCurrentPage);
  const date = useSearchStore((state) => state.date);
  const region = useSearchStore((state) => state.region);
  setCurrentPage("serchResult");

  const formattedDate = formatDate(new Date(date));
  const regionName = areaCode[region];

  return (
    <div>
      <h2 className="mt-6 text-base">
        {`'${formattedDate}' '${regionName}' 축제 검색 결과입니다.`}
      </h2>
      <FestivalCardList />
    </div>
  );
};

export default SearchResultPage;
