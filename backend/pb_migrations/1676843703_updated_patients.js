migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ff30vlei6t7xqb5")

  // remove
  collection.schema.removeField("zzwngnf5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kwx3jlf8",
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
    "id": "pbhniyiq",
    "name": "severity",
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
  const collection = dao.findCollectionByNameOrId("ff30vlei6t7xqb5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zzwngnf5",
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

  // remove
  collection.schema.removeField("kwx3jlf8")

  // remove
  collection.schema.removeField("pbhniyiq")

  return dao.saveCollection(collection)
})
