import { RiHeartFill, RiHeartLine } from "react-icons/ri";

const HeartFillIcon = ({ active }) => {
  return (
    <div className="relative h-6 w-6">
      <RiHeartFill
        className={`absolute h-6 w-6 ${
          active ? "text-brand-point" : "text-achromatic-medium opacity-50"
        } `}
      />
      {!active && <RiHeartLine className="absolute h-6 w-6 text-white" />}
    </div>
  );
};

export default HeartFillIcon;
