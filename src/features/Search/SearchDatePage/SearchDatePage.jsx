import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";

import SearchOptionButton from "../../../components/SearchOptionButton";

import useNavigationStore from "../../../stores/navigationStore";
import useSearchStore from "../../../stores/searchStore";

import "react-calendar/dist/Calendar.css";

const SearchDatePage = () => {
  // const [selectedDate, setSelectedDate] = useState(getCurrentDate());
  const [dateSelected, setDateSelected] = useState(false);
  const date = useSearchStore((state) => state.date);
  const setDate = useSearchStore((state) => state.setDate);
  const setRegion = useSearchStore((state) => state.setRegion);
  const setCurrentPage = useNavigationStore((state) => state.setCurrentPage);

  useEffect(() => {
    setCurrentPage("searchDate");
    setDate(new Date()); // 날짜를 현재 날짜로 초기화
    setRegion("0"); // 지역을 기본값으로 초기화
  }, [setCurrentPage, setDate, setRegion]);

  const handleDateSelect = (date) => {
    // setSelectedDate(date);
    setDateSelected(true);
    setDate(date);
  };

  return (
    <div className="mt-6 h-96">
      <Calendar onChange={handleDateSelect} value={date} />

      <div className="mt-4 flex justify-between">
        <div></div>
        <Link to="/search/region">
          {dateSelected ? (
            <SearchOptionButton>다음</SearchOptionButton>
          ) : (
            <SearchOptionButton>건너뛰기</SearchOptionButton>
          )}
        </Link>
      </div>
    </div>
  );
};

export default SearchDatePage;
