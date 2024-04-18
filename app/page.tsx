import Image from "next/image";
import { Inter } from "next/font/google";
import { DonationForm } from "./components/DonationForm";
import { Icon, IconName } from "./components/Icon";
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <>
      <div className="tb:relative tb:h-[535px] tb:w-[600px] absolute left-0 top-0 h-full w-full rounded bg-white shadow-[0px_16px_32px_0px_#1E2A3214]">
        <div className="tb:h-32 tb:flex-row tb:justify-start flex h-[193px] flex-col items-center justify-center rounded-tl rounded-tr bg-salmon px-10">
          <div className="tb:hidden active:bg-salmon-100 absolute right-6 top-4 cursor-pointer rounded p-2">
            <Icon name={IconName.Close} />
          </div>
          <div className="tb:mb-0 mb-4">
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
          <div className="tb:text-left pl-5 text-center">
            <div className="tb:text-[32px] text-2xl font-semibold text-midnight-purple">
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
