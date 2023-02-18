migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ff30vlei6t7xqb5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cfxl2duh",
    "name": "sex",
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
  const collection = dao.findCollectionByNameOrId("ff30vlei6t7xqb5")

  // remove
  collection.schema.removeField("cfxl2duh")

  return dao.saveCollection(collection)
})
