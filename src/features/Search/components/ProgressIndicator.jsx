const ProgressIndicator = ({ progress }) => {
  return (
    // <div className="mt-20 flex w-full justify-center bg-blue-400">
    //   <ol class="flex w-full items-center">
    //     <li class="relative w-full bg-slate-300">
    //       <div class="mb-1">
    //         <h3 class="text-xs dark:text-white">날짜</h3>
    //       </div>
    // <div class="flex items-center">
    //   <div class="z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-primary ring-0 ring-white">
    //     <span class="flex h-2 w-2 rounded-full bg-brand-point"></span>
    //   </div>
    //         <div class="flex h-1 w-full bg-achromatic-light"></div>
    //       </div>
    //     </li>
    //     <li class="relative w-full bg-slate-300">
    //       <div class="mb-1">
    //         <h3 class="text-xs dark:text-white">지역</h3>
    //       </div>
    //       <div class="flex items-center">
    //         <div class="z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-primary ring-0 ring-white">
    //           <span class="flex h-2 w-2 rounded-full bg-brand-point"></span>
    //         </div>
    //         <div class="flex h-1 w-full bg-achromatic-light"></div>
    //       </div>
    //     </li>
    //     <li class="relative w-full bg-slate-300">
    //       <div class="mb-1">
    //         <h3 class="text-xs dark:text-white">키워드</h3>
    //       </div>
    //       <div class="flex items-center">
    //         <div class="z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-primary ring-0 ring-white">
    //           <span class="flex h-2 w-2 rounded-full bg-brand-point"></span>
    //         </div>
    //       </div>
    //     </li>
    //   </ol>
    // </div>

    <div className="mt-20 flex w-full justify-between">
      <div className="flex flex-col items-center">
        <div class="mb-1">
          <h3 class="text-xs dark:text-white">날짜</h3>
        </div>
        <div class="flex items-center">
          <div class="z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-primary ring-0 ring-white">
            <span class="flex h-2 w-2 rounded-full bg-brand-point"></span>
          </div>
        </div>
      </div>
      <div className="h-1 flex-grow bg-brand-primary"></div>
      {/* 첫 번째 원과 두 번째 원 사이의 선 */}
      <div className="flex flex-col items-center">
        <div class="mb-1">
          <h3 class="text-xs dark:text-white">지역</h3>
        </div>
        <div class="flex items-center">
          <div class="z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-primary ring-0 ring-white">
            <span class="flex h-2 w-2 rounded-full bg-brand-point"></span>
          </div>
        </div>
      </div>
      {/* 첫 번째 원과 두 번째 원 사이의 선 */}
      <div className="h-1 flex-grow bg-brand-primary"></div>
      <div className="flex flex-col items-center">
        <div class="mb-1">
          <h3 class="text-xs dark:text-white">키워드</h3>
        </div>
        <div class="flex items-center">
          <div class="z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-primary ring-0 ring-white">
            <span class="flex h-2 w-2 rounded-full bg-brand-point"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
