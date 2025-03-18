import { GraphQLClient } from 'graphql-request'
import getConfig from 'next/config'

import { getSdk } from '@/src/services/graphql/index'
import { isServer } from '@/src/utils/envDetection'

const { serverRuntimeConfig } = getConfig()

// URL becomes full url to strapi on server, but just /graphql (for proxy) on client
const protocol =
  serverRuntimeConfig?.strapiUrl &&
  (serverRuntimeConfig?.strapiUrl.startsWith('http://') ||
    serverRuntimeConfig?.strapiUrl.startsWith('https://'))
    ? ''
    : 'http://'

/* eslint-disable @typescript-eslint/restrict-template-expressions */
export const buildUrl = (path: string): string =>
  `${
    serverRuntimeConfig?.strapiUrl
      ? `${protocol}${serverRuntimeConfig.strapiUrl}`
      : isServer()
      ? ''
      : window.location.origin
  }${path}`
/* eslint-enable @typescript-eslint/restrict-template-expressions */

const graphQLUrl = buildUrl('/graphql')

if (isServer()) {
  // eslint-disable-next-line no-console
  console.log('GraphQL URL:', graphQLUrl)
}

const gql = new GraphQLClient(graphQLUrl)

export const client = getSdk(gql)
