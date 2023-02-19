migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dor9umhf1ts6xbc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vmkvkyjm",
    "name": "equipment",
    "type": "text",
    "required": false,
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
  collection.schema.removeField("vmkvkyjm")

  return dao.saveCollection(collection)
})
