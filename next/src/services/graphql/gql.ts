import { getSdk } from '@/src/services/graphql'
import { GraphQLClient } from 'graphql-request'

const gql = new GraphQLClient(`${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`)

export const client = getSdk(gql)
