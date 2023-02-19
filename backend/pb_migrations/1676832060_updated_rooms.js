migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dor9umhf1ts6xbc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8jkrouae",
    "name": "equipment",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "4x35h8ylyrrhp00",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dor9umhf1ts6xbc")

  // remove
  collection.schema.removeField("8jkrouae")

  return dao.saveCollection(collection)
})
