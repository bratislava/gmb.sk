"use strict";

/**
 * Seed some collection data function
 *
 * config shape:
 * {
 *    [property name from json]: true / '[single/multiple]:[strapi collection name].[find by property]'
 *    ...
 * }
 */

export const seedCollectionWithTranslation = async (
  strapi,
  model: string, //e.g. 'application::tag.tag'
  sourceItems: Object[][],
  config: { [key: string]: (sourceItem: any) => string | Promise<string> },
  identifier: string
) => {
  for (const sourceItemsArray of sourceItems) {
    const createdItems = [];
    const parsedItems = [];
    for (const sourceItem of sourceItemsArray) {
      let configPropertyNames = Object.keys(config);
      const parsedItem = {};
      for await (const configPropertyName of configPropertyNames) {
        parsedItem[configPropertyName] = await config[configPropertyName](
          sourceItem
        );
      }
      parsedItems.push(parsedItem);
      const searchItem = {};
      searchItem[identifier] = parsedItem[identifier];
      const foundItem = await strapi.db
        .query(model, "i18n")
        .findOne({ where: searchItem, populate: { localizations: true } });
      if (!foundItem) {
        await strapi.db.query(model).create({ data: parsedItem });
        console.log(`Created (${model}): ${JSON.stringify(parsedItem)}`);
        createdItems.push(
          await strapi.db
            .query(model, "i18n")
            .findOne({ where: searchItem, populate: { localizations: true } })
        );
      } else {
        createdItems.push(foundItem);
      }
    }
    const itemsCount = createdItems.length;
    for (let i = 0; i < itemsCount; i++) {
      const localizations = createdItems
        .filter((item) => item.slug !== createdItems[i].slug)
        .map((item) => {
          return { id: item.id, locale: parsedItems[i].locale };
        });
      await strapi.db
        .query(model, "i18n")
        .update({ where: { id: createdItems[i].id }, data: { localizations } });
      console.log(
        `Updated ${model} where id:${
          createdItems[i].id
        } with localizations: ${JSON.stringify(localizations)}`
      );
    }
  }
  return Promise.resolve();
};

export default seedCollectionWithTranslation;
