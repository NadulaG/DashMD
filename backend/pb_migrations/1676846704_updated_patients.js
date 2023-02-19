migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ff30vlei6t7xqb5")

  collection.updateRule = null

  // remove
  collection.schema.removeField("ahfdkoez")

  // remove
  collection.schema.removeField("rejhwadf")

  // remove
  collection.schema.removeField("kwx3jlf8")

  // remove
  collection.schema.removeField("pbhniyiq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sbfgfu2y",
    "name": "middle_initial",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 1,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ff30vlei6t7xqb5")

  collection.updateRule = ""

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

  // remove
  collection.schema.removeField("sbfgfu2y")

  return dao.saveCollection(collection)
})
