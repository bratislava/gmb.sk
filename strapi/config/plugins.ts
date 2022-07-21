export default {
  graphql: {
    config: {
      defaultLimit: 100,
    },
  },
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
        {
          uid: "api::about-us-page.about-us-page",
          published: {
            basePath: "o-galerii",
          },
        },
        {
          uid: "api::explore-page.explore-page",
          published: {
            basePath: "objavujte",
          },
        },
        {
          uid: "api::exhibitions-page.exhibitions-page",
          published: {
            basePath: "vystavy",
          },
        },
        {
          uid: "api::get-involved-page.get-involved-page",
          published: {
            basePath: "zapojte-sa",
          },
        },
        {
          uid: "api::collections-page.collections-page",
          published: {
            basePath: "zbierky",
          },
        },
      ],
    },
  },
};
