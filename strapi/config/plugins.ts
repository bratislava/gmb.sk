import meilisearchConfig from "./plugins.meilisearch.config";
import previewButtonConfig from "./plugins.preview-button.config";

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
  "preview-button-i18n": {
    enabled: true,
    resolve: "./src/plugins/preview-button-i18n",
    config: previewButtonConfig,
  },
  meilisearch: {
    config: meilisearchConfig,
  },
};
