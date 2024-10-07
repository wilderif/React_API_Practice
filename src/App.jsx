import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

import routes from "./routes";
import useThemeStore from "./stores/themeStore";

const App = () => {
  const { theme } = useThemeStore();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen dark:bg-dark-background dark:text-white">
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
