import { FunctionComponent, PropsWithChildren } from "react";

export const InputLabel: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="mb-1.5 text-sm font-medium text-midnight-grey">
      {children}
    </div>
  );
};
