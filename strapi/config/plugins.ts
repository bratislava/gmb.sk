export default {
  "custom-richtext-editor": {
    enabled: true,
    resolve: "./src/plugins/custom-richtext-editor",
  },
  "preview-button": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::content-page.content-page",
          targetField: "slug",
          draft: {
            query: {
              type: "contentPage",
            },
          },
          published: {
            basePath: "detail",
          },
        },
        {
          uid: "api::home-page.home-page",
          published: {
            basePath: "",
          },
        },
        {
          uid: "api::visit-us-page.visit-us-page",
          published: {
            basePath: "navstivte",
          },
        },
      ],
    },
  },
};
