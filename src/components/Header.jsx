import useNavigationStore from "../stores/navigationStore";
import useThemeStore from "../stores/themeStore";
import HeaderNavBar from "./HeaderNavBar";
import { LightModeIcon, DarkModeIcon } from "./ui/icon";

const Header = () => {
  const currentPage = useNavigationStore((state) => state.currentPage);
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header className="px-6 py-4 shadow-md">
      <div className="mb-4 flex content-center justify-between">
        <h1>
          <img src="/logo.svg" alt="축제가자 logo" />
        </h1>
        <button onClick={toggleTheme}>
          {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
      </div>
      {currentPage === "home" && <HeaderNavBar />}
    </header>
  );
};

export default Header;
