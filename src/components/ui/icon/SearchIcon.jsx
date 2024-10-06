import { MdOutlineSearch } from "react-icons/md";
import useNavigationStore from "../../../stores/navigationStore";

const SearchIcon = () => {
  const currentPage = useNavigationStore((state) => state.currentPage);

  return (
    <MdOutlineSearch
      className={`h-6 w-6 ${
        currentPage === "search"
          ? "text-brand-primary"
          : "text-achromatic-medium"
      }`}
    />
  );
};

export default SearchIcon;
