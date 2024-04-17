import Image from "next/image";
import { Inter } from "next/font/google";
import { DonationForm } from "./components/DonationForm";
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <>
      <div className="h-[535px] w-[600px] rounded bg-white shadow-[0px_16px_32px_0px_#1E2A3214]">
        <div className="flex h-32 items-center rounded-tl rounded-tr bg-salmon px-10">
          <div>
            <Image
              className="h-auto w-auto"
              src="/giving-block.svg"
              alt="Giving block"
              width={56}
              height={56}
              priority
            />
          </div>
          <div className="pl-5">
            <div className="text-[32px] font-semibold text-midnight-purple">
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
