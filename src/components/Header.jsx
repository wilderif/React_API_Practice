import HeaderNavBar from "./HeaderNavBar";
import { LightModeIcon } from "./ui/icon";

const Header = (isHome) => {
  return (
    <header className="bg-slate-300 pt-4">
      {/* 레이아웃 클래스 */}
      <div className="mb-4 flex content-center justify-between">
        <h1>
          <img src="/logo.svg" alt="축제가자 logo" />
        </h1>
        <button>
          <LightModeIcon />
        </button>
      </div>
      {isHome && <HeaderNavBar />}
    </header>
  );
};

export default Header;
