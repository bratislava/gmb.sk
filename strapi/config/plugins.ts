import meilisearchConfig from "./plugins.meilisearch.config";

export default {
  graphql: {
    config: {
      defaultLimit: 100,
    },
    artifacts: {
      // When changing schema path, also change watchIgnoreFiles in strapi/config/admin.js
      schema: true,
    },
  },
  meilisearch: {
    config: meilisearchConfig,
  },
};
