import areaCode from "../constans/areaCode";

const HeaderNavBar = () => {
  return (
    <nav className="">
      <ul className="no-scrollbar no-scrollbar flex flex-nowrap content-center gap-4 overflow-x-auto">
        {Object.values(areaCode).map((item) => (
          <li className="whitespace-nowrap" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavBar;
