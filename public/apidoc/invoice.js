   /**
    * @api {get} /api/1.0.0/booking/invoices/list Tampil Semua Invoice
    * @apiHeaderExample {json} Header-Example:
 *     {
 *       "x-access-token": token
 *     }
    * @apiGroup Invoice
    * @apiName GetInvoice
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 200 OK
    *    {
    *      "status": 200,
    *      "message": "success",
    *      "result": [
            *    {
            *        "_id": "59ec9737e39a0c5d38a9e8ff",
            *        "updated_at": "2017-10-22T13:03:51.429Z",
            *        "created_at": "2017-10-22T13:03:51.429Z",
            *        "id_passanger": 44,
            *        "id_flight": 14,
            *        "passanger_name": "Tioreza Febrian",
            *        "email": "asd@yahoo.com",
            *        "address": "asdasdasd",
            *        "id_airplane": "24",
            *        "departure_time": "14:30:00",
            *        "arrival_time": "12:00:00",
            *        "departure_date": "2017-10-22T00:00:00.000Z",
            *        "arrival_date": "2017-10-22T00:00:00.000Z",
            *        "destination": "Jakarta",
            *        "price": 100000,
            *        "plane_name": "Batik",
            *        "id_airport": 14,
            *        "airport_name": "Soekarno Hatta",
            *        "city": "Jakarta",
            *        "__v": 0
            *    },
            *    {
            *        "_id": "59ec97b6c5518f877c326464",
            *        "updated_at": "2017-10-22T13:05:58.754Z",
            *        "created_at": "2017-10-22T13:05:58.754Z",
            *        "id_booking": 104,
            *        "id_passanger": 44,
            *        "id_flight": 14,
            *        "passanger_name": "Tioreza Febrian",
            *        "email": "asd@yahoo.com",
            *        "address": "asdasdasd",
            *        "id_airplane": "24",
            *        "departure_time": "14:30:00",
            *        "arrival_time": "12:00:00",
            *        "departure_date": "2017-10-22T00:00:00.000Z",
            *        "arrival_date": "2017-10-22T00:00:00.000Z",
            *        "destination": "Jakarta",
            *        "price": 100000,
            *        "plane_name": "Batik",
            *        "id_airport": 14,
            *        "airport_name": "Soekarno Hatta",
            *        "city": "Jakarta",
            *        "__v": 0
            *    }
            *]
    *      }
    */

    /**
     * @api {get} /api/1.0.0/booking/invoices/{id} Tampil Invoice
     * @apiHeaderExample {json} Header-Example:
  *     {
  *       "x-access-token": token
  *     }
     * @apiGroup Invoice
     * @apiName GetOneInvoice
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    {
     *        "_id": "59ec97b6c5518f877c326464",
     *        "updated_at": "2017-10-22T13:05:58.754Z",
     *        "created_at": "2017-10-22T13:05:58.754Z",
     *        "id_booking": 104,
     *        "id_passanger": 44,
     *        "id_flight": 14,
     *        "passanger_name": "Tioreza Febrian",
     *        "email": "asd@yahoo.com",
     *        "address": "asdasdasd",
     *        "id_airplane": "24",
     *        "departure_time": "14:30:00",
     *        "arrival_time": "12:00:00",
     *        "departure_date": "2017-10-22T00:00:00.000Z",
     *        "arrival_date": "2017-10-22T00:00:00.000Z",
     *        "destination": "Jakarta",
     *        "price": 100000,
     *        "plane_name": "Batik",
     *        "id_airport": 14,
     *        "airport_name": "Soekarno Hatta",
     *        "city": "Jakarta",
     *        "__v": 0
     *    }
     */
