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
  model, //e.g. 'application::tag.tag'
  sourceItems,
  config,
  identifier
) => {
  const [appName, rest] = model.split("::");
  const [collectionName] = rest.split(".");
  //console.log({ collectionName });
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
      const foundItem = await strapi.query(model, "i18n").findOne(searchItem);
      if (!foundItem) {
        //console.log(parsedItem);
        await strapi.services[collectionName].create(parsedItem);
        createdItems.push(
          await strapi.query(model, "i18n").findOne(searchItem)
        );
      } else {
        createdItems.push(foundItem);
      }
    }
    const itemsCount = createdItems.length;
    for (let i = 0; i < itemsCount; i++) {
      const localizations = createdItems
        .filter((item) => item.slug !== createdItems[i].sluh)
        .map((item) => {
          return { id: item.id, locale: parsedItems[i].locale };
        });
      await strapi
        .query(model, "i18n")
        .update({ id: createdItems[i].id }, { localizations });
    }
  }
  return Promise.resolve();
};

export default seedCollectionWithTranslation;
