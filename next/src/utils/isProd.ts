export const isProd = () => {
  return process.env.NEXT_PUBLIC_DEPLOYMENT === 'prod'
}
