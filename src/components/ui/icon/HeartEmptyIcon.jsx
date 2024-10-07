import { RiHeartLine } from "react-icons/ri";
import useNavigationStore from "../../../stores/navigationStore";

const HeartEmptyIcon = () => {
  const currentPage = useNavigationStore((state) => state.currentPage);
  return (
    <RiHeartLine
      className={`h-6 w-6 ${
        currentPage === "wishList"
          ? "text-brand-primary"
          : "text-achromatic-medium dark:text-white"
      }`}
    />
  );
};

export default HeartEmptyIcon;
