import { useState } from "react";
import useSearchStore from "../../stores/searchStore";
import getCurrentDate from "../../util/getCurrentDate";

const SearchDatePage = () => {
  const [selectedDate, setSelectedDate] = useState(getCurrentDate());
  const setDate = useSearchStore((state) => state.setDate);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setDate(date);
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold">날짜 선택</h2>
      {/* 여기에 달력 컴포넌트가 들어가고, 날짜를 선택할 때 handleDateSelect 호출 */}
      <input type="date" />
      <div className="mt-4">
        <p className="text-xs">선택된 날짜: {selectedDate}</p>
        <button className="mt-4 rounded bg-brand-primary px-4 py-2 text-white">
          건너뛰기
        </button>
      </div>
    </div>
  );
};

export default SearchDatePage;
