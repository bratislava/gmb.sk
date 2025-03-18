export function isToday(datetime: { dateFrom: string; dateTo: string }) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const dateFrom = new Date(datetime?.dateFrom)
  dateFrom.setHours(0, 0, 0, 0)
  if (datetime?.dateTo) {
    const dateTo = new Date(datetime?.dateTo)
    dateTo.setHours(23, 59, 59)
    return dateFrom.getTime() <= today.getTime() && dateTo.getTime() >= today.getTime()
  }
  return today.getTime() === dateFrom.getTime()
}
