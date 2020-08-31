export const getDaysInMonth = (month, year) =>
  new Date(year, month, 0).getDate();
