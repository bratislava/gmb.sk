// 'use strict'

// import placesData from './seeders/data/places.json'
// import tagCategoriesData from './seeders/data/tag-categories.json'
// import tagsData from './seeders/data/tags.json'
// import { seedCollectionWithTranslation } from './seeders/seedCollectionWithTranslation'

// Commenting out the bootstrap function for now, as it was breaking the Strapi build process, and is not needed currently.

// export default {
//   /**
//    * An asynchronous bootstrap function that runs before
//    * your application gets started.
//    *
//    * This gives you an opportunity to set up your data model,
//    * run jobs, or perform some special logic.
//    */
//   async bootstrap({ strapi }) {
//     //------------------------------------
//     // ADDING REVALIDATE WEBHOOK
//     //------------------------------------
//     // create Revalidate webhook according to this suggestion https://github.com/strapi/strapi/pull/20487#issuecomment-2482527848
//     console.log('Checking if Revalidate webhook exists...')
//     const webhook = await strapi.db.query('webhook').findOne({
//       where: {
//         name: 'Bootstrapped Revalidate',
//       },
//     })

//     if (!webhook) {
//       await strapi.webhookStore.createWebhook({
//         id: 'Bootstrapped Revalidate',
//         name: 'Bootstrapped Revalidate',
//         url: `${process.env.REVALIDATE_NEXT_URL}/api/revalidate?secret=${process.env.REVALIDATE_SECRET_TOKEN}`,
//         events: ['entry.create', 'entry.update', 'entry.publish'],
//         headers: {},
//         isEnabled: true,
//       })
//       console.log('Revalidate webhook created')
//     } else {
//       console.log('Revalidate webhook already exists')
//     }
//     //------------------------------------
//     // ADDING ENGLISH LOCALE
//     //------------------------------------
//     const existingEnglish = await strapi.db
//       .query('plugin::i18n.locale')
//       .findOne({ where: { code: 'en' } })
//     if (!existingEnglish) {
//       const english = { name: 'English (en)', code: 'en' }
//       try {
//         await strapi.db.query('plugin::i18n.locale').create({ data: english })
//       } catch (error: any) {
//         console.log('Caught error while creating locale, checking if locale created successfully.')
//         const createdEnglish = await strapi.db
//           .query('plugin::i18n.locale')
//           .findOne({ where: english })
//         if (createdEnglish) console.log('Created English locale.')
//       }
//     }
//     console.log({
//       locales: await strapi.db.query('plugin::i18n.locale').findMany(),
//     })
//     //------------------------------------
//     // ADDING TAG-CATEGORIES
//     //------------------------------------
//     await seedCollectionWithTranslation(
//       strapi,
//       'api::tag-category.tag-category',
//       tagCategoriesData,
//       {
//         title: (sourceItem) => sourceItem.title,
//         slug: (sourceItem) => sourceItem.slug,
//         locale: (sourceItem) => sourceItem.locale,
//       },
//       'slug'
//     )
//     //------------------------------------
//     // ADDING TAGS
//     //------------------------------------
//     await seedCollectionWithTranslation(
//       strapi,
//       'api::tag.tag',
//       tagsData,
//       {
//         title: (sourceItem) => sourceItem.title,
//         slug: (sourceItem) => sourceItem.slug,
//         tagCategory: async (sourceItem) => {
//           const tagCategory = await strapi.db
//             .query('api::tag-category.tag-category', 'i18n')
//             .findOne({ where: { slug: sourceItem.tagCategory } })
//           console.log({ tagCategory })
//           return tagCategory.id
//         },
//         locale: (sourceItem) => sourceItem.locale,
//       },
//       'slug'
//     )
//     //------------------------------------
//     // ADDING PLACES
//     //------------------------------------
//     await seedCollectionWithTranslation(
//       strapi,
//       'api::place.place',
//       placesData,
//       {
//         title: (sourceItem) => sourceItem.title,
//         slug: (sourceItem) => sourceItem.slug,
//         address: (sourceItem) => sourceItem.address,
//         locale: (sourceItem) => sourceItem.locale,
//       },
//       'slug'
//     )
//   },
// }
