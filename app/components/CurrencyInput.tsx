import { ChangeEvent, FunctionComponent } from "react";
import { Icon, IconName } from "./Icon";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"], weight: ["500"] });

export const CurrencyInput: FunctionComponent<{
  value: string;
  onValueChange: (value: string) => void;
}> = ({ value, onValueChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/[^\d.]/g, "");
    const parts = inputValue.split(".");
    // format the integer part with commas
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // restrict the decimal part to a maximum of 2 digits
    if (parts[1] && parts[1].length > 2) {
      parts[1] = parts[1].slice(0, 2);
    }
    onValueChange(parts.join("."));
  };

  return (
    <div className="input-host flex h-[60px] w-full rounded-[4px] border border-solid border-stroke py-4 has-[input:focus]:!border-midnight-purple">
      <div className="mx-2">
        <Icon name={IconName.Dollar} />
      </div>

      <input
        className={`w-10/12 text-2xl font-medium text-purple-grey placeholder:text-purple-grey-100 focus:outline-0 tb:w-48 ${rubik.className}`}
        placeholder="0.00"
        type="text"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
