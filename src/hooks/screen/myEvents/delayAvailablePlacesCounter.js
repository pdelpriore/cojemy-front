export const delayAvailablePlacesCounter = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
