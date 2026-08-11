'use strict'

const { createId } = require('@paralleldrive/cuid2')

/**
 * Repairs `document_id` values that the pre-v5 seeder overwrote with numeric row ids.
 *
 * `seedCollectionWithTranslation` used to link translations by writing the `localizations`
 * attribute through `strapi.db.query()`. In v5 that attribute is a virtual join on `document_id`,
 * so the write ended up setting each row's `document_id` to its sibling's numeric id — breaking the
 * documentId exposed by the API, admin edit URLs and the Meilisearch primary key.
 *
 * The seeder no longer does this. Any environment that booted the v5 branch before the fix still
 * carries the damage, which this migration undoes: the two rows of a pair (they point at each
 * other's id) get one shared, freshly generated documentId, which is also what v5 expects of two
 * locales of the same document.
 */
const TABLES = ['tags', 'tag_categories', 'places']

async function up(knex) {
  for (const table of TABLES) {
    // Migrations run before the schema is created on a fresh database, where there is nothing to
    // repair — and querying a missing table would abort the boot.
    // eslint-disable-next-line no-await-in-loop
    if (!(await knex.schema.hasTable(table))) continue

    const rows = await knex(table).select('id', 'document_id', 'locale')
    const brokenRows = rows.filter((row) => /^\d+$/.test(String(row.document_id ?? '')))

    if (brokenRows.length === 0) continue

    const rowsById = new Map(rows.map((row) => [String(row.id), row]))
    const repairedIds = new Set()

    for (const row of brokenRows) {
      if (repairedIds.has(row.id)) continue

      // The seeder wrote the sibling's id, so the two rows of a pair reference each other.
      const sibling = rowsById.get(String(row.document_id))
      const isPair =
        sibling &&
        String(sibling.document_id) === String(row.id) &&
        sibling.locale !== row.locale

      const ids = isPair ? [row.id, sibling.id] : [row.id]
      await knex(table).whereIn('id', ids).update({ document_id: createId() })

      ids.forEach((id) => repairedIds.add(id))
    }

    console.log(`Repaired ${repairedIds.size} document_id value(s) in "${table}".`)
  }
}

async function down() {
  throw new Error(
    'The previous document_id values were corrupt row ids; this migration cannot be reversed.'
  )
}

module.exports = { up, down }
