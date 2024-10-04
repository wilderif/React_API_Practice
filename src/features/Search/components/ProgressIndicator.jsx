const ProgressIndicator = ({ progress }) => {
  return (
    <div className="mt-20 flex w-full justify-center bg-blue-400">
      <ol class="flex w-full items-center">
        <li class="relative w-full bg-slate-300">
          <div class="mb-1">
            <h3 class="text-xs dark:text-white">날짜</h3>
          </div>
          <div class="flex items-center">
            <div class="z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-primary ring-0 ring-white">
              <span class="flex h-2 w-2 rounded-full bg-brand-point"></span>
            </div>
            <div class="flex h-0.5 w-full bg-achromatic-light"></div>
          </div>
        </li>
        <li class="relative w-full">
          <div class="flex items-center">
            <div class="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-200 ring-0 ring-white">
              <span class="flex h-3 w-3 rounded-full bg-blue-600"></span>
            </div>
            <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3">
            <h3 class="font-medium text-gray-900 dark:text-white">지역</h3>
          </div>
        </li>
        <li class="relative w-full">
          <div class="flex items-center">
            <div class="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-200 ring-0 ring-white">
              <span class="flex h-3 w-3 rounded-full bg-blue-600"></span>
            </div>
          </div>
          <div class="mt-3">
            <h3 class="font-medium text-gray-900 dark:text-white">키워드</h3>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default ProgressIndicator;
