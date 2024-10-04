import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import BottomNavBar from "../components/BottomNavBar";
import getCurrentDate from "../util/getCurrentDate";
import useHomeStore from "../stores/homeStore";

const RootLayout = () => {
  const { isHome, setIsHome } = useHomeStore();

  // isHome 바뀔 때 useEffect?

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
