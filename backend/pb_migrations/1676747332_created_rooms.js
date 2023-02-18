migrate((db) => {
  const collection = new Collection({
    "id": "dor9umhf1ts6xbc",
    "created": "2023-02-18 19:08:52.826Z",
    "updated": "2023-02-18 19:08:52.826Z",
    "name": "rooms",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7weqleg1",
        "name": "patients",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "ff30vlei6t7xqb5",
          "cascadeDelete": false,
          "maxSelect": null,
          "displayFields": []
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dor9umhf1ts6xbc");

  return dao.deleteCollection(collection);
})
