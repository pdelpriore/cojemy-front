export const generateZoom = (selectedAddress) => {
  return selectedAddress.address &&
    selectedAddress.address.houseNumber &&
    selectedAddress.address.street &&
    selectedAddress.address.city &&
    selectedAddress.address.country
    ? 17
    : selectedAddress.address &&
      !selectedAddress.address.houseNumber &&
      selectedAddress.address.street &&
      selectedAddress.address.city &&
      selectedAddress.address.country
    ? 15
    : selectedAddress.address &&
      !selectedAddress.address.houseNumber &&
      !selectedAddress.address.street &&
      selectedAddress.address.city &&
      selectedAddress.address.country
    ? 10
    : selectedAddress.address &&
      !selectedAddress.address.houseNumber &&
      !selectedAddress.address.street &&
      !selectedAddress.address.city &&
      selectedAddress.address.country
    ? 4
    : 10;
};
