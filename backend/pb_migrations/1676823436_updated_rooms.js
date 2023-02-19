migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dor9umhf1ts6xbc")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dor9umhf1ts6xbc")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
