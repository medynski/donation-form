import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "./components/Button";
import { Banner } from "./components/Banner";
import { DonationSummary } from "./components/DonationSummary";
import { PeriodInput } from "./components/PeriodInput";
import { CurrencyInput } from "./components/CurrencyInput";
import { InputLabel } from "./components/InputLabel";
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
          <section>
            <div className="flex justify-between">
              <div>
                <InputLabel>I can donate</InputLabel>
                <CurrencyInput />
              </div>
              <div>
                <InputLabel>Every month until</InputLabel>
                <PeriodInput />
              </div>
            </div>
          </section>

          <section className="mb-6 mt-8 ">
            <DonationSummary amount={200000} />
          </section>

          <section className="mb-8">
            <Banner>
              You will be sending <span className="font-bold">$25,000</span>{" "}
              every month, until <span className="font-bold">August 2023</span>.
              Thank you!
            </Banner>
          </section>

          <section className="p-2">
            <div className="flex justify-between">
              <Button variant="secondary">Cancel</Button>
              <Button variant="primary">Continue</Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
