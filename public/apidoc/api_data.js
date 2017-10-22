define({ "api": [
  {
    "type": "post",
    "url": "/api/1.0.0/airplane/delete",
    "title": "Delete Airplane",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
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
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
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
    "title": "Tampil Detail Airplane",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
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
    "title": "Tambah Airplane",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
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
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
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
  },
  {
    "type": "post",
    "url": "/api/1.0.0/airplane/delete",
    "title": "Delete Airport",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
    "group": "Airport",
    "name": "DeleteAirport",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id_airport",
            "description": "<p>Id Airport that want to delete</p>"
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
    "filename": "./apidoc/airport.js",
    "groupTitle": "Airport"
  },
  {
    "type": "get",
    "url": "/api/1.0.0/airplane",
    "title": "Tampil Semua Airport",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
    "group": "Airport",
    "name": "GetAirport",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200,\n  \"message\": \"success\",\n  \"result\": [\n    {\n        \"id_airport\": 14,\n        \"airport_name\": \"Soekarno Hatta\",\n        \"city\": \"Jakarta\",\n        \"state\": \"Indonesia\"\n    }]\n  }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc/airport.js",
    "groupTitle": "Airport"
  },
  {
    "type": "get",
    "url": "/api/1.0.0/airplane/{id}",
    "title": "Tampil Detail Airport",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
    "group": "Airport",
    "name": "GetOneAirport",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200,\n  \"message\": \"success\",\n  \"result\": {\n      \"id_airport\": 14,\n      \"airport_name\": \"Soekarno Hatta\",\n      \"city\": \"Jakarta\",\n      \"state\": \"Indonesia\"\n    }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc/airport.js",
    "groupTitle": "Airport"
  },
  {
    "type": "post",
    "url": "/api/1.0.0/airplane",
    "title": "Tambah Airport",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
    "group": "Airport",
    "name": "SimpanAirport",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "airport_name",
            "description": "<p>Airport Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200,\n  \"message\": \"success\",\n  \"result\": {\n    'id_airport': 123.\n    'city' : 'Bandung',\n    'state' : 'Indonesia'\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Tambah error",
          "content": "HTTP/1.0 400 Internal Server Error\n{\n  \"status\": 400,\n  \"message\": \"error\",\n  \"result\": {\n   \"name\": \"SequelizeValidationError\",\n\"errors\": [\n   {\n       \"message\": \"city cannot be null\",\n       \"type\": \"Validation error\",\n       \"path\": \"city\",\n       \"value\": \"\",\n       \"__raw\": {}\n   }\n]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc/airport.js",
    "groupTitle": "Airport"
  },
  {
    "type": "post",
    "url": "/api/1.0.0/airport/edit",
    "title": "Update Airport",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
    "group": "Airport",
    "name": "UpdateAirport",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "airport_name",
            "description": "<p>Airport Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State</p>"
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
    "filename": "./apidoc/airport.js",
    "groupTitle": "Airport"
  },
  {
    "type": "post",
    "url": "/api/1.0.0/confirm",
    "title": "Confirm",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
    "group": "Authenticate",
    "name": "Confirm_Email",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200,\n  \"message\": \"success\",\n  \"status\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Tambah error",
          "content": "HTTP/1.0 400 Internal Server Error\n{\n  \"status\": 400,\n  \"message\": \"error\",\n  \"result\": {\n    \"status\": 400,\n     \"message\": \"token is invalid,\n      \"message\": []\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc/auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/api/1.0.0/login",
    "title": "Login",
    "group": "Authenticate",
    "name": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Passsword</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200,\n  \"message\": \"success , please check your email address\",\n  \"result\": {\n      \"id_passanger\": 284,\n      \"firstname\": \"Bambang\",\n      \"lastname\": \"Guna\",\n      \"email\": \"bambang@email.unikom.ac.id\",\n      \"address\": \"Jl.Dipatiukur\",\n      \"age\": 12,\n      \"status\": \"0\",\n      \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJHYWdhIiwibGFzdG5hbWUiOiJMYWR5IiwiZW1haWwiOiJ0aW9yemZrQGVtYWlsLnVuaWtvbS5hYy5pZCIsInBhc3N3b3JkIjoiJDJhJDEwJFEyZE5kUDdvdWtqNy9tcjFybU45YnV4L2VwZHFnNlJaSVZRb25FeUFiN0EwR29KT3YxSmVPIiwiYWRkcmVzcyI6ImFzZGFzZGFzZCIsImFnZSI6IjEyIiwiaWF0IjoxNTA4NjQ1MTQ5LCJleHAiOjE1MDg3MzE1NDl9.z1wIhUDDiZzGLfIe6K-HjiybHN_W6H86zl6_27qEzcQ\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register Error Username or Password",
          "content": "HTTP/1.0 400 Internal Server Error\n{\n  \"status\": 400,\n  \"message\": \"error\",\n  \"result\": {\n    \"status\": 400,\n     \"message\": \"username or password is wrong\",\n      \"message\": []\n  }\n}",
          "type": "json"
        },
        {
          "title": "Register Error Email Activated",
          "content": "HTTP/1.0 400 Internal Server Error\n{\n  \"status\": 400,\n  \"message\": \"error\",\n  \"result\": {\n    \"status\": 400,\n     \"message\": \"Please Activated your account\",\n      \"message\": []\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc/auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/api/1.0.0/register",
    "title": "Register",
    "group": "Authenticate",
    "name": "Register",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Passsword</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "age",
            "description": "<p>Age</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200,\n  \"message\": \"success , please check your email address\",\n  \"result\": {\n      \"firstname\": \"Ade\",\n      \"lastname\": \"Lamy\",\n      \"email\": \"ade@outlook.com\",\n      \"address\": \"Jl.Dipatiukur\",\n      \"age\": 20\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Tambah error",
          "content": "HTTP/1.0 400 Internal Server Error\n{\n  \"status\": 400,\n  \"message\": \"error\",\n  \"result\": {\n   \"name\": \"SequelizeValidationError\",\n\"errors\": [\n   {\n       \"message\": \"email already exist\",\n       \"type\": \"Validation error\",\n       \"path\": \"email\",\n       \"value\": \"\",\n       \"__raw\": {}\n   }\n]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc/auth.js",
    "groupTitle": "Authenticate"
  },
  {
    "type": "post",
    "url": "/api/1.0.0/booking/delete",
    "title": "Delete Booking",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
    "group": "Booking",
    "name": "DeleteBooking",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id_booking",
            "description": "<p>ID Booking that want to edit</p>"
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
    "filename": "./apidoc/book.js",
    "groupTitle": "Booking"
  },
  {
    "type": "get",
    "url": "/api/1.0.0/booking",
    "title": "Tampil Semua Booking",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
    "group": "Booking",
    "name": "GetBooking",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200,\n  \"message\": \"success\",\n  \"result\": [\n      {\n          \"id_booking\": 4,\n          \"passanger_id\": 44,\n          \"flight_id\": 24,\n          \"seat_number\": 23,\n          \"passanger\": {\n              \"firstname\": \"Tioreza\",\n              \"lastname\": \"Febrian\",\n              \"email\": \"asd@yahoo.com\",\n              \"address\": \"asdasdasd\",\n              \"age\": 12\n          },\n               \"flight\": {\n              \"id_flight\": 24,\n              \"airplane_id\": 24,\n              \"departure_time\": \"00:12:34\",\n              \"arrival_time\": \"00:12:34\",\n              \"departure_date\": \"1234-01-01\",\n              \"arrival_date\": \"1234-01-01\",\n              \"destination\": \"Bandung\",\n              \"total_seat\": 1,\n              \"price\": 100000,\n              \"airplane\": {\n                  \"id_airplane\": 24,\n                  \"airport_id\": 14,\n                  \"plane_name\": \"Batik\",\n                  \"total_seat\": 10,\n                  \"airport\": {\n                      \"id_airport\": 14,\n                      \"airport_name\": \"Soekarno Hatta\",\n                      \"city\": \"Jakarta\",\n                      \"state\": \"Indonesia\"\n                  }\n              }\n          }\n      }\n      {\n          \"id_booking\": 5,\n          \"passanger_id\": 44,\n          \"flight_id\": 24,\n          \"seat_number\": 23,\n          \"passanger\": {\n              \"firstname\": \"Asep\",\n              \"lastname\": \"Udin\",\n              \"email\": \"asep@yahoo.com\",\n              \"address\": \"asdasdasd\",\n              \"age\": 12\n          },\n               \"flight\": {\n              \"id_flight\": 24,\n              \"airplane_id\": 24,\n              \"departure_time\": \"00:12:34\",\n              \"arrival_time\": \"00:12:34\",\n              \"departure_date\": \"1234-01-01\",\n              \"arrival_date\": \"1234-01-01\",\n              \"destination\": \"Jakarta\",\n              \"total_seat\": 1,\n              \"price\": 100000,\n              \"airplane\": {\n                  \"id_airplane\": 24,\n                  \"airport_id\": 14,\n                  \"plane_name\": \"Batik\",\n                  \"total_seat\": 10,\n                  \"airport\": {\n                      \"id_airport\": 14,\n                      \"airport_name\": \"Soekarno Hatta\",\n                      \"city\": \"Jakarta\",\n                      \"state\": \"Indonesia\"\n                  }\n              }\n          }\n      }\n       ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc/book.js",
    "groupTitle": "Booking"
  },
  {
    "type": "get",
    "url": "/api/1.0.0/booking/{id}",
    "title": "Tampil Detail Booking",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
    "group": "Booking",
    "name": "GetOneBooking",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200,\n  \"message\": \"success\",\n  \"result\": {\n          \"id_booking\": 5,\n          \"passanger_id\": 44,\n          \"flight_id\": 24,\n          \"seat_number\": 23,\n          \"passanger\": {\n              \"firstname\": \"Asep\",\n              \"lastname\": \"Udin\",\n              \"email\": \"asep@yahoo.com\",\n              \"address\": \"asdasdasd\",\n              \"age\": 12\n          },\n         \"flight\": {\n              \"id_flight\": 24,\n              \"airplane_id\": 24,\n              \"departure_time\": \"00:12:34\",\n              \"arrival_time\": \"00:12:34\",\n              \"departure_date\": \"1234-01-01\",\n              \"arrival_date\": \"1234-01-01\",\n              \"destination\": \"Jakarta\",\n              \"total_seat\": 1,\n              \"price\": 100000,\n              \"airplane\": {\n                  \"id_airplane\": 24,\n                  \"airport_id\": 14,\n                  \"plane_name\": \"Batik\",\n                  \"total_seat\": 10,\n                  \"airport\": {\n                      \"id_airport\": 14,\n                      \"airport_name\": \"Soekarno Hatta\",\n                      \"city\": \"Jakarta\",\n                      \"state\": \"Indonesia\"\n                  }\n              }\n          }\n      }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc/book.js",
    "groupTitle": "Booking"
  },
  {
    "type": "post",
    "url": "/api/1.0.0/booking",
    "title": "Tambah Booking",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
    "group": "Booking",
    "name": "SimpanBooking",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "passanger_id",
            "description": "<p>Passanger ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "flight_id",
            "description": "<p>Flight ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "seat_number",
            "description": "<p>Seat Number</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200,\n  \"message\": \"success\",\n  \"result\": {\n      \"id_booking\": 104,\n      \"passanger_id\": \"44\",\n      \"flight_id\": \"14\",\n      \"seat_number\": \"92\",\n        \"updated_at\": \"2017-10-22T13:05:58.518Z\",\n        \"created_at\": \"2017-10-22T13:05:58.518Z\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Tambah error",
          "content": "HTTP/1.0 400 Internal Server Error\n{\n  \"status\": 400,\n  \"message\": \"error\",\n  \"result\": {\n   \"name\": \"SequelizeValidationError\",\n\"errors\": [\n   {\n       \"message\": \"passanger_id cannot be null\",\n       \"type\": \"Validation error\",\n       \"path\": \"passanger_id\",\n       \"value\": \"\",\n       \"__raw\": {}\n   }\n]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc/book.js",
    "groupTitle": "Booking"
  },
  {
    "type": "post",
    "url": "/api/1.0.0/booking/edit",
    "title": "Update Booking",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
    "group": "Booking",
    "name": "UpdateBooking",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id_booking",
            "description": "<p>ID Booking that want to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "passanger_id",
            "description": "<p>Passanger ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "flight_id",
            "description": "<p>Flight ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "seat_number",
            "description": "<p>Seat Number</p>"
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
    "filename": "./apidoc/book.js",
    "groupTitle": "Booking"
  },
  {
    "type": "post",
    "url": "/api/1.0.0/flight/delete",
    "title": "Delete Flight",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
    "group": "Flight",
    "name": "DeleteFlight",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id_flight",
            "description": "<p>Id Flight that want to delete</p>"
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
    "filename": "./apidoc/flight.js",
    "groupTitle": "Flight"
  },
  {
    "type": "get",
    "url": "/api/1.0.0/flight",
    "title": "Tampil Semua Flight",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
    "group": "Flight",
    "name": "GetFlight",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200,\n  \"message\": \"success\",\n  \"result\": [\n    {\n        \"id_flight\": 14,\n        \"airplane_id\": 24,\n        \"departure_time\": \"14:30:00\",\n        \"arrival_time\": \"12:00:00\",\n        \"departure_date\": \"2017-10-22\",\n        \"arrival_date\": \"2017-10-22\",\n        \"destination\": \"Jakarta\",\n        \"total_seat\": 50,\n        \"price\": 100000,\n        \"airplane\": {\n            \"id_airplane\": 24,\n            \"airport_id\": 14,\n            \"plane_name\": \"Batik\",\n            \"total_seat\": 10\n        }\n    },\n    {\n        \"id_flight\": 24,\n        \"airplane_id\": 24,\n        \"departure_time\": \"00:12:34\",\n        \"arrival_time\": \"00:12:34\",\n        \"departure_date\": \"1234-01-01\",\n        \"arrival_date\": \"1234-01-01\",\n        \"destination\": \"Bandung\",\n        \"total_seat\": 1,\n        \"price\": 100000,\n        \"airplane\": {\n            \"id_airplane\": 24,\n            \"airport_id\": 14,\n            \"plane_name\": \"Batik\",\n            \"total_seat\": 10\n        }\n    },\n    {\n        \"id_flight\": 34,\n        \"airplane_id\": 34,\n        \"departure_time\": \"00:12:34\",\n        \"arrival_time\": \"00:12:34\",\n        \"departure_date\": \"1234-01-01\",\n        \"arrival_date\": \"1234-01-01\",\n        \"destination\": \"Bandung\",\n        \"total_seat\": 1,\n        \"price\": 100000,\n        \"airplane\": {\n            \"id_airplane\": 34,\n            \"airport_id\": 14,\n            \"plane_name\": \"Lion\",\n            \"total_seat\": 10\n        }\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc/flight.js",
    "groupTitle": "Flight"
  },
  {
    "type": "get",
    "url": "/api/1.0.0/flight/{id}",
    "title": "Tampil Detail Flight",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
    "group": "Flight",
    "name": "GetOneFlight",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200,\n  \"message\": \"success\",\n  \"result\": {\n        \"id_flight\": 34,\n        \"airplane_id\": 34,\n        \"departure_time\": \"00:12:34\",\n        \"arrival_time\": \"00:12:34\",\n        \"departure_date\": \"1234-01-01\",\n        \"arrival_date\": \"1234-01-01\",\n        \"destination\": \"Bandung\",\n        \"total_seat\": 1,\n        \"price\": 100000,\n        \"airplane\": {\n            \"id_airplane\": 34,\n            \"airport_id\": 14,\n            \"plane_name\": \"Lion\",\n            \"total_seat\": 10\n        }\n    }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc/flight.js",
    "groupTitle": "Flight"
  },
  {
    "type": "post",
    "url": "/api/1.0.0/flight",
    "title": "Tambah Flight",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
    "group": "Flight",
    "name": "SimpanFlight",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "airplane_id",
            "description": "<p>ID Airplane</p>"
          },
          {
            "group": "Parameter",
            "type": "Time",
            "optional": false,
            "field": "departure_time",
            "description": "<p>Departure Time</p>"
          },
          {
            "group": "Parameter",
            "type": "Time",
            "optional": false,
            "field": "arrival_time",
            "description": "<p>Arrival Time</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "departure_date",
            "description": "<p>Departure Date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "arrival_date",
            "description": "<p>Arrival Date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destination",
            "description": "<p>Destination</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "total_seat",
            "description": "<p>Total Seat</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "price",
            "description": "<p>Price</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200,\n  \"message\": \"success\",\n  \"result\": {\n      \"id_flight\": 34,\n      \"airplane_id\": \"34\",\n      \"departure_time\": \"1234\",\n      \"arrival_time\": \"1234\",\n      \"departure_date\": \"1234-01-01T00:00:00.000Z\",\n      \"arrival_date\": \"1234-01-01T00:00:00.000Z\",\n      \"destination\": \"Bandung\",\n      \"total_seat\": \"1\",\n      \"price\": \"100000\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Tambah error",
          "content": "HTTP/1.0 400 Internal Server Error\n{\n  \"status\": 400,\n  \"message\": \"error\",\n  \"result\": {\n   \"name\": \"SequelizeValidationError\",\n\"errors\": [\n   {\n       \"message\": \"id_flight cannot be null\",\n       \"type\": \"Validation error\",\n       \"path\": \"city\",\n       \"value\": \"\",\n       \"__raw\": {}\n   },\n   {\n       \"message\": \"price must be number\",\n       \"type\": \"Validation error\",\n       \"path\": \"city\",\n       \"value\": \"\",\n       \"__raw\": {}\n   },\n]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc/flight.js",
    "groupTitle": "Flight"
  },
  {
    "type": "post",
    "url": "/api/1.0.0/flight/edit",
    "title": "Update Flight",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
    "group": "Flight",
    "name": "UpdateFlight",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "airplane_id",
            "description": "<p>ID Airplane</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id_flight",
            "description": "<p>ID Flight that want to edit</p>"
          },
          {
            "group": "Parameter",
            "type": "Time",
            "optional": false,
            "field": "departure_time",
            "description": "<p>Departure Time</p>"
          },
          {
            "group": "Parameter",
            "type": "Time",
            "optional": false,
            "field": "arrival_time",
            "description": "<p>Arrival Time</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "departure_date",
            "description": "<p>Departure Date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "arrival_date",
            "description": "<p>Arrival Date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destination",
            "description": "<p>Destination</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "total_seat",
            "description": "<p>Total Seat</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "price",
            "description": "<p>Price</p>"
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
    "filename": "./apidoc/flight.js",
    "groupTitle": "Flight"
  },
  {
    "type": "get",
    "url": "/api/1.0.0/booking/invoices/list",
    "title": "Tampil Semua Invoice",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
    "group": "Invoice",
    "name": "GetInvoice",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n   {\n     \"status\": 200,\n     \"message\": \"success\",\n     \"result\": [\n   {\n       \"_id\": \"59ec9737e39a0c5d38a9e8ff\",\n       \"updated_at\": \"2017-10-22T13:03:51.429Z\",\n       \"created_at\": \"2017-10-22T13:03:51.429Z\",\n       \"id_passanger\": 44,\n       \"id_flight\": 14,\n       \"passanger_name\": \"Tioreza Febrian\",\n       \"email\": \"asd@yahoo.com\",\n       \"address\": \"asdasdasd\",\n       \"id_airplane\": \"24\",\n       \"departure_time\": \"14:30:00\",\n       \"arrival_time\": \"12:00:00\",\n       \"departure_date\": \"2017-10-22T00:00:00.000Z\",\n       \"arrival_date\": \"2017-10-22T00:00:00.000Z\",\n       \"destination\": \"Jakarta\",\n       \"price\": 100000,\n       \"plane_name\": \"Batik\",\n       \"id_airport\": 14,\n       \"airport_name\": \"Soekarno Hatta\",\n       \"city\": \"Jakarta\",\n       \"__v\": 0\n   },\n   {\n       \"_id\": \"59ec97b6c5518f877c326464\",\n       \"updated_at\": \"2017-10-22T13:05:58.754Z\",\n       \"created_at\": \"2017-10-22T13:05:58.754Z\",\n       \"id_booking\": 104,\n       \"id_passanger\": 44,\n       \"id_flight\": 14,\n       \"passanger_name\": \"Tioreza Febrian\",\n       \"email\": \"asd@yahoo.com\",\n       \"address\": \"asdasdasd\",\n       \"id_airplane\": \"24\",\n       \"departure_time\": \"14:30:00\",\n       \"arrival_time\": \"12:00:00\",\n       \"departure_date\": \"2017-10-22T00:00:00.000Z\",\n       \"arrival_date\": \"2017-10-22T00:00:00.000Z\",\n       \"destination\": \"Jakarta\",\n       \"price\": 100000,\n       \"plane_name\": \"Batik\",\n       \"id_airport\": 14,\n       \"airport_name\": \"Soekarno Hatta\",\n       \"city\": \"Jakarta\",\n       \"__v\": 0\n   }\n]\n     }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc/invoice.js",
    "groupTitle": "Invoice"
  },
  {
    "type": "get",
    "url": "/api/1.0.0/booking/invoices/{id}",
    "title": "Tampil Invoice",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
    "group": "Invoice",
    "name": "GetOneInvoice",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"_id\": \"59ec97b6c5518f877c326464\",\n    \"updated_at\": \"2017-10-22T13:05:58.754Z\",\n    \"created_at\": \"2017-10-22T13:05:58.754Z\",\n    \"id_booking\": 104,\n    \"id_passanger\": 44,\n    \"id_flight\": 14,\n    \"passanger_name\": \"Tioreza Febrian\",\n    \"email\": \"asd@yahoo.com\",\n    \"address\": \"asdasdasd\",\n    \"id_airplane\": \"24\",\n    \"departure_time\": \"14:30:00\",\n    \"arrival_time\": \"12:00:00\",\n    \"departure_date\": \"2017-10-22T00:00:00.000Z\",\n    \"arrival_date\": \"2017-10-22T00:00:00.000Z\",\n    \"destination\": \"Jakarta\",\n    \"price\": 100000,\n    \"plane_name\": \"Batik\",\n    \"id_airport\": 14,\n    \"airport_name\": \"Soekarno Hatta\",\n    \"city\": \"Jakarta\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc/invoice.js",
    "groupTitle": "Invoice"
  },
  {
    "type": "post",
    "url": "/api/1.0.0/passanger/delete",
    "title": "Delete Passanger",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
    "group": "Passanger",
    "name": "DeletePassanger",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id_passanger",
            "description": "<p>Id Passanger that want to delete</p>"
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
    "filename": "./apidoc/passanger.js",
    "groupTitle": "Passanger"
  },
  {
    "type": "get",
    "url": "/api/1.0.0/passanger/{id}",
    "title": "Tampil Detail Passanger",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
    "group": "Passanger",
    "name": "GetOnePassanger",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200,\n  \"message\": \"success\",\n  \"result\": {\n      \"id_passanger\": 123,\n      \"firstname\": \"Ade\",\n      \"lastname\": \"Lamy\",\n      \"email\": \"ade@outlook.com\",\n      \"address\": \"Jl.Dipatiukur\",\n      \"age\": 20\n  }\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc/passanger.js",
    "groupTitle": "Passanger"
  },
  {
    "type": "get",
    "url": "/api/1.0.0/passanger",
    "title": "Tampil Semua Passanger",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
    "group": "Passanger",
    "name": "GetPassanger",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": 200,\n  \"message\": \"success\",\n  \"result\": [{\n      \"id_passanger\": 123,\n      \"firstname\": \"Ade\",\n      \"lastname\": \"Lamy\",\n      \"email\": \"ade@outlook.com\",\n      \"address\": \"Jl.Dipatiukur\",\n      \"age\": 20\n  }]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./apidoc/passanger.js",
    "groupTitle": "Passanger"
  },
  {
    "type": "post",
    "url": "/api/1.0.0/passanger/edit",
    "title": "Update Passanger",
    "header": {
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"x-access-token\": token\n}",
          "type": "json"
        }
      ]
    },
    "group": "Passanger",
    "name": "UpdatePassanger",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id_passanger",
            "description": "<p>ID Passanger that want to delete</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Passsword</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "age",
            "description": "<p>Age</p>"
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
    "filename": "./apidoc/passanger.js",
    "groupTitle": "Passanger"
  }
] });
