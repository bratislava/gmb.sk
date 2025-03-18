function getDaysLeft(dateString: string) {
  const MS_PER_DAY = 1000 * 60 * 60 * 24

  const date = new Date(dateString)
  const now = new Date()

  // Discard the time and time-zone information.
  const dateUtc = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  const nowUtc = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())

  return Math.floor((dateUtc - nowUtc) / MS_PER_DAY)
}

export default getDaysLeft
