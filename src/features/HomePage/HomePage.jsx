import { useEffect } from "react";

import FestivalCardList from "../../components/FestivalCardList";

import useNavigationStore from "../../stores/navigationStore";

const HomePage = () => {
  const setCurrentPage = useNavigationStore((state) => state.setCurrentPage);
  useEffect(() => {
    setCurrentPage("home");
  }, [setCurrentPage]);

  return <FestivalCardList />;
};

export default HomePage;
