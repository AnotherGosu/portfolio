export const formatPrice = (
  price: string | number | null | undefined,
  currency = "USD",
): string => {
  const numberPrice = Number(price);

  if (Number.isNaN(numberPrice)) {
    return "";
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  });

  return formatter.format(numberPrice);
};
