import Image from "next/image";
import { FunctionComponent } from "react";

export enum IconName {
  ArrowDropDown = "arrow_drop_down",
  ChevronLeft = "chevron_left",
  ChevronRight = "chevron_right",
  Close = "close",
  Bitcoin = "currency/bitcoin",
  Dollar = "currency/dollar",
  Euro = "currency/euro",
  Pound = "currency/pound",
  Yen = "currency/yen",
}

export const Icon: FunctionComponent<{ name: IconName; size?: number }> = ({
  name,
  size = 24,
}) => {
  return (
    <Image
      src={`/icons/${name}.svg`}
      alt="Icon"
      width={size}
      height={size}
      priority
    />
  );
};
