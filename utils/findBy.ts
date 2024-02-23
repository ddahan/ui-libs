// Find an item in `items` array, given a specific key/value.
export const findBy = <T>(key: keyof T, value: T[keyof T], items: T[]): T | undefined =>
  items.find((obj) => obj[key] === value)
