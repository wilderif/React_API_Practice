const FestivalIndicator = ({ children }) => {
  return (
    <div className="flex h-6 w-16 items-center justify-center rounded-lg bg-brand-primary">
      <p className="text-sm text-white">{children}</p>
    </div>
  );
};

export default FestivalIndicator;
