import { stepsList } from "@/constant";
import { PaginationContainerPropType } from "@/types";
import { Children } from "react";
import PagesHeading from "./PagesHeading";
import ProgressBar from "./ProgressBar";


const PaginationContainer = ({
  children,
  currentPage,
}: PaginationContainerPropType) => {
  const pagesList = Children.toArray(children);
  const progress = ((currentPage + 1) / 3) * 100;

  return (
    <div className="flex-1 w-full bg-gray-50 flex flex-col items-center justify-start rounded-md">
      <ProgressBar
        currentPage={currentPage}
        stepsList={stepsList}
        progress={progress}
      />
      <div className="flex-1 w-full flex flex-col items-center justify-start relative">
        <div className="max-w-[45rem] px-4 flex-1 w-full mx-auto">
          <PagesHeading currentPage={currentPage} />
          <div className="w-full mt-6 mb-20">{pagesList[currentPage]}</div>
        </div>
      </div>
    </div>
  );
};

export default PaginationContainer;
