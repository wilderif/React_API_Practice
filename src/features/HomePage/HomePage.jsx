import FestivalCardList from "../../components/FestivalCardList";
import useHomeStore from "../../stores/homeStore";
import getCurrenDate from "../../util/getCurrentDate";
import { fetchFestivals } from "../../api/festivalApi";
import { useEffect } from "react";

// const currentDate = getCurrenDate();

const HomePage = () => {
  useHomeStore.setState({ isHome: true });

  return <FestivalCardList />;
};

export default HomePage;
