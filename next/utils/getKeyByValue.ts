export function getKeyByValue(object: Record<string, any>, value: string) {
  return Object.keys(object).find((key) => object[key] === value)
}
