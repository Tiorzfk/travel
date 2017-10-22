define({ "api": [
  {
    "type": "post",
    "url": "/api/1.0.0/airplane/delete",
    "title": "Delete Airplane",
    "group": "Airplane",
    "name": "DeleteAirplane",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id_airplane",
            "description": "<p>Id Airplane that want to delete</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200,\n  \"message\": \"success\",\n  \"result\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Delete error",
          "content": "HTTP/1.0 500 Internal Server Error\n{\n  \"status\": 500,\n  \"message\": \"error\",\n  \"result\": error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc/apidoc.js",
    "groupTitle": "Airplane"
  },
  {
    "type": "get",
    "url": "/api/1.0.0/airplane",
    "title": "Tampil Semua Airplane",
    "group": "Airplane",
    "name": "GetAirplane",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200,\n  \"message\": \"success\",\n  \"result\": [{\n    'id_airplane': 123.\n    'airport_id' : 42,\n    'plane_name' : 'Lion',\n    'total_seat' : 30,\n     \"airport\": {\n             \"id_airport\": 14,\n             \"airport_name\": \"Soekarno Hatta\",\n             \"city\": \"Jakarta\",\n             \"state\": \"Indonesia\"\n   },\n   {\n     \"id_airplane\": 34,\n     \"airport_id\": 14,\n     \"plane_name\": \"asd\",\n     \"total_seat\": 10,\n     \"airport\": {\n           \"id_airport\": 14,\n           \"airport_name\": \"Ngurah Rai\",\n           \"city\": \"Denpasar\",\n           \"state\": \"Indonesia\"\n      }\n   }]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc/apidoc.js",
    "groupTitle": "Airplane"
  },
  {
    "type": "get",
    "url": "/api/1.0.0/airplane/{id}",
    "title": "Tampil Satu Airplane",
    "group": "Airplane",
    "name": "GetOneAirplane",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200,\n  \"message\": \"success\",\n  \"result\": {\n    'id_airplane': 123.\n    'airport_id' : 42,\n    'plane_name' : 'Lion',\n    'total_seat' : 30,\n     \"airport\": {\n             \"id_airport\": 14,\n             \"airport_name\": \"Soekarno Hatta\",\n             \"city\": \"Jakarta\",\n             \"state\": \"Indonesia\"\n   }\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc/apidoc.js",
    "groupTitle": "Airplane"
  },
  {
    "type": "post",
    "url": "/api/1.0.0/airplane",
    "title": "Simpan Airplane",
    "group": "Airplane",
    "name": "SimpanAirplane",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "airport_id",
            "description": "<p>id airport</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "plane_name",
            "description": "<p>airplane name</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "total_seat",
            "description": "<p>Total Seat</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200,\n  \"message\": \"success\",\n  \"result\": {\n    'id_airplane': 123.\n    'airport_id' : 42,\n    'plane_name' : 'Lion',\n    'total_seat' : 30\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Delete error",
          "content": "HTTP/1.0 500 Internal Server Error\n{\n  \"status\": 500,\n  \"message\": \"error\",\n  \"result\": error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc/apidoc.js",
    "groupTitle": "Airplane"
  },
  {
    "type": "post",
    "url": "/api/1.0.0/airplane/edit",
    "title": "Update Airplane",
    "group": "Airplane",
    "name": "UpdateAirplane",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "airport_id",
            "description": "<p>id airport</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "plane_name",
            "description": "<p>airplane name</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "total_seat",
            "description": "<p>Total Seat</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200,\n  \"message\": \"success\",\n  \"result\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Delete error",
          "content": "HTTP/1.0 500 Internal Server Error\n{\n  \"status\": 500,\n  \"message\": \"error\",\n  \"result\": error\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc/apidoc.js",
    "groupTitle": "Airplane"
  }
] });
