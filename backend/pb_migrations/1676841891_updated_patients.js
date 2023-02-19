migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ff30vlei6t7xqb5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ahfdkoez",
    "name": "admitted",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ff30vlei6t7xqb5")

  // remove
  collection.schema.removeField("ahfdkoez")

  return dao.saveCollection(collection)
})
