migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dor9umhf1ts6xbc")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dor9umhf1ts6xbc")

  collection.createRule = null

  return dao.saveCollection(collection)
})
