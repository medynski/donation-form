import dayjs from "dayjs";

export const formatDate = (periodInMonths: number) => {
  const timeDiff = dayjs().add(periodInMonths, "month");

  return {
    month: timeDiff.format("MMMM"),
    year: timeDiff.format("YYYY"),
  };
};
