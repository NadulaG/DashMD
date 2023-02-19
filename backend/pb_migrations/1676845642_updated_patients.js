migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ff30vlei6t7xqb5")

  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ff30vlei6t7xqb5")

  collection.updateRule = null

  return dao.saveCollection(collection)
})