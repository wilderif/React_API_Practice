import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./features/RootLayout";
import HomePage from "./features/HomePage/HomePage";
import SearchResultPage from "./features/SearchResultPage/SearchResultPage";
import WhishListPage from "./features/WishListPage/WishListPage";
import SearchDatePage from "./features/Search/SearchDatePage";
import SearchRegionPage from "./features/Search/SearchRegionPage";
import SearchKeywordPage from "./features/Search/SearchKeywordPage";
import DetailPage from "./features/DetailPage/DetailPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "search",
        children: [
          {
            path: "date",
            element: <SearchDatePage />,
          },
          {
            path: "region",
            element: <SearchRegionPage />,
          },
          {
            path: "keyword",
            element: <SearchKeywordPage />,
          },
        ],
      },
      {
        path: "SearchResult",
        element: <SearchResultPage />,
      },
      {
        path: "detail",
        children: [
          {
            path: ":id",
            element: <DetailPage />,
          },
        ],
      },
      {
        path: "wish-list",
        element: <WhishListPage />,
      },
    ],
  },
]);

export default routes;
