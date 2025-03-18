const meilisearchConfig = {
  host: process.env.MEILISEARCH_HOST,
  apiKey: process.env.MEILISEARCH_ADMIN_API_KEY,

  "content-page": {
    indexName: "search_index",
    entriesQuery: {
      locale: "all",
    },
    settings: {
      searchableAttributes: [
        "title",
        "titleToShow",
        "subtitle",
        "perex",
        "seo.keywords",
        "seo.metaTitle",
        "seo.metaDescription",
        "positions.names",
        "exhibitionYear",
      ],
      filterableAttributes: ["locale", "tags.slug", "exhibitionYear"],
      sortableAttributes: ["exhibitionYear"],
    },
    transformEntry: ({ entry }) => ({
      ...entry,
      dateFromTimestamp: entry.dateFrom
        ? new Date(entry.dateFrom).getTime()
        : undefined,
      exhibitionYear: entry.dateFrom
        ? new Date(entry.dateFrom).getFullYear()
        : undefined,
    }),
  },
};

export default meilisearchConfig;
