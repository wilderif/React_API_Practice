import { HomeIcon, SearchIcon, HeartEmptyIcon } from "./ui/icon";

const BottomNavBar = () => {
  return (
    <nav className="fixed bottom-0 flex h-14 w-full items-center bg-slate-300 px-20">
      <ul className="flex w-full justify-between">
        <li className="flex flex-col items-center gap-0 bg-green-400">
          <HomeIcon />
          <span className="text-xxs -mt-0.5">홈</span>
        </li>
        <li className="flex flex-col items-center">
          <SearchIcon />
          <span className="text-xxs -mt-0.5">축제 검색</span>
        </li>
        <li className="flex flex-col items-center">
          <HeartEmptyIcon />
          <span className="text-xxs -mt-0.5">찜</span>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavBar;
