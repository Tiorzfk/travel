var db = require('../config/sequelize');
var invoice = require('mongoose').model('Invoice');

function Todo () {
    this.index = (req,res) => {
      db.booking.findAll({
          attributes:['passanger_id','flight_id','seat_number'],
          include: [{
            model: db.passanger,
            attributes: ['firstname','lastname','email','address','age']
          },{
            model:db.flight
          }],

        }).then(data => {
          return res.json({status:200,message:'success',result:data});
      })
    }
    this.detail = (req,res) => {
      db.booking.findById(req.params.id,{
          attributes:['id_booking','passanger_id','flight_id','seat_number'],
          include: [{
            model: db.passanger,
            attributes: ['firstname','lastname','email','address','age']
          },{
            model:db.flight,
            include: [{
              model: db.airplane,
              include: [db.airport]
            }]
          }],

        }).then(data => {
          return res.json({status:200,message:'success',result:data});
      })
    }
    this.simpan = (req,res) => {
      db.booking
      .build(req.body)
      .save()
      .then(data => {

            db.booking.findById(data.id_booking,{
                attributes:['id_booking','passanger_id','flight_id','seat_number'],
                include: [{
                  model: db.passanger,
                  attributes: ['firstname','lastname','email','address','age']
                },{
                  model:db.flight,
                  include: [{
                    model: db.airplane,
                    include: [db.airport]
                  }]
                }],

              }).then(book => {
                var dataSimpan = {
                    id_booking: book.id_booking,
                    id_passanger: book.passanger_id,
                    id_flight: book.flight_id,
                    passanger_name: book.passanger.firstname+' '+ book.passanger.lastname,
                    email: book.passanger.email,
                    address: book.passanger.address,
                    id_airplane: book.flight.airplane_id,
                    departure_time: book.flight.departure_time,
                    arrival_time: book.flight.arrival_time,
                    departure_date: book.flight.departure_date,
                    arrival_date: book.flight.arrival_date,
                    destination: book.flight.destination,
                    price: book.flight.price,
                    plane_name: book.flight.airplane.plane_name,
                    id_airport: book.flight.airplane.airport_id,
                    airport_name: book.flight.airplane.airport.airport_name,
                    city: book.flight.airplane.airport.city,
                    state: book.flight.airplane.airport.state

                }
                var invoices = new invoice(dataSimpan);
                invoices.save(function(err,data) {
                    if (err) {
                        console.log(err);
                    }

                    console.log('Invoice '+data);
                });
            });

            return res.json({status:200,message:'success',result:data});
      })
      .catch(error => {
          return res.json({status:500,message:'error',result:error});
      });
    }
    this.simpanEdit = (req,res) => {
      db.booking.update(req.body, {
        where: {
          id_booking: req.body.id_booking
        }
      }).then(data => {
        if(data[0] == 1)
          return res.json({status:200,message:'success',result:[]});

        return res.json({status:500,message:'id not found',result:[]});
      })
      .catch(error => {
          return res.json({status:500,message:'error',result:error});
      })
    }
    this.delete = (req,res) => {
      db.booking.destroy({
        where: {
          id_booking: req.body.id_booking
        }
      }).then(data => {
          if(data == 1)
            return res.json({status:200,message:'success',result:[]});

          return res.json({status:500,message:'id not found',result:[]});
      })
      .catch(error => {
          return res.json({status:500,message:'error',result:error});
      })
    }

    this.invoice = (req,res) => {
      invoice.find({}, (err, data)=> {
          if(err)
              return res.json({status:500,message:'error',result:[]})

          return res.json({status:200,message:'success',result:data})
      });
    }

    this.invoiceId = (req,res) => {
      invoice.findOne({id_booking:req.params.id}, (err, data)=> {
          if(err)
              return res.json({status:500,message:'error',result:[]})

          return res.json({status:200,message:'success',result:data})
      });
    }
}

module.exports = new Todo;
