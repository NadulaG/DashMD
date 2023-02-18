migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dor9umhf1ts6xbc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7weqleg1",
    "name": "patients",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "ff30vlei6t7xqb5",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dor9umhf1ts6xbc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7weqleg1",
    "name": "patients",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "ff30vlei6t7xqb5",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
