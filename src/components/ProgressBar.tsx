import { StepListType } from "@/types";

const ProgressBar = ({
  progress,
  currentPage,
  stepsList,
}: {
  progress: number;
  currentPage: number;
  stepsList: StepListType[];
}) => {
  return (
    <div className="w-full h-[4rem] grid grid-cols-3 items-center bg-gray-200 relative overflow-hidden rounded-t-md">
      <div
        className={`h-full bg-gradient-blue absolute left-0 top-0 z-0 rounded-r-full ${currentPage === 2 && "rounded-tr-md rounded-br-none"}`}
        style={{ width: `${progress}%` }}
      ></div>
      {stepsList.map((stepItems) => (
        <div className="flex items-center justify-center gap-2 z-10 text-sm md:text-base" key={stepItems.step}>
          <div
            className={`w-5 h-5 md:w-7 md:h-7 text-center rounded-full bg-zinc-400 ${
              stepItems.step <= currentPage + 1 && "!bg-white"
            }`}
          >
            <span
              className={`text-gray-200  ${
                stepItems.step <= currentPage + 1 && "!text-blue-500"
              }`}
            >
              {stepItems.step}
            </span>
          </div>
          <p
            className={`text-center md:text-lg text-zinc-400 leading-none text-pretty ${
              stepItems.step <= currentPage + 1 && "!text-white"
            }`}
          >
            {stepItems.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
