const config = {
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
        basePath: { sk: "detail", en: "en/detail" },
      },
    },
    {
      uid: "api::home-page.home-page",
      published: {
        basePath: { sk: "", en: "en" },
      },
    },
    {
      uid: "api::visit-us-page.visit-us-page",
      published: {
        basePath: { sk: "navstivte", en: "en/visit-us" },
      },
    },
    {
      uid: "api::about-us-page.about-us-page",
      published: {
        basePath: { sk: "o-galerii", en: "en/about-gallery" },
      },
    },
    {
      uid: "api::explore-page.explore-page",
      published: {
        basePath: { sk: "objavujte", en: "en/explore" },
      },
    },
    {
      uid: "api::exhibitions-page.exhibitions-page",
      published: {
        basePath: { sk: "vystavy", en: "en/exhibitions" },
      },
    },
    {
      uid: "api::get-involved-page.get-involved-page",
      published: {
        basePath: { sk: "zapojte-sa", en: "en/get-involved" },
      },
    },
    {
      uid: "api::collections-page.collections-page",
      published: {
        basePath: { sk: "zbierky", en: "en/collections" },
      },
    },
  ],
};

export default config;
