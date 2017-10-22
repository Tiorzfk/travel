/**
 * @api {post} /api/1.0.0/airplane/edit Update Airplane
 * @apiGroup Airplane
 * @apiName UpdateAirplane
 * @apiParam {Int} airport_id id airport
 * @apiParam {String} plane_name airplane name
 * @apiParam {Int} total_seat Total Seat
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
  * @api {post} /api/1.0.0/airplane/delete Delete Airplane
  * @apiGroup Airplane
  * @apiName DeleteAirplane
  * @apiParam {Int} id_airplane Id Airplane that want to delete
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
   * @api {post} /api/1.0.0/airplane Simpan Airplane
   * @apiGroup Airplane
   * @apiName SimpanAirplane
   * @apiParam {Int} airport_id id airport
   * @apiParam {String} plane_name airplane name
   * @apiParam {Int} total_seat Total Seat
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {
   *      "status": 200,
   *      "message": "success",
   *      "result": {
   *        'id_airplane': 123.
   *        'airport_id' : 42,
   *        'plane_name' : 'Lion',
   *        'total_seat' : 30
   *      }
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
    * @api {get} /api/1.0.0/airplane Tampil Semua Airplane
    * @apiGroup Airplane
    * @apiName GetAirplane
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
    *    {
    *      "status": 200,
    *      "message": "success",
    *      "result": [{
    *        'id_airplane': 123.
    *        'airport_id' : 42,
    *        'plane_name' : 'Lion',
    *        'total_seat' : 30,
    *         "airport": {
    *                 "id_airport": 14,
    *                 "airport_name": "Soekarno Hatta",
    *                 "city": "Jakarta",
    *                 "state": "Indonesia"
    *       },
    *       {
    *         "id_airplane": 34,
    *         "airport_id": 14,
    *         "plane_name": "asd",
    *         "total_seat": 10,
    *         "airport": {
    *               "id_airport": 14,
    *               "airport_name": "Ngurah Rai",
    *               "city": "Denpasar",
    *               "state": "Indonesia"
    *          }
    *       }]
    *      }
    *    }
    */

    /**
     * @api {get} /api/1.0.0/airplane/{id} Tampil Satu Airplane
     * @apiGroup Airplane
     * @apiName GetOneAirplane
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    {
     *      "status": 200,
     *      "message": "success",
     *      "result": {
     *        'id_airplane': 123.
     *        'airport_id' : 42,
     *        'plane_name' : 'Lion',
     *        'total_seat' : 30,
     *         "airport": {
     *                 "id_airport": 14,
     *                 "airport_name": "Soekarno Hatta",
     *                 "city": "Jakarta",
     *                 "state": "Indonesia"
     *       }
     *      }
     *    }
     */
