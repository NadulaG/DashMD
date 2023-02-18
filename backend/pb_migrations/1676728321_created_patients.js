migrate((db) => {
  const collection = new Collection({
    "id": "ff30vlei6t7xqb5",
    "created": "2023-02-18 13:52:01.269Z",
    "updated": "2023-02-18 13:52:01.269Z",
    "name": "patients",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "01zwdfqd",
        "name": "first_name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ug6btm9a",
        "name": "last_name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "3boo5zro",
        "name": "date_of_birth",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
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
  const collection = dao.findCollectionByNameOrId("ff30vlei6t7xqb5");

  return dao.deleteCollection(collection);
})
