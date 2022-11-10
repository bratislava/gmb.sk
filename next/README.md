# Bratislava City Gallery website

Install dependencies:

```bash
yarn
```

To start the frontend app, simply run:

```bash
yarn dev
# the same as yarn develop
```

For CMS setup see `strapi` directory. You can also run the project against staging or production strapi (useful when developing and debugging) - provided that you're not working on Strapi model changes.

## Generate GraphQL

When you change something in Strapi Content type builder, and/or if you change GraphQL queries, you always need to generate new types using Strapi SKD. To update queries, modify files in `graphql` directory.

> Note: Strapi v4 does not export `schema.graphql` by default - instead, you'll need a running server to generate types from graphql endpoint. The Strapi url is set up directly in codegen.yml file.

To generate new types run:

```
yarn gen
```

For more information, refer to [the documentation](/docs/libs/Strapi-SDK.md).

Open http://localhost:3000 with your browser to see the result.

## Adding new routes or slugs for filtering

Note: To get the correct translations of slugs used for filtering (e.g `'vystavy'` -> `'exhibitions'`), follow the same approach, but skip the step 2.

In order to have routes multilingual (for example, to have both `/navstivte` and `/en/visit-us`) you need to make following steps when adding a route:

1. Add a new page in Slovak (as usual), for example `navstivte.tsx`

2. Add a rewrite to next.config.js, to map the the English route to the existing page, like this:

```ts
async rewrites() {
  return {
    beforeFiles: [
    ...
      {
        source: '/visit-us',
        destination: '/navstivte',
      },
      ...
    ],
  };
}
```

3. Add an entry to the Slovak to English map of routes in `localeRoutes.ts`

4. Use `getRouteForLocale` when using the `<Link>` component, like this: `<NavLink url={getRouteForLocale('/navstivte', i18n.language)}>`. You need to pass the route in Slovak and the current locale. This will correctly resolve the route for the given locale.

## Static Site Generation

If you want to test static site generation locally, you need to run `yarn build` and `yarn start`. This commands run by default with the prod env variable, so in order to have the local env variable for strapi, you need to create `.env.local` with `STRAPI_URL=localhost:1337` to override the prod values. This file is ignored by git, because it often contains sensitive secrets

## Fluid resposive design

If you need to change some font sizes or spacing, check the `styles/globals.css` and `tailwing.config.js` files how are all sizes set up.
