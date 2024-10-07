import useSearchStore from "../stores/searchStore";
import areaCode from "../constans/areaCode";

const HeaderNavBar = () => {
  const setRegion = useSearchStore((state) => state.setRegion);
  const selectedRegion = useSearchStore((state) => state.region);

  const handleClick = (key) => {
    setRegion(key);
  };

  return (
    <nav className="">
      <ul className="no-scrollbar flex flex-nowrap content-center gap-4 overflow-x-auto">
        {Object.entries(areaCode).map(([key, value]) => (
          <li key={key}>
            <button
              className={`whitespace-nowrap ${
                selectedRegion === key
                  ? "text-brand-primary"
                  : "text-achromatic-black dark:text-white"
              } `}
              onClick={() => handleClick(key)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavBar;
