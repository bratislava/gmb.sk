"use strict";

const FILES_TABLE = "files";
const BATCH_SIZE = 1000;

async function up(trx) {
  let lastId = 0;

  console.log("Checking for images to generate placeholder for...");
  while (true) {
    const files = await trx
      .select(["id", "url"])
      .from(FILES_TABLE)
      .whereNot("url", null)
      .andWhereLike("mime", "image/%")
      .andWhere("placeholder", null)
      .andWhere("id", ">", lastId)
      .orderBy("id", "asc")
      .limit(BATCH_SIZE);

    for (const file of files) {
      console.log("Generating placeholder for file: ", file);
      const placeholder = await strapi
        .plugin("placeholder")
        .service("placeholder")
        .generate(file.url);

      if (placeholder)
        await trx
          .update("placeholder", placeholder)
          .from(FILES_TABLE)
          .where("id", file.id);
    }

    if (files.length < BATCH_SIZE) {
      break;
    }

    lastId = files[files.length - 1].id;
  }
  console.log("Generating placeholders done.");
}

async function down() {}

module.exports = { up, down };
