// like `any` in Python
export const any = (iterable: any[]): boolean => {
  return iterable.some(Boolean)
}

// like `all` in Python
export const all = (iterable: any[]): boolean => {
  return iterable.every(Boolean)
}
