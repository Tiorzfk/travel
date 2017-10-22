/**
 * @api {post} /api/1.0.0/booking/edit Update Booking
 * @apiHeaderExample {json} Header-Example:
*     {
*       "x-access-token": token
*     }
 * @apiGroup Booking
 * @apiName UpdateBooking
 * @apiParam {Int} id_booking ID Booking that want to edit
 * @apiParam {Int} passanger_id Passanger ID
 * @apiParam {Int} flight_id Flight ID
 * @apiParam {Int} seat_number Seat Number
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
  * @api {post} /api/1.0.0/booking/delete Delete Booking
  * @apiHeaderExample {json} Header-Example:
*     {
*       "x-access-token": token
*     }
  * @apiGroup Booking
  * @apiName DeleteBooking
  * @apiParam {Int} id_booking ID Booking that want to edit
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
   * @api {post} /api/1.0.0/booking Tambah Booking
   * @apiHeaderExample {json} Header-Example:
*     {
*       "x-access-token": token
*     }
   * @apiGroup Booking
   * @apiName SimpanBooking
   * @apiParam {Int} passanger_id Passanger ID
   * @apiParam {Int} flight_id Flight ID
   * @apiParam {Int} seat_number Seat Number
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {
   *      "status": 200,
   *      "message": "success",
   *      "result": {
    *          "id_booking": 104,
    *          "passanger_id": "44",
    *          "flight_id": "14",
    *          "seat_number": "92",
  *            "updated_at": "2017-10-22T13:05:58.518Z",
  *            "created_at": "2017-10-22T13:05:58.518Z"
  *        }
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
        *           "message": "passanger_id cannot be null",
        *           "type": "Validation error",
        *           "path": "passanger_id",
        *           "value": "",
        *           "__raw": {}
        *       }
        *    ]
    *      }
   *    }
   */

   /**
    * @api {get} /api/1.0.0/booking Tampil Semua Booking
    * @apiHeaderExample {json} Header-Example:
 *     {
 *       "x-access-token": token
 *     }
    * @apiGroup Booking
    * @apiName GetBooking
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
    *    {
    *      "status": 200,
    *      "message": "success",
    *      "result": [
    *          {
    *              "id_booking": 4,
    *              "passanger_id": 44,
    *              "flight_id": 24,
    *              "seat_number": 23,
    *              "passanger": {
    *                  "firstname": "Tioreza",
    *                  "lastname": "Febrian",
    *                  "email": "asd@yahoo.com",
    *                  "address": "asdasdasd",
    *                  "age": 12
    *              },
                  "flight": {
    *                  "id_flight": 24,
    *                  "airplane_id": 24,
    *                  "departure_time": "00:12:34",
    *                  "arrival_time": "00:12:34",
    *                  "departure_date": "1234-01-01",
    *                  "arrival_date": "1234-01-01",
    *                  "destination": "Bandung",
    *                  "total_seat": 1,
    *                  "price": 100000,
    *                  "airplane": {
    *                      "id_airplane": 24,
    *                      "airport_id": 14,
    *                      "plane_name": "Batik",
    *                      "total_seat": 10,
    *                      "airport": {
    *                          "id_airport": 14,
    *                          "airport_name": "Soekarno Hatta",
    *                          "city": "Jakarta",
    *                          "state": "Indonesia"
    *                      }
    *                  }
    *              }
    *          }
    *          {
    *              "id_booking": 5,
    *              "passanger_id": 44,
    *              "flight_id": 24,
    *              "seat_number": 23,
    *              "passanger": {
    *                  "firstname": "Asep",
    *                  "lastname": "Udin",
    *                  "email": "asep@yahoo.com",
    *                  "address": "asdasdasd",
    *                  "age": 12
    *              },
                  "flight": {
    *                  "id_flight": 24,
    *                  "airplane_id": 24,
    *                  "departure_time": "00:12:34",
    *                  "arrival_time": "00:12:34",
    *                  "departure_date": "1234-01-01",
    *                  "arrival_date": "1234-01-01",
    *                  "destination": "Jakarta",
    *                  "total_seat": 1,
    *                  "price": 100000,
    *                  "airplane": {
    *                      "id_airplane": 24,
    *                      "airport_id": 14,
    *                      "plane_name": "Batik",
    *                      "total_seat": 10,
    *                      "airport": {
    *                          "id_airport": 14,
    *                          "airport_name": "Soekarno Hatta",
    *                          "city": "Jakarta",
    *                          "state": "Indonesia"
    *                      }
    *                  }
    *              }
    *          }
          ]
    */

    /**
     * @api {get} /api/1.0.0/booking/{id} Tampil Detail Booking
     * @apiHeaderExample {json} Header-Example:
  *     {
  *       "x-access-token": token
  *     }
     * @apiGroup Booking
     * @apiName GetOneBooking
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    {
     *      "status": 200,
     *      "message": "success",
     *      "result": {
     *              "id_booking": 5,
     *              "passanger_id": 44,
     *              "flight_id": 24,
     *              "seat_number": 23,
     *              "passanger": {
     *                  "firstname": "Asep",
     *                  "lastname": "Udin",
     *                  "email": "asep@yahoo.com",
     *                  "address": "asdasdasd",
     *                  "age": 12
     *              },
     *             "flight": {
     *                  "id_flight": 24,
     *                  "airplane_id": 24,
     *                  "departure_time": "00:12:34",
     *                  "arrival_time": "00:12:34",
     *                  "departure_date": "1234-01-01",
     *                  "arrival_date": "1234-01-01",
     *                  "destination": "Jakarta",
     *                  "total_seat": 1,
     *                  "price": 100000,
     *                  "airplane": {
     *                      "id_airplane": 24,
     *                      "airport_id": 14,
     *                      "plane_name": "Batik",
     *                      "total_seat": 10,
     *                      "airport": {
     *                          "id_airport": 14,
     *                          "airport_name": "Soekarno Hatta",
     *                          "city": "Jakarta",
     *                          "state": "Indonesia"
     *                      }
     *                  }
     *              }
     *          }
     *     }
     */
