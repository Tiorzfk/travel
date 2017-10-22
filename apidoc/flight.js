/**
 * @api {post} /api/1.0.0/flight/edit Update Flight
 * @apiGroup Flight
 * @apiName UpdateFlight
 * @apiParam {Int} airplane_id ID Airplane
 * @apiParam {Int} id_flight ID Flight that want to edit
 * @apiParam {Time} departure_time Departure Time
 * @apiParam {Time} arrival_time Arrival Time
 * @apiParam {Date} departure_date Departure Date
 * @apiParam {Date} arrival_date Arrival Date
 * @apiParam {String} destination Destination
 * @apiParam {Int} total_seat Total Seat
 * @apiParam {Int} price Price
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
  * @api {post} /api/1.0.0/flight/delete Delete Flight
  * @apiGroup Flight
  * @apiName DeleteFlight
  * @apiParam {Int} id_flight Id Flight that want to delete
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
   * @api {post} /api/1.0.0/flight Tambah Flight
   * @apiGroup Flight
   * @apiName SimpanFlight
   * @apiParam {Int} airplane_id ID Airplane
   * @apiParam {Time} departure_time Departure Time
   * @apiParam {Time} arrival_time Arrival Time
   * @apiParam {Date} departure_date Departure Date
   * @apiParam {Date} arrival_date Arrival Date
   * @apiParam {String} destination Destination
   * @apiParam {Int} total_seat Total Seat
   * @apiParam {Int} price Price
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {
   *      "status": 200,
   *      "message": "success",
   *      "result": {
  *          "id_flight": 34,
  *          "airplane_id": "34",
  *          "departure_time": "1234",
  *          "arrival_time": "1234",
  *          "departure_date": "1234-01-01T00:00:00.000Z",
  *          "arrival_date": "1234-01-01T00:00:00.000Z",
  *          "destination": "Bandung",
  *          "total_seat": "1",
  *          "price": "100000"
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
        *           "message": "id_flight cannot be null",
        *           "type": "Validation error",
        *           "path": "city",
        *           "value": "",
        *           "__raw": {}
        *       },
        *       {
        *           "message": "price must be number",
        *           "type": "Validation error",
        *           "path": "city",
        *           "value": "",
        *           "__raw": {}
        *       },
        *    ]
    *      }
   *    }
   */

   /**
    * @api {get} /api/1.0.0/flight Tampil Semua Flight
    * @apiGroup Flight
    * @apiName GetFlight
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
    *    {
    *      "status": 200,
    *      "message": "success",
    *      "result": [
    *        {
    *            "id_flight": 14,
    *            "airplane_id": 24,
    *            "departure_time": "14:30:00",
    *            "arrival_time": "12:00:00",
    *            "departure_date": "2017-10-22",
    *            "arrival_date": "2017-10-22",
    *            "destination": "Jakarta",
    *            "total_seat": 50,
    *            "price": 100000,
    *            "airplane": {
    *                "id_airplane": 24,
    *                "airport_id": 14,
    *                "plane_name": "Batik",
    *                "total_seat": 10
    *            }
    *        },
    *        {
    *            "id_flight": 24,
    *            "airplane_id": 24,
    *            "departure_time": "00:12:34",
    *            "arrival_time": "00:12:34",
    *            "departure_date": "1234-01-01",
    *            "arrival_date": "1234-01-01",
    *            "destination": "Bandung",
    *            "total_seat": 1,
    *            "price": 100000,
    *            "airplane": {
    *                "id_airplane": 24,
    *                "airport_id": 14,
    *                "plane_name": "Batik",
    *                "total_seat": 10
    *            }
    *        },
    *        {
    *            "id_flight": 34,
    *            "airplane_id": 34,
    *            "departure_time": "00:12:34",
    *            "arrival_time": "00:12:34",
    *            "departure_date": "1234-01-01",
    *            "arrival_date": "1234-01-01",
    *            "destination": "Bandung",
    *            "total_seat": 1,
    *            "price": 100000,
    *            "airplane": {
    *                "id_airplane": 34,
    *                "airport_id": 14,
    *                "plane_name": "Lion",
    *                "total_seat": 10
    *            }
    *        }
    *      ]
    *    }
    */

    /**
     * @api {get} /api/1.0.0/flight/{id} Tampil Detail Flight
     * @apiGroup Flight
     * @apiName GetOneFlight
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    {
     *      "status": 200,
     *      "message": "success",
     *      "result": {
    *            "id_flight": 34,
    *            "airplane_id": 34,
    *            "departure_time": "00:12:34",
    *            "arrival_time": "00:12:34",
    *            "departure_date": "1234-01-01",
    *            "arrival_date": "1234-01-01",
    *            "destination": "Bandung",
    *            "total_seat": 1,
    *            "price": 100000,
    *            "airplane": {
    *                "id_airplane": 34,
    *                "airport_id": 14,
    *                "plane_name": "Lion",
    *                "total_seat": 10
    *            }
    *        }
     *     }
     */
