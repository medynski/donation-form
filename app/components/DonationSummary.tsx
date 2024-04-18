import { FunctionComponent } from "react";
import { Inter } from "next/font/google";
import { formatCurrency } from "../utils/formatCurrency";
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const DonationSummary: FunctionComponent<{ amount: number }> = ({
  amount,
}) => {
  return (
    <div className="flex items-center justify-between px-4">
      <div className="text-blue-grey-900 tb:text-xl text-base font-medium">
        Total amount:
      </div>
      <div
        className={`tb:text-[32px] max-w-72 truncate text-2xl font-bold text-purple-grey ${inter.className}`}
      >
        {formatCurrency(amount)}
      </div>
    </div>
  );
};
