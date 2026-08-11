'use strict'

/**
 * Seed a collection whose items exist in several locales.
 *
 * `sourceItems` is a list of groups, each group holding the locale variants of one document.
 * In Strapi 5 the locales of a document share its `documentId`, so a group is seeded through the
 * Document Service: the first missing locale creates the document, the rest are attached to it with
 * `update({ documentId, locale })`, which creates the locale entry when it doesn't exist yet.
 *
 * Never write the `localizations` attribute directly — in v5 it is a virtual, non-writable join on
 * `document_id`, and writing it through `strapi.db.query()` overwrites `document_id` with row ids.
 *
 * `identifier` names the field used to recognise an already-seeded entry (e.g. 'slug'), and is
 * matched per locale, so each locale variant may carry its own value.
 */
export const seedCollectionWithTranslation = async (
  strapi,
  model: string, // e.g. 'api::tag.tag'
  sourceItems: Object[][],
  config: { [key: string]: (sourceItem: any) => string | Promise<string> },
  identifier: string
) => {
  const documents = strapi.documents(model)

  for (const sourceItemsArray of sourceItems) {
    // Resolve the whole group first, so an already-seeded locale in any position of the group
    // provides the documentId that the missing ones attach to.
    const groupEntries = []

    for (const sourceItem of sourceItemsArray) {
      const parsedItem = {}
      for (const configPropertyName of Object.keys(config)) {
        parsedItem[configPropertyName] = await config[configPropertyName](sourceItem)
      }

      // `locale` is a document parameter, not part of the entry data.
      const { locale, ...data } = parsedItem as { locale: string }

      const existingItem = await documents.findFirst({
        filters: { [identifier]: data[identifier] },
        locale,
      })

      groupEntries.push({ data, locale, existingItem })
    }

    let documentId = groupEntries.find(({ existingItem }) => existingItem)?.existingItem.documentId

    for (const { data, locale, existingItem } of groupEntries) {
      if (existingItem) continue

      if (documentId) {
        await documents.update({ documentId, locale, data })
      } else {
        documentId = (await documents.create({ data, locale })).documentId
      }

      console.log(`Created (${model}, ${locale}): ${JSON.stringify(data)}`)
    }
  }
}

export default seedCollectionWithTranslation
