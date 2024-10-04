const SearchOptionButton = ({ option, onClick }) => {
  return (
    <button className="flex h-6 w-16 items-center justify-center rounded-lg bg-brand-primary">
      <p className="text-sm text-white">{option}</p>
    </button>
  );
};

export default SearchOptionButton;
