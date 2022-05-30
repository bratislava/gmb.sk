import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../graphql';

const gql = new GraphQLClient(`http://localhost:1337/graphql`);

export const client = getSdk(gql);
