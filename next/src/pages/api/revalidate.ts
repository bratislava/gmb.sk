import type { NextApiRequest, NextApiResponse } from 'next'

type Response = { revalidated: boolean } | { message: string } | string
type RequestPayload = { model: string; entry: { slug: string } }

const handler = async (req: NextApiRequest, res: NextApiResponse<Response>) => {
  // Check for secret to confirm this is a valid request
  console.log('api/revalidate Revalidate webhook called')

  if (req.query.secret !== process.env.REVALIDATE_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  try {
    const payload = req.body as RequestPayload

    if (payload?.model === 'content-page') {
      const contentPageUrl = `/detail/${payload?.entry?.slug}`
      const ticketsPageUrl = `/vstupenky/${payload?.entry?.slug}`

      await Promise.all([res.revalidate(contentPageUrl), res.revalidate(ticketsPageUrl)])
    }

    if (payload?.model === 'main-page') {
      console.log('api/revalidate:', `/${payload?.entry?.slug}`)
      await res.revalidate(`/${payload?.entry?.slug}`)
    }

    /** Always revalidate index */
    console.log('api/revalidate:', `homepage`)
    await res.revalidate('/')

    return res.json({ revalidated: true })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('api/revalidate Error while revalidating ==>', error)

    return res.status(500).send('Error revalidating')
  }
}

export default handler
