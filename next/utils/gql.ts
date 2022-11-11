import { GraphQLClient } from 'graphql-request'
import getConfig from 'next/config'

import { getSdk } from '../graphql'
import { isServer } from './envDetection'

const { serverRuntimeConfig } = getConfig()

export const buildUrl = (path: string): string =>
  `${
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    serverRuntimeConfig?.strapiUrl ? `${serverRuntimeConfig.strapiUrl}` : isServer() ? '' : window.location.origin
  }${path}`

const graphQLUrl = buildUrl('/graphql')

if (isServer()) {
  // eslint-disable-next-line no-console
  console.log('GraphQL URL:', graphQLUrl)
}

const gql = new GraphQLClient(graphQLUrl)

export const client = getSdk(gql)
