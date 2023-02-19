migrate((db) => {
  const collection = new Collection({
    "id": "4x35h8ylyrrhp00",
    "created": "2023-02-19 17:26:58.252Z",
    "updated": "2023-02-19 17:26:58.252Z",
    "name": "equipment",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9zvucmze",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("4x35h8ylyrrhp00");

  return dao.deleteCollection(collection);
})
