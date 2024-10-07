import { Link, Outlet } from "react-router-dom";
import { CloseIcon } from "../../components/ui/icon/index";

import ProgressIndicator from "./components/ProgressIndicator";

const SearchLayout = () => {
  return (
    <div className="absolute left-0 right-0 top-0 h-screen bg-white pb-20 dark:bg-dark-background">
      <div className="mx-6">
        <Link to="/" className="absolute right-6 top-6">
          <CloseIcon />
        </Link>
        <ProgressIndicator />
        <Outlet />
      </div>
    </div>
  );
};

export default SearchLayout;
