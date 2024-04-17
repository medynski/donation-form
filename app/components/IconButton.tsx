import { FunctionComponent } from "react";
import { Icon, IconName } from "./Icon";

export const IconButton: FunctionComponent<{
  icon: IconName;
  onClick?: () => void;
  disabled?: boolean;
}> = ({ icon, onClick = () => null, disabled = false }) => {
  return (
    <div
      className={`hover:bg-purple-grey-200 active:purple-grey-300 flex h-6 w-6 items-center justify-center rounded hover:cursor-pointer ${disabled ? "!cursor-not-allowed" : ""}`}
      onClick={() => !disabled && onClick()}
    >
      <Icon name={icon} />
    </div>
  );
};
