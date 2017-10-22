var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Schema = new Schema({
	id_booking: Number,
	id_passanger: Number,
	passanger_name: String,
	email: String,
	address: String,
	id_flight: Number,
  departure_time: String,
  arrival_time: String,
  departure_date: Date,
  arrival_date : Date,
  destination: String,
  price: Number,
	id_airplane: String,
  plane_name: String,
  id_airport: Number,
  airport_name: String,
  City: String,
  State: String
});

mongoose.model("Invoice", Schema);
