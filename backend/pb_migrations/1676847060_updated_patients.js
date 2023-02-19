migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ff30vlei6t7xqb5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8ga9j9p0",
    "name": "admission_reason",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2cv2kfdn",
    "name": "admitted",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0cmdw7hj",
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
  collection.schema.removeField("8ga9j9p0")

  // remove
  collection.schema.removeField("2cv2kfdn")

  // remove
  collection.schema.removeField("0cmdw7hj")

  return dao.saveCollection(collection)
})
