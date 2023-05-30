// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getKeyByValue(object: Record<string, any>, value: string) {
  return Object.keys(object).find((key) => object[key] === value)
}
