export function getTodaysDate() {
  return new Date().toISOString().slice(0, 10)
}
