import { Link } from "react-router-dom";
import useNavigationStore from "../stores/navigationStore";

import { HomeIcon, SearchIcon, HeartEmptyIcon } from "./ui/icon";

const BottomNavBar = () => {
  const currentPage = useNavigationStore((state) => state.currentPage);

  return (
    <nav className="fixed bottom-0 flex h-14 w-full items-center bg-white px-20 shadow-top_only">
      <ul className="flex w-full justify-between">
        <li>
          <Link to="/">
            <div className="flex flex-col items-center gap-0">
              <HomeIcon />
              <span
                className={`-mt-0.5 text-xxs ${
                  currentPage === "home"
                    ? "text-brand-primary"
                    : "text-achromatic-medium"
                }`}
              >
                홈
              </span>
            </div>
          </Link>
        </li>
        <li className="flex flex-col items-center">
          <Link to="/search/date">
            <div className="flex flex-col items-center gap-0">
              <SearchIcon />
              <span
                className={`-mt-0.5 text-xxs ${
                  currentPage === "searchDate" || currentPage === "searchRegion"
                    ? "text-brand-primary"
                    : "text-achromatic-medium"
                }`}
              >
                축제 검색
              </span>
            </div>
          </Link>
        </li>
        <li className="flex flex-col items-center">
          <Link to="/wish-list">
            <div className="flex flex-col items-center gap-0">
              <HeartEmptyIcon />
              <span
                className={`-mt-0.5 text-xxs ${
                  currentPage === "wishList"
                    ? "text-brand-primary"
                    : "text-achromatic-medium"
                }`}
              >
                찜
              </span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavBar;
