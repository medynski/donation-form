import { FunctionComponent, useEffect, useMemo } from "react";
import { Icon, IconName } from "./Icon";
import { Rubik } from "next/font/google";
import dayjs from "dayjs";
import { IconButton } from "./IconButton";

const rubik = Rubik({ subsets: ["latin"], weight: ["500"] });

export const PeriodInput: FunctionComponent<{
  period: number;
  onChange: (value: number) => void;
}> = ({ period, onChange }) => {
  const displayDate = useMemo(() => {
    const timeDiff = dayjs().add(period, "month");

    return {
      month: timeDiff.format("MMMM"),
      year: timeDiff.format("YYYY"),
    };
  }, [period]);

  const addMonth = () => {
    onChange(period + 1);
  };

  const subtractMonth = () => {
    onChange(period - 1);
  };

  return (
    <div className="flex h-[60px] w-[248px] justify-between rounded-[4px] border border-solid border-stroke py-4">
      <div className="mx-2">
        <IconButton
          icon={IconName.ChevronLeft}
          onClick={() => subtractMonth()}
          disabled={period <= 1}
        />
      </div>

      <div className="flex w-36 flex-col items-center justify-center text-2xl font-normal text-purple-grey">
        <div className={`text-base font-medium ${rubik.className}`}>
          {displayDate.month}
        </div>
        <div className="text-xs font-normal">{displayDate.year}</div>
      </div>

      <div className="mx-2">
        <IconButton icon={IconName.ChevronRight} onClick={addMonth} />
      </div>
    </div>
  );
};
