export const formatTimeString = (time: string, locale: string) => {
  const [hours, minutes] = time.split(':') // seconds are ignored
  const hoursInt = parseInt(hours, 10)

  if (locale === 'en') {
    return hoursInt > 12 ? `${hoursInt - 12}:${minutes} pm` : `${hoursInt}:${minutes} am`
  }

  return `${hours}.${minutes}`
}
