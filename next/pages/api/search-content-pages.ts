import { withSentry } from '@sentry/nextjs'
import type { NextApiRequest, NextApiResponse } from 'next'

import { buildUrl } from '../../utils/gql'
import { isDefined } from '../../utils/isDefined'

const contentPageEndpoint = buildUrl('/api/content-pages')

const searchContentPages = async (req: NextApiRequest, res: NextApiResponse) => {
  const searchTerm = req.query.searchTerm as string
  const locale = (req.query?.locale ?? 'sk') as string

  if (!isDefined(searchTerm)) {
    res.status(200).json([])
  }

  const query = new URLSearchParams({
    _q: searchTerm,
    _locale: locale,
  })
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const response = await fetch(`${contentPageEndpoint}?${query}`)
  const searchResults = await response.json()

  res.status(200).json(searchResults)
}

export default withSentry(searchContentPages)
