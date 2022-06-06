import { GraphQLClient } from 'graphql-request';
import { getSdk } from '@bratislava/strapi-sdk-city-gallery';
import getConfig from 'next/config';
const { serverRuntimeConfig } = getConfig();
import isServer from './isServer';

// URL becomes full url to strapi on server, but just /graphql (for proxy) on client
const protocol =
  serverRuntimeConfig?.strapiUrl &&
  (serverRuntimeConfig?.strapiUrl.startsWith('http://') ||
    serverRuntimeConfig?.strapiUrl.startsWith('https://'))
    ? ''
    : 'http://';

export const buildUrl = (path: string): string =>
  `${
    serverRuntimeConfig?.strapiUrl
      ? `${protocol}${serverRuntimeConfig.strapiUrl}`
      : isServer()
      ? ''
      : window.location.origin
  }${path}`;

const gql = new GraphQLClient(buildUrl('/graphql'));

export const client = getSdk(gql);

export const getTestCollections = async () => {
  console.log('client', client);
  try {
    return fetch(buildUrl('/test-collections')).then((res) => res.json());
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getEntertainment = async () => {
  try {
    return fetch(buildUrl('/entertainments')).then((res) => res.json());
  } catch (error) {
    console.log(error);
    return [];
  }
};
