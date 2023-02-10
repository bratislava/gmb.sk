export const isProd = () => {
  return process.env.NEXT_PUBLIC_IS_PROD === 'true'
}
