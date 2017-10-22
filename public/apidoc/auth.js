/**
 * @api {post} /api/1.0.0/register Register
 * @apiGroup Authenticate
 * @apiName Register
 * @apiParam {String} firstname Firstname
 * @apiParam {String} lastname Lastname
 * @apiParam {String} email Email
 * @apiParam {String} password Passsword
 * @apiParam {String} address Address
 * @apiParam {Int} age Age
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *      "status": 200,
 *      "message": "success , please check your email address",
 *      "result": {
*          "firstname": "Ade",
*          "lastname": "Lamy",
*          "email": "ade@outlook.com",
*          "address": "Jl.Dipatiukur",
*          "age": 20
*       }
 *    }
 * @apiErrorExample {json} Tambah error
 *    HTTP/1.0 400 Internal Server Error
 *    {
 *      "status": 400,
 *      "message": "error",
 *      "result": {
  *       "name": "SequelizeValidationError",
      *    "errors": [
      *       {
      *           "message": "email already exist",
      *           "type": "Validation error",
      *           "path": "email",
      *           "value": "",
      *           "__raw": {}
      *       }
      *    ]
  *      }
 *    }
 */

 /**
  * @api {post} /api/1.0.0/login Login
  * @apiGroup Authenticate
  * @apiName Login
  * @apiParam {String} email Email
  * @apiParam {String} password Passsword
  * @apiSuccessExample {json} Success
  *    HTTP/1.1 200 OK
  *    {
  *      "status": 200,
  *      "message": "success , please check your email address",
  *      "result": {
  *          "id_passanger": 284,
  *          "firstname": "Bambang",
  *          "lastname": "Guna",
  *          "email": "bambang@email.unikom.ac.id",
  *          "address": "Jl.Dipatiukur",
  *          "age": 12,
  *          "status": "0",
  *          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdG5hbWUiOiJHYWdhIiwibGFzdG5hbWUiOiJMYWR5IiwiZW1haWwiOiJ0aW9yemZrQGVtYWlsLnVuaWtvbS5hYy5pZCIsInBhc3N3b3JkIjoiJDJhJDEwJFEyZE5kUDdvdWtqNy9tcjFybU45YnV4L2VwZHFnNlJaSVZRb25FeUFiN0EwR29KT3YxSmVPIiwiYWRkcmVzcyI6ImFzZGFzZGFzZCIsImFnZSI6IjEyIiwiaWF0IjoxNTA4NjQ1MTQ5LCJleHAiOjE1MDg3MzE1NDl9.z1wIhUDDiZzGLfIe6K-HjiybHN_W6H86zl6_27qEzcQ"
  *      }
  *    }
  * @apiErrorExample {json} Register Error Username or Password
  *    HTTP/1.0 400 Internal Server Error
  *    {
  *      "status": 400,
  *      "message": "error",
  *      "result": {
   *        "status": 400,
  *         "message": "username or password is wrong",
  *          "message": []
  *      }
  *    }
  * @apiErrorExample {json} Register Error Email Activated
  *    HTTP/1.0 400 Internal Server Error
  *    {
  *      "status": 400,
  *      "message": "error",
  *      "result": {
   *        "status": 400,
  *         "message": "Please Activated your account",
  *          "message": []
  *      }
  *    }
  */

  /**
   * @api {post} /api/1.0.0/confirm Confirm
   * @apiHeaderExample {json} Header-Example:
*     {
*       "x-access-token": token
*     }
   * @apiGroup Authenticate
   * @apiName Confirm Email
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {
   *      "status": 200,
   *      "message": "success",
   *      "status": "1"
   *    }
   * @apiErrorExample {json} Tambah error
   *    HTTP/1.0 400 Internal Server Error
   *    {
   *      "status": 400,
   *      "message": "error",
   *      "result": {
    *        "status": 400,
   *         "message": "token is invalid,
   *          "message": []
   *      }
   *    }
   */
