import { useState } from "react";
import useNavigationStore from "../../../stores/navigationStore";
import useSearchStore from "../../../stores/searchStore";
import areaCode from "../../../constans/areaCode";

const SearchRegionPage = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const setRegion = useSearchStore((state) => state.setRegion);
  const setCurrentPage = useNavigationStore((state) => state.setCurrentPage);

  setCurrentPage("searchRegion");

  const handleRegionSelect = (regionKey) => {
    setSelectedRegion(regionKey);
    setRegion(regionKey);
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold">지역 선택</h2>
      <ul className="mt-4 space-y-2">
        {Object.entries(areaCode).map(([key, value]) => (
          <li key={key}>
            <button
              onClick={() => handleRegionSelect(key)}
              className={`block w-full rounded px-4 py-2 text-left ${
                selectedRegion === key
                  ? "bg-brand-primary text-white"
                  : "bg-achromatic-light"
              }`}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between">
        <button className="rounded bg-achromatic-medium px-4 py-2 text-white">
          이전
        </button>
        <button className="rounded bg-brand-primary px-4 py-2 text-white">
          건너뛰기
        </button>
      </div>
    </div>
  );
};

export default SearchRegionPage;
