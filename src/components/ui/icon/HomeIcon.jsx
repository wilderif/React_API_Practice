import { MdOutlineHome } from "react-icons/md";
import useNavigationStore from "../../../stores/navigationStore";

const HomeIcon = () => {
  const currentPage = useNavigationStore((state) => state.currentPage);

  return (
    <MdOutlineHome
      className={`h-6 w-6 ${
        currentPage === "home" ? "text-brand-primary" : "text-achromatic-medium"
      }`}
    />
  );
};

export default HomeIcon;
