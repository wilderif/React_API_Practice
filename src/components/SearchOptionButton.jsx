const SearchOptionButton = ({ background = "bg-brand-primary", children }) => {
  return (
    <button
      className={`flex h-6 w-16 items-center justify-center rounded-lg ${background}`}
    >
      <p className="text-sm text-white">{children}</p>
    </button>
  );
};

export default SearchOptionButton;
