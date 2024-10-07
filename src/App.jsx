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

  return <RouterProvider router={routes} />;
};

export default App;
