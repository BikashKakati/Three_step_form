import { stepsList } from "@/constant";

const PagesHeading = ({ currentPage }: { currentPage: number }) => {
  return (
    <div className="w-full flex flex-col items-center justify-start mt-7">
      <p className="text-lg text-slate-500">
        Step {stepsList[currentPage].step}
      </p>
      <h3 className="text-3xl text-slate-700/80 mb-2 font-medium">
        {stepsList[currentPage].title}
      </h3>
      <p className="text-center text-foreground/60 font-semibold max-w-[26rem]">
        {stepsList[currentPage].description}
      </p>
    </div>
  );
};

export default PagesHeading;
