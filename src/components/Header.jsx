import HeaderNavBar from "./HeaderNavBar";
import { LightModeIcon } from "./ui/icon";

const Header = ({ isHome }) => {
  return (
    <header className="px-6 py-4 shadow-md">
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
