export const formatCurrency = (amount: number) => {
  const hasDecimals = amount % 1 !== 0;
  const decimalPlaces = hasDecimals ? 2 : 0;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(amount);
};
