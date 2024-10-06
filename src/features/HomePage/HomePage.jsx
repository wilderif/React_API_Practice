import FestivalCardList from "../../components/FestivalCardList";
import useNavigationStore from "../../stores/navigationStore";

const HomePage = () => {
  const setCurrentPage = useNavigationStore((state) => state.setCurrentPage);
  setCurrentPage("home");

  return <FestivalCardList />;
};

export default HomePage;
