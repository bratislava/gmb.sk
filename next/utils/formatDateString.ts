export const formatDateString = (date: string, locale: string) =>
  new Date(date).toLocaleDateString(locale === 'en' ? 'en-gb' : locale)
