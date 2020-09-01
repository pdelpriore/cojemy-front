export const getNewSelectedDate = (month, year) => {
  const newSelectedDate = new Date(year, month, 1);
  return (
    newSelectedDate && {
      newDate: newSelectedDate,
      firstDay: newSelectedDate.getDay(),
      selectedMonth: newSelectedDate.getMonth(),
      selectedYear: newSelectedDate.getFullYear(),
    }
  );
};
