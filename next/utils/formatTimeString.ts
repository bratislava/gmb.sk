export const formatTimeString = (time: string) => {
  time = time.slice(0, 5);
  let [hours, minutes] = time.split(':');
  hours[0] === '0' && (hours = hours[1]);
  return minutes === '00' ? `${hours} h` : `${hours}.${minutes} h`;
};
