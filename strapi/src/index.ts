"use strict"

import placesData from "./seeders/data/places.json"
import tagCategoriesData from "./seeders/data/tag-categories.json"
import tagsData from "./seeders/data/tags.json"
import { seedCollectionWithTranslation } from "./seeders/seedCollectionWithTranslation"

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
      .service("builders").utils
    const extensionService = strapi.plugin("graphql").service("extension")

    const extension = ({ nexus }) => {
      /* Followed from https://github.com/strapi/strapi/issues/11745#issuecomment-984637527 */
      const generateBySlugQuery = (
        queryName: string,
        responseType: string,
        apiName: string
      ) => {
        return nexus.extendType({
          type: "Query",
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
                  filters = { slug, publishedAt: { $notNull: true } }
                }
                const results = await strapi.entityService.findMany(apiName, {
                  filters,
                  locale,
                })

                if (results.length > 0) {
                  return { value: results[0] }
                }
              },
            })
          },
        })
      }

      return {
        // Nexus
        types: [
          generateBySlugQuery(
            "tagCategoryBySlug",
            "TagCategoryEntityResponse",
            "api::tag-category.tag-category"
          ),
          generateBySlugQuery("tagBySlug", "TagEntityResponse", "api::tag.tag"),
          generateBySlugQuery(
            "placeBySlug",
            "PlaceEntityResponse",
            "api::place.place"
          ),
          generateBySlugQuery(
            "contentPageBySlug",
            "ContentPageEntityResponse",
            "api::content-page.content-page"
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
      }
    }

    extensionService.use(extension)
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    //------------------------------------
    // ADDING REVALIDATE WEBHOOK
    //------------------------------------
    // create Revalidate webhook according to this suggestion https://github.com/strapi/strapi/pull/20487#issuecomment-2482527848
    const webhook = await strapi.db.query('webhook').findOne({
      where: {
        name: 'Bootstrapped Revalidate',
      },
    })

    if (!webhook) {
      await strapi.webhookStore.createWebhook({
        id: 'Bootstrapped Revalidate',
        name: 'Bootstrapped Revalidate',
        url: `${process.env.REVALIDATE_NEXT_URL}/api/revalidate?secret=${process.env.REVALIDATE_SECRET_TOKEN}`,
        events: ['entry.create', 'entry.update', 'entry.publish'],
        headers: {},
        isEnabled: true
      })
      console.log('Revalidate webhook created')
    } else {
      console.log('Revalidate webhook already exists')
    }
    //------------------------------------
    // ADDING ENGLISH LOCALE
    //------------------------------------
    const existingEnglish = await strapi.db
      .query("plugin::i18n.locale")
      .findOne({ where: { code: "en" } })
    if (!existingEnglish) {
      const english = { name: "English (en)", code: "en" }
      try {
        await strapi.db.query("plugin::i18n.locale").create({ data: english })
      } catch (error: any) {
        console.log(
          "Caught error while creating locale, checking if locale created successfully."
        )
        const createdEnglish = await strapi.db
          .query("plugin::i18n.locale")
          .findOne({ where: english })
        if (createdEnglish) console.log("Created English locale.")
      }
    }
    console.log({
      locales: await strapi.db.query("plugin::i18n.locale").findMany(),
    })
    //------------------------------------
    // ADDING TAG-CATEGORIES
    //------------------------------------
    await seedCollectionWithTranslation(
      strapi,
      "api::tag-category.tag-category",
      tagCategoriesData,
      {
        title: (sourceItem) => sourceItem.title,
        slug: (sourceItem) => sourceItem.slug,
        locale: (sourceItem) => sourceItem.locale,
      },
      "slug"
    )
    //------------------------------------
    // ADDING TAGS
    //------------------------------------
    await seedCollectionWithTranslation(
      strapi,
      "api::tag.tag",
      tagsData,
      {
        title: (sourceItem) => sourceItem.title,
        slug: (sourceItem) => sourceItem.slug,
        tagCategory: async (sourceItem) => {
          const tagCategory = await strapi.db
            .query("api::tag-category.tag-category", "i18n")
            .findOne({ where: { slug: sourceItem.tagCategory } })
          console.log({ tagCategory })
          return tagCategory.id
        },
        locale: (sourceItem) => sourceItem.locale,
      },
      "slug"
    )
    //------------------------------------
    // ADDING PLACES
    //------------------------------------
    await seedCollectionWithTranslation(
      strapi,
      "api::place.place",
      placesData,
      {
        title: (sourceItem) => sourceItem.title,
        slug: (sourceItem) => sourceItem.slug,
        address: (sourceItem) => sourceItem.address,
        locale: (sourceItem) => sourceItem.locale,
      },
      "slug"
    )
  },
}
