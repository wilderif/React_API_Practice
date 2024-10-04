import Header from "../../components/Header";
import BottomNavBar from "../../components/BottomNavBar";
import FestivalCardList from "../../components/FestivalCardList";
import useHomeStore from "../../stores/homeStore";

const HomePage = () => {
  useHomeStore.setState({ isHome: true });
  return <FestivalCardList />;
};

export default HomePage;
