migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4x35h8ylyrrhp00")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4x35h8ylyrrhp00")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
