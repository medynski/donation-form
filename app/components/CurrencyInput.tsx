import { FunctionComponent } from "react";
import { Icon, IconName } from "./Icon";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"], weight: ["500"] });

export const CurrencyInput: FunctionComponent = () => {
  return (
    <div className="flex h-[60px] w-[248px] rounded-[4px] border border-solid border-stroke py-4">
      <div className="mx-2">
        <Icon name={IconName.Dollar} />
      </div>

      <input
        className={`w-48 text-2xl font-medium text-purple-grey outline-0 ${rubik.className}`}
        type="text"
        defaultValue="25,000"
      />
    </div>
  );
};
