export const getNextUrl = () => {
  if (!process.env.NEXT_PUBLIC_NEXT_URL) {
    throw new Error('NEXT_PUBLIC_NEXT_URL is not set')
  }
  return process.env.NEXT_PUBLIC_NEXT_URL
}
