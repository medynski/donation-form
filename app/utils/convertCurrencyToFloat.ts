export const convertCurrencyToFloat = (currency: string): number => {
  const parts = currency.replace(/,/g, "").split(".");
  const numericString =
    parts.length === 1 ? parts[0] : parts[0] + "." + parts[1];
  return parseFloat(numericString) || 0;
};
