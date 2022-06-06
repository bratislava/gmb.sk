import moment from 'moment'

function getDaysLeft(date: string) {
  return moment(date).diff(moment(), 'days')
}

export default getDaysLeft
