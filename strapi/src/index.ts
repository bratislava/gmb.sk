"use strict";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register: ({ strapi }) => {
    const { transformArgs, getContentTypeArgs } = strapi
      .plugin("graphql")
      .service("builders").utils;
    const extensionService = strapi.plugin("graphql").service("extension");

    const extension = ({ nexus }) => {
      /* Followed from https://github.com/strapi/strapi/issues/11745#issuecomment-984637527 */
      const generateBySlugQuery = (
        queryName: string,
        responseType: string,
        apiName: string
      ) => {
        return {
          type: "Query",
          definition(t) {
            t.field(queryName, {
              type: responseType,
              args: { slug: nexus.stringArg() },
              async resolve(parent, args, ctx) {
                const transformedArgs = transformArgs(args, {
                  contentType: strapi.contentTypes[apiName],
                  usePagination: false,
                });

                const results = await strapi.entityService.findMany(apiName, {
                  filters: transformedArgs,
                });

                if (results.length > 0) {
                  return { value: results[0] };
                } else {
                  throw new Error(ctx.koaContext.response.message);
                }
              },
            });
          },
        };
      };

      return {
        // Nexus
        types: [
          nexus.extendType(
            generateBySlugQuery(
              "tagCategoryBySlug",
              "TagCategoryEntityResponse",
              "api::tag-category.tag-category"
            )
          ),
          nexus.extendType(
            generateBySlugQuery(
              "tagBySlug",
              "TagEntityResponse",
              "api::tag.tag"
            )
          ),
          nexus.extendType(
            generateBySlugQuery(
              "placeBySlug",
              "PlaceEntityResponse",
              "api::place.place"
            )
          ),
          nexus.extendType(
            generateBySlugQuery(
              "contentPageBySlug",
              "ContentPageEntityResponse",
              "api::content-page.content-page"
            )
          ),
        ],

        resolversConfig: {
          "Query.tagCategoryBySlug": {
            auth: false,
          },
          "Query.tagBySlug": {
            auth: false,
          },
          "Query.placeBySlug": {
            auth: false,
          },
          "Query.contentPageBySlug": {
            auth: false,
          },
        },
      };
    };

    extensionService.use(extension);
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
