/**
 * @api {post} /api/1.0.0/airport/edit Update Airport
 * @apiGroup Airport
 * @apiName UpdateAirport
 * @apiParam {String} airport_name Airport Name
 * @apiParam {String} city City
 * @apiParam {String} state State
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
  * @api {post} /api/1.0.0/airplane/delete Delete Airport
  * @apiGroup Airport
  * @apiName DeleteAirport
  * @apiParam {Int} id_airport Id Airport that want to delete
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
   * @api {post} /api/1.0.0/airplane Tambah Airport
   * @apiGroup Airport
   * @apiName SimpanAirport
   * @apiParam {String} airport_name Airport Name
   * @apiParam {String} city City
   * @apiParam {String} state State
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {
   *      "status": 200,
   *      "message": "success",
   *      "result": {
   *        'id_airport': 123.
   *        'city' : 'Bandung',
   *        'state' : 'Indonesia'
   *      }
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
        *           "message": "city cannot be null",
        *           "type": "Validation error",
        *           "path": "city",
        *           "value": "",
        *           "__raw": {}
        *       }
        *    ]
    *      }
   *    }
   */

   /**
    * @api {get} /api/1.0.0/airplane Tampil Semua Airport
    * @apiGroup Airport
    * @apiName GetAirport
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
    *    {
    *      "status": 200,
    *      "message": "success",
    *      "result": [
    *        {
    *            "id_airport": 14,
    *            "airport_name": "Soekarno Hatta",
    *            "city": "Jakarta",
    *            "state": "Indonesia"
    *        }]
    *      }
    */

    /**
     * @api {get} /api/1.0.0/airplane/{id} Tampil Detail Airport
     * @apiGroup Airport
     * @apiName GetOneAirport
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    {
     *      "status": 200,
     *      "message": "success",
     *      "result": {
    *          "id_airport": 14,
    *          "airport_name": "Soekarno Hatta",
    *          "city": "Jakarta",
    *          "state": "Indonesia"
    *        }
     *     }
     */
