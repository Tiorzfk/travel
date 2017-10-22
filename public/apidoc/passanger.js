/**
 * @api {post} /api/1.0.0/passanger/edit Update Passanger
 * @apiGroup Passanger
 * @apiName UpdatePassanger
 * @apiParam {Int} id_passanger ID Passanger that want to delete
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
 *      "message": "success",
 *      "result": []
 *    }
 * @apiErrorExample {json} Delete error
 *    HTTP/1.0 500 Internal Server Error
 *    {
 *      "status": 500,
 *      "message": "error",
 *      "result": error
 *    }
 */

 /**
  * @api {post} /api/1.0.0/passanger/delete Delete Passanger
  * @apiGroup Passanger
  * @apiName DeletePassanger
  * @apiParam {Int} id_passanger Id Passanger that want to delete
  * @apiSuccessExample {json} Success
  *    HTTP/1.1 200 OK
  *    {
  *      "status": 200,
  *      "message": "success",
  *      "result": []
  *    }
  * @apiErrorExample {json} Delete error
  *    HTTP/1.0 500 Internal Server Error
  *    {
  *      "status": 500,
  *      "message": "error",
  *      "result": error
  *    }
  */

   /**
    * @api {get} /api/1.0.0/passanger Tampil Semua Passanger
    * @apiGroup Passanger
    * @apiName GetPassanger
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
    *    {
    *      "status": 200,
    *      "message": "success",
    *      "result": [{
   *          "id_passanger": 123,
   *          "firstname": "Ade",
   *          "lastname": "Lamy",
   *          "email": "ade@outlook.com",
   *          "address": "Jl.Dipatiukur",
   *          "age": 20
    *      }]
    *    }
    */

    /**
     * @api {get} /api/1.0.0/passanger/{id} Tampil Detail Passanger
     * @apiGroup Passanger
     * @apiName GetOnePassanger
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    {
     *      "status": 200,
     *      "message": "success",
     *      "result": {
    *          "id_passanger": 123,
    *          "firstname": "Ade",
    *          "lastname": "Lamy",
    *          "email": "ade@outlook.com",
    *          "address": "Jl.Dipatiukur",
    *          "age": 20
     *      }
     *     }
     */
