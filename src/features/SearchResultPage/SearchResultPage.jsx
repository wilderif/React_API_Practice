import useNavigationStore from "../../stores/navigationStore";
import FestivalCardList from "../../components/FestivalCardList";

const SearchResultPage = () => {
  const setCurrentPage = useNavigationStore((state) => state.setCurrentPage);
  setCurrentPage("serchResult");

  return <FestivalCardList />;
};

export default SearchResultPage;
