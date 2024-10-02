const TEMP_NAVBAR_DATA = [
  "test",
  "전체",
  "서울",
  "경기",
  "인천",
  "충북",
  "충남",
  "경북",
  "경남",
  "전북",
  "전남",
  "강원",
  "제주",
];

const HeaderNavBar = () => {
  return (
    <nav className="pb-4">
      <ul className="no-scrollbar no-scrollbar flex flex-nowrap content-center gap-4 overflow-x-auto">
        {TEMP_NAVBAR_DATA.map((item) => (
          <li className="whitespace-nowrap bg-yellow-200" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavBar;
