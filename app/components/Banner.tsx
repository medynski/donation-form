import { FunctionComponent, PropsWithChildren } from "react";

export const Banner: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-blue-grey text-blue-grey-900 rounded px-4 py-6 text-center text-xs font-normal">
      {children}
    </div>
  );
};
