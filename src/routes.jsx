import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./features/RootLayout";
import HomePage from "./features/HomePage/HomePage";
import SearchLayout from "./features/Search/SearchLayout";
import SearchDatePage from "./features/Search/SearchDatePage/SearchDatePage";
import SearchRegionPage from "./features/Search/SearchRegionPage/SearchRegionPage";
import SearchKeywordPage from "./features/Search/SearchKeywordPage";
import SearchResultPage from "./features/SearchResultPage/SearchResultPage";
import DetailPage from "./features/DetailPage/DetailPage";
import WhishListPage from "./features/WishListPage/WishListPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "search",
        element: <SearchLayout />,
        children: [
          {
            path: "date",
            element: <SearchDatePage />,
          },
          {
            path: "region",
            element: <SearchRegionPage />,
          },
          // {
          //   path: "keyword",
          //   element: <SearchKeywordPage />,
          // },
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
