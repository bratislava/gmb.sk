const config = {
  host: process.env.MEILISEARCH_HOST,
  apiKey: process.env.MEILISEARCH_ADMIN_API_KEY,

  "content-page": {
    indexName: "common_search_index",
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
      ],
      filterableAttributes: ["locale"],
    },
  },
};

export default config;
