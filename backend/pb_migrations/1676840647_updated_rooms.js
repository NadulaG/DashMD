migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dor9umhf1ts6xbc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tuoxpmyq",
    "name": "capacity",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dor9umhf1ts6xbc")

  // remove
  collection.schema.removeField("tuoxpmyq")

  return dao.saveCollection(collection)
})
