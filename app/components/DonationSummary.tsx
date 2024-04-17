import { FunctionComponent, PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import { formatCurrency } from "../utils/formatCurrency";
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const DonationSummary: FunctionComponent<{ amount: number }> = ({
  amount,
}) => {
  return (
    <div className="flex items-center justify-between px-4">
      <div className="text-blue-grey-900 text-xl font-medium">
        Total amount:
      </div>
      <div
        className={`text-[32px] font-bold text-purple-grey ${inter.className}`}
      >
        {formatCurrency(amount)}
      </div>
    </div>
  );
};
