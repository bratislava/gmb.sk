# Bratislava city-gallery website

Install dependencies:

```
yarn install
```

To start the frontend app, simply run:

```
yarn develop
```

## Strapi SDK for city-gallery

When you change something in Strapi Content type builder, and/or if you change GraphQL queries, you always need to generate new types using Strapi SKD.

To generate new types:

```
yarn gen
```

For more information, refer to [the documentation](/docs/libs/Strapi-SDK.md).

## Adding new routes or slugs for filtering

Note: To get the correct translations of slugs used for filtering (e.g `'vystavy'` -> `'exhibitions'`), follow the same approach, but skip the step 2.

In order to have routes multilingual (for example, to have both `/navstivte` and `/en/visit-us`) you need to make following steps when adding a route:

1. Add a new page in Slovak (as usual), for example `navstivte.tsx`

2. Add a rewrite to next.config.js, to map the the English route to the existing page, like this:

```
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
