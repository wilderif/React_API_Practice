import { Outlet } from "react-router-dom";
import BottomNavBar from "../../components/BottomNavBar";
import ProgressIndicator from "./components/ProgressIndicator";

const SearchLayout = () => {
  return (
    <>
      <ProgressIndicator />
      <Outlet />
      <BottomNavBar />
    </>
  );
};

export default SearchLayout;
