import Image from "next/image";
import { Inter } from "next/font/google";
import { DonationForm } from "./components/DonationForm";
import { Icon, IconName } from "./components/Icon";
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <>
      <div className="absolute left-0 top-0 h-full w-full overflow-auto rounded bg-white shadow-[0px_16px_32px_0px_#1E2A3214] tb:relative tb:h-[535px] tb:w-[600px] tb:overflow-hidden">
        <div className="flex h-[193px] flex-col items-center justify-center rounded-tl rounded-tr bg-salmon px-10 tb:h-32 tb:flex-row tb:justify-start">
          <div className="absolute right-6 top-4 cursor-pointer rounded p-2 active:bg-salmon-100 tb:hidden">
            <Icon name={IconName.Close} />
          </div>
          <div className="mb-4 tb:mb-0">
            <Image
              src="/giving-block.svg"
              alt="Giving block"
              width="0"
              height="0"
              sizes="100vw"
              className="h-auto w-auto"
              priority
            />
          </div>
          <div className="pl-5 text-center tb:text-left">
            <div className="text-2xl font-semibold text-midnight-purple tb:text-[32px]">
              The giving block
            </div>
            <div
              className={`text-base font-normal text-purple-grey ${inter.className}`}
            >
              Set up your donation goal!
            </div>
          </div>
        </div>
        <div className="px-10 py-8">
          <DonationForm />
        </div>
      </div>
    </>
  );
}
