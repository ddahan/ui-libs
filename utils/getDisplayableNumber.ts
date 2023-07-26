const getDisplayableNumber = (number: number): string =>
  // round to the first decimal if the number is higher than 1000
  number >= 1000 ? `${Math.round((number / 1000) * 10) / 10}k` : `${number}`;

export default getDisplayableNumber;
