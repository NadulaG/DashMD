migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dor9umhf1ts6xbc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3qfhx3r9",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dor9umhf1ts6xbc")

  // remove
  collection.schema.removeField("3qfhx3r9")

  return dao.saveCollection(collection)
})
