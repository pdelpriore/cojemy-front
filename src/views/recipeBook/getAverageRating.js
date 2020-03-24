export const getAverageRating = data => {
  const rates = data.map(item => item.rate.value);
  const average =
    rates.length > 0 && rates.reduce((a, b) => a + b) / rates.length;
  const starPercentageRounded = `${Math.round(((average / 5) * 100) / 10) *
    10}%`;

  return starPercentageRounded;
};
