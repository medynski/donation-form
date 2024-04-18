import { FunctionComponent, PropsWithChildren, useMemo } from "react";

export const Button: FunctionComponent<
  PropsWithChildren<{ variant: "primary" | "secondary" }>
> = ({ children, variant }) => {
  const additionalClasses = useMemo(() => {
    let classes = "";
    switch (variant) {
      case "primary":
        classes =
          "border-midnight-purple bg-midnight-purple text-white hover:bg-midnight-purple-500 hover:border-midnight-purple-500 active:bg-midnight-purple-800 active:border-midnight-purple-800";
        break;

      case "secondary":
        classes =
          "border-purple-grey text-purple-grey hover:bg-purple-grey-500 active:bg-purple-grey-800";
        break;
    }

    return classes;
  }, [variant]);

  return (
    <div
      className={`flex h-[52px] w-full select-none items-center justify-center rounded border border-solid font-semibold hover:cursor-pointer ${additionalClasses}`}
    >
      {children}
    </div>
  );
};
