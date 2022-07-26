import type { NextApiRequest, NextApiResponse } from 'next'

import { client } from '../../utils/gql'

export default async function preview(req: NextApiRequest, res: NextApiResponse) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (req.query.secret !== process.env.STRAPI_PREVIEW_SECRET || !req.query.slug) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Fetch the headless CMS to check if the provided `slug` exists
  const contentPage = await client.PreviewContentPageBySlug({ slug: req.query.slug as string })

  // If the slug doesn't exist prevent preview mode from being enabled
  if (!contentPage) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched contentPage
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  const path = contentPage.contentPageBySlug?.data?.attributes?.locale === 'sk' ? 'detail' : 'en/detail'
  res.writeHead(307, { Location: `/${path}/${contentPage.contentPageBySlug?.data?.attributes?.slug}` })
  res.end()
}
