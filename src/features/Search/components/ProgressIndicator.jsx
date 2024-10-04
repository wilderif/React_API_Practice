const ProgressIndicator = ({ progress }) => {
  return (
    <div className="">
      <ol class="flex items-center">
        <li class="relative mb-6 w-full">
          <div class="flex items-center">
            <div class="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-200 ring-0 ring-white sm:ring-8 dark:bg-blue-900 dark:ring-gray-900">
              <span class="flex h-3 w-3 rounded-full bg-blue-600"></span>
            </div>
            <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3">
            <h3 class="font-medium text-gray-900 dark:text-white">Step 1</h3>
          </div>
        </li>
        <li class="relative mb-6 w-full">
          <div class="flex items-center">
            <div class="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-200 ring-0 ring-white sm:ring-8 dark:bg-blue-900 dark:ring-gray-900">
              <span class="flex h-3 w-3 rounded-full bg-blue-600"></span>
            </div>
            <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3">
            <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
          </div>
        </li>
        <li class="relative mb-6 w-full">
          <div class="flex items-center">
            <div class="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-200 ring-0 ring-white sm:ring-8 dark:bg-blue-900 dark:ring-gray-900">
              <span class="flex h-3 w-3 rounded-full bg-blue-600"></span>
            </div>
            <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div class="mt-3">
            <h3 class="font-medium text-gray-900 dark:text-white">Step 2</h3>
          </div>
        </li>
        <li class="relative mb-6 w-full">
          <div class="flex items-center">
            <div class="z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-200 ring-0 ring-white sm:ring-8 dark:bg-gray-700 dark:ring-gray-900">
              <span class="flex h-3 w-3 rounded-full bg-gray-900 dark:bg-gray-300"></span>
            </div>
          </div>
          <div class="mt-3">
            <h3 class="font-medium text-gray-900 dark:text-white">Step 3</h3>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default ProgressIndicator;
