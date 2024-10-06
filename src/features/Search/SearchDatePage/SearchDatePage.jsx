import { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import useNavigationStore from "../../../stores/navigationStore";
import useSearchStore from "../../../stores/searchStore";
import SearchOptionButton from "../../../components/SearchOptionButton";
import "react-calendar/dist/Calendar.css";

const SearchDatePage = () => {
  // const [selectedDate, setSelectedDate] = useState(getCurrentDate());
  const date = useSearchStore((state) => state.date);
  const setDate = useSearchStore((state) => state.setDate);
  const setCurrentPage = useNavigationStore((state) => state.setCurrentPage);

  setCurrentPage("searchDate");

  const handleDateSelect = (date) => {
    // setSelectedDate(date);
    setDate(date);
  };

  return (
    <div className="mt-6">
      <Calendar onChange={setDate} value={date} />

      <div className="mt-4 flex justify-between">
        <div></div>
        <Link to="/search/region">
          <SearchOptionButton>건너뛰기</SearchOptionButton>
        </Link>
      </div>
    </div>
  );
};

export default SearchDatePage;
