import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SearchOptionButton from "../../../components/SearchOptionButton";

import useNavigationStore from "../../../stores/navigationStore";
import useSearchStore from "../../../stores/searchStore";
import areaCode from "../../../constans/areaCode";

const SearchRegionPage = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const setRegion = useSearchStore((state) => state.setRegion);
  const setCurrentPage = useNavigationStore((state) => state.setCurrentPage);

  useEffect(() => {
    setCurrentPage("searchRegion");
  }, [setCurrentPage]);

  const handleRegionSelect = (regionKey) => {
    setSelectedRegion(regionKey);
    setRegion(regionKey);
  };

  return (
    <div className="relative mt-6">
      <div className="h-96 overflow-auto border-2 p-2">
        <ul className="space-y-1">
          {Object.entries(areaCode).map(([key, value]) => (
            <li key={key}>
              <button
                onClick={() => handleRegionSelect(key)}
                className={`block w-full rounded border border-achromatic-medium px-3 py-2 text-left text-black ${
                  selectedRegion === key
                    ? "bg-brand-primary text-white"
                    : "bg-white"
                }`}
              >
                {value}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 flex justify-between">
        <Link to="/search/date">
          <SearchOptionButton background="bg-achromatic-light">
            이전
          </SearchOptionButton>
        </Link>
        <Link to="/search-result">
          <SearchOptionButton>검색</SearchOptionButton>
        </Link>
      </div>
    </div>
  );
};

export default SearchRegionPage;
