"use client";

import { Button } from "./Button";
import { Banner } from "./Banner";
import { DonationSummary } from "./DonationSummary";
import { PeriodInput } from "./PeriodInput";
import { CurrencyInput } from "./CurrencyInput";
import { InputLabel } from "./InputLabel";
import { FunctionComponent, useMemo, useState } from "react";
import { formatCurrency } from "./../utils/formatCurrency";
import { formatDate } from "../utils/formatDate";

export const DonationForm: FunctionComponent = () => {
  const [amount, setAmount] = useState(25000);
  const [period, setPeriod] = useState(1);

  const summaryAmount = useMemo(() => {
    return amount * period;
  }, [amount, period]);

  const displayDate = useMemo(() => formatDate(period), [period]);

  return (
    <>
      <section>
        <div className="flex justify-between">
          <div>
            <InputLabel>I can donate</InputLabel>
            <CurrencyInput />
          </div>
          <div>
            <InputLabel>Every month until</InputLabel>
            <PeriodInput period={period} onChange={setPeriod} />
          </div>
        </div>
      </section>

      <section className="mb-6 mt-8">
        <DonationSummary amount={summaryAmount} />
      </section>

      <section className="mb-8">
        <Banner>
          You will be sending{" "}
          <span className="font-bold">{formatCurrency(amount)}</span> every
          month, until{" "}
          <span className="font-bold">
            {displayDate.month} {displayDate.year}
          </span>
          . Thank you!
        </Banner>
      </section>

      <section className="p-2">
        <div className="flex justify-between">
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Continue</Button>
        </div>
      </section>
    </>
  );
};
