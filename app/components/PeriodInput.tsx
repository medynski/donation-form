import { FunctionComponent } from "react";
import { Icon, IconName } from "./Icon";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"], weight: ["500"] });

export const PeriodInput: FunctionComponent = () => {
  return (
    <div className="flex h-[60px] w-[248px] justify-between rounded-[4px] border border-solid border-stroke py-4">
      <div className="mx-2">
        <Icon name={IconName.ChevronLeft} />
      </div>

      <div className="flex w-36 flex-col items-center justify-center text-2xl font-normal text-purple-grey">
        <div className={`text-base font-medium ${rubik.className}`}>August</div>
        <div className="text-xs font-normal">2023</div>
      </div>

      <div className="mx-2">
        <Icon name={IconName.ChevronRight} />
      </div>
    </div>
  );
};
