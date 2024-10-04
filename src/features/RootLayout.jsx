import { Outlet } from "react-router-dom";

import BottomNavBar from "../components/BottomNavBar";
import FestivalCardList from "../components/FestivalCardList";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <>
      <Header isHome={true} />
      <main className="mx-6 pb-20">
        <Outlet />
      </main>
      <BottomNavBar />
    </>
  );
};

export default RootLayout;
