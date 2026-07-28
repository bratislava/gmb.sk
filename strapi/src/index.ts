'use strict'
export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register: ({ strapi }) => {
    const { transformArgs } = strapi.plugin('graphql').service('builders').utils
    const extensionService = strapi.plugin('graphql').service('extension')

    const extension = ({ nexus }) => {
      /* Adapted from https://github.com/strapi/strapi/issues/11745#issuecomment-984637527 for v5's flat response shape */
      const generateBySlugQuery = (queryName: string, responseType: string, apiName: string) => {
        return nexus.extendType({
          type: 'Query',
          definition(t) {
            t.field(queryName, {
              type: responseType,
              args: {
                slug: nexus.stringArg(),
                isPublished: nexus.booleanArg(),
              },
              async resolve(parent, args, ctx) {
                const { slug, isPublished, locale } = transformArgs(args, {
                  contentType: strapi.contentTypes[apiName],
                  usePagination: false,
                })

                let filters: any = { slug }
                if (isPublished) {
                  filters = { slug }
                  status: isPublished ? 'published' : 'draft'
                }
                const results = await strapi.documents(apiName).findMany({
                  filters,
                  locale,
                })

                if (results.length > 0) {
                  return results[0]
                }
              },
            })
          },
        })
      }

      return {
        // Nexus
        types: [
          generateBySlugQuery('tagCategoryBySlug', 'TagCategory', 'api::tag-category.tag-category'),
          generateBySlugQuery('tagBySlug', 'Tag', 'api::tag.tag'),
          generateBySlugQuery('placeBySlug', 'Place', 'api::place.place'),
          generateBySlugQuery('contentPageBySlug', 'ContentPage', 'api::content-page.content-page'),
        ],

        resolversConfig: {
          'Query.tagCategoryBySlug': {
            auth: false,
          },
          'Query.tagBySlug': {
            auth: false,
          },
          'Query.placeBySlug': {
            auth: false,
          },
          'Query.contentPageBySlug': {
            auth: false,
          },
        },
      }
    }

    extensionService.use(extension)
  },
}
