export const currencyFormater = (amount) => {
  const formatado = Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  });

  return formatado.format(amount);
};
