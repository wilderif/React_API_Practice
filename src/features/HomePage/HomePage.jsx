import FestivalCardList from "../../components/FestivalCardList";
import useHomeStore from "../../stores/homeStore";
import getCurrenDate from "../../util/getCurrentDate";
import { fetchFestivals } from "../../api/festivalApi";
import { useEffect } from "react";

const currentDate = getCurrenDate();

const HomePage = () => {
  useEffect(() => {
    useHomeStore.setState({ isHome: true });
    // const newFestivals = async () => {
    //   const loaded = await fetchFestivals(20241004, "", 10, 1);
    //   console.log(loaded);
    // };

    // newFestivals();
  }, []);

  return <FestivalCardList eventStartDate={currentDate} areaCode="" />;
};

export default HomePage;
