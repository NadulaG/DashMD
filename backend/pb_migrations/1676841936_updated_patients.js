migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ff30vlei6t7xqb5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rejhwadf",
    "name": "date_admitted",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ff30vlei6t7xqb5")

  // remove
  collection.schema.removeField("rejhwadf")

  return dao.saveCollection(collection)
})
