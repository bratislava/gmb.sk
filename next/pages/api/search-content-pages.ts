import type { NextApiRequest, NextApiResponse } from 'next'

import { buildUrl } from '../../utils/gql'
import { isDefined } from '../../utils/isDefined'

const contentPageEndpoint = buildUrl('/content-pages')

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const searchTerm = req.query.searchTerm as string
  const locale = (req.query?.locale ?? 'sk') as string

  if (!isDefined(searchTerm)) {
    res.status(200).json([])
  }

  const query = new URLSearchParams({
    _q: searchTerm,
    _locale: locale,
  })
  const response = await fetch(`${contentPageEndpoint}?${query}`)
  const searchResults = await response.json()

  res.status(200).json(searchResults)
}
