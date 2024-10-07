import HeaderNavBar from "./HeaderNavBar";
import { LightModeIcon, DarkModeIcon } from "./ui/icon";

import useNavigationStore from "../stores/navigationStore";
import useThemeStore from "../stores/themeStore";

const Header = () => {
  const currentPage = useNavigationStore((state) => state.currentPage);
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header className="px-6 py-4 shadow-md dark:shadow-achromatic-medium">
      <div className="mb-4 flex content-center justify-between">
        <h1>
          <img src="/logo.svg" alt="축제가자 logo" />
        </h1>
        <button className="mt-0.5" onClick={toggleTheme}>
          {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </button>
      </div>
      {currentPage === "home" && <HeaderNavBar />}
    </header>
  );
};

export default Header;
