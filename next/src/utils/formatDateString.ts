export const formatDateString = (date: string, locale: string, format?: 'short') => {
  const localeInner = locale === 'en' ? 'en-gb' : locale

  if (format === 'short') {
    return new Date(date).toLocaleDateString(localeInner, { month: 'numeric', day: 'numeric' })
  }

  return new Date(date).toLocaleDateString(localeInner)
}
