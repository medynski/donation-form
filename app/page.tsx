import Image from "next/image";
import { Icon, IconName } from "./components/Icon";
import { Inter, Rubik } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
const rubik = Rubik({ subsets: ["latin"], weight: ["500"] });

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-stroke">
      <header className="bg-blue-200 fixed left-0 top-0 h-20 w-full bg-white">
        <Image
          className="absolute left-10 top-6"
          src="/logo.svg"
          alt="App Logo"
          width={146}
          height={32}
          priority
        />
      </header>
      <main className="flex min-h-screen items-center justify-center bg-stroke">
        <div className="h-[535px] w-[600px] rounded bg-white shadow-[0px_16px_32px_0px_#1E2A3214]">
          <div className="flex h-32 items-center rounded-tl rounded-tr bg-salmon px-10">
            <div>
              <Image
                className=""
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
              <div className="flex justify-between text-midnight-grey">
                <div>
                  <div className="mb-1.5 text-sm font-medium">I can donate</div>
                  <div className="flex h-[60px] w-[248px] rounded-[4px] border border-solid border-stroke py-4">
                    <div className="mx-2">
                      <Icon name={IconName.Dollar} />
                    </div>

                    <input
                      className={`w-48 text-2xl font-medium text-purple-grey outline-0 ${rubik.className}`}
                      type="text"
                      value="25,000"
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-1.5 text-sm font-medium">
                    Every month until
                  </div>
                  <div className="flex h-[60px] w-[248px] justify-between rounded-[4px] border border-solid border-stroke py-4">
                    <div className="mx-2">
                      <Icon name={IconName.ChevronLeft} />
                    </div>

                    <div className="flex w-36 flex-col items-center justify-center text-2xl font-normal text-purple-grey">
                      <div
                        className={`text-base font-medium ${rubik.className}`}
                      >
                        August
                      </div>
                      <div className="text-xs font-normal">2023</div>
                    </div>

                    <div className="mx-2">
                      <Icon name={IconName.ChevronRight} />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-6 mt-8 ">
              <div className="flex items-center justify-between px-4">
                <div className="text-blue-grey-900 text-xl font-medium">
                  Total amount:
                </div>
                <div
                  className={`text-[32px] font-bold text-purple-grey ${inter.className}`}
                >
                  $200,000
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="bg-blue-grey text-blue-grey-900 rounded px-4 py-6 text-center text-xs font-normal">
                You will be sending <span className="font-bold">$25,000</span>{" "}
                every month, until{" "}
                <span className="font-bold">August 2023</span>. Thank you!
              </div>
            </section>

            <section className="p-2">
              <div className="flex justify-between">
                <div className="flex h-[52px] w-[238px] items-center justify-center rounded border border-solid border-purple-grey font-semibold text-purple-grey">
                  Cancel
                </div>
                <div className="flex h-[52px] w-[238px] items-center justify-center rounded border border-solid border-midnight-purple bg-midnight-purple font-semibold text-white">
                  Continue
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
