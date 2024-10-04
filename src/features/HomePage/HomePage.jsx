import Header from "../../components/Header";
import BottomNavBar from "../../components/BottomNavBar";
import FestivalCardList from "../../components/FestivalCardList";

const HomePage = () => {
  return (
    <>
      <Header isHome={true} />
      <div className="mx-6 pb-20">
        <FestivalCardList />
      </div>
      <BottomNavBar />
    </>
  );
};

export default HomePage;
