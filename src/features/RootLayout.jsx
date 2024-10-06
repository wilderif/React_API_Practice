import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import BottomNavBar from "../components/BottomNavBar";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="mx-6 pb-20">
        <Outlet />
      </main>
      <BottomNavBar />
    </>
  );
};

export default RootLayout;
