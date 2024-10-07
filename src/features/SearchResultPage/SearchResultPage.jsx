import FestivalCardList from "../../components/FestivalCardList";

import useNavigationStore from "../../stores/navigationStore";
import useSearchStore from "../../stores/searchStore";
import formatDateOutput from "../../util/formatDateOuput";
import areaCode from "../../constans/areaCode";

const SearchResultPage = () => {
  const setCurrentPage = useNavigationStore((state) => state.setCurrentPage);
  const date = useSearchStore((state) => state.date);
  const region = useSearchStore((state) => state.region);
  setCurrentPage("serchResult");

  const formattedDate = formatDateOutput(new Date(date));
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
