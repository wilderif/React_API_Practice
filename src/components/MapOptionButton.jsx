const MapOptionButton = ({ option, onClick }) => {
  return (
    <button className="flex h-6 w-14 items-center justify-center rounded-lg bg-white">
      <p className="text-sm text-black">{option}</p>
    </button>
  );
};

export default MapOptionButton;
