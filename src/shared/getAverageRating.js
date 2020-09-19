export const getAverageRating = (data) => {
  const rates = data.map((item) => item.rate && item.rate.value);
  const average =
    rates.length > 0 &&
    (rates.reduce((a, b) => a + b) / rates.length).toFixed(2);

  return `${((average * 100) / 5).toFixed()}%`;
};
