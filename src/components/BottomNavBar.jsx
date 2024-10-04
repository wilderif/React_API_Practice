import { HomeIcon, SearchIcon, HeartEmptyIcon } from "./ui/icon";

const BottomNavBar = () => {
  return (
    <nav className="shadow-top_only fixed bottom-0 flex h-14 w-full items-center bg-white px-20">
      <ul className="flex w-full justify-between">
        <li className="flex flex-col items-center gap-0">
          <HomeIcon />
          <span className="-mt-0.5 text-xxs">홈</span>
        </li>
        <li className="flex flex-col items-center">
          <SearchIcon />
          <span className="-mt-0.5 text-xxs">축제 검색</span>
        </li>
        <li className="flex flex-col items-center">
          <HeartEmptyIcon />
          <span className="-mt-0.5 text-xxs">찜</span>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavBar;
