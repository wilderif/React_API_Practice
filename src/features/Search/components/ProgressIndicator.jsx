const ProgressIndicator = ({ progress }) => {
  return (
    <div className="relative mt-20 flex w-full justify-between">
      <div className="flex flex-col items-center">
        <div className="mb-1">
          <h3 className="text-sm dark:text-white">날짜</h3>
        </div>
        <div className="flex items-center">
          <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary ring-0 ring-white">
            <span className="flex h-3 w-3 rounded-full bg-brand-point"></span>
          </div>
        </div>
      </div>
      <div className="absolute top-8 h-1.5 w-full bg-brand-primary"></div>
      <div className="flex flex-col items-center">
        <div className="mb-1">
          <h3 className="text-sm dark:text-white">지역</h3>
        </div>
        <div className="flex items-center">
          <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary ring-0 ring-white">
            <span className="flex h-3 w-3 rounded-full bg-brand-point"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
