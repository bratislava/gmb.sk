export const formatTimeString = (time: string) => {
  const timeInner = time.slice(0, 5)
  const [hours, minutes] = timeInner.split(':')

  const hoursString = hours[0] === '0' ? hours[1] : hours
  const minutesString = minutes === '00' ? '' : `.${minutes}`

  return `${hoursString}${minutesString} h`
}
