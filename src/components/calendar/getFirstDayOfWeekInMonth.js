export const getFirstDayOfWeekInMonth = (month, year) =>
  new Date(year, month, 1).getDay();
