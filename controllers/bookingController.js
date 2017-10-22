var db = require('../config/sequelize');

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
    this.simpan = (req,res) => {
      db.booking.create(req.body).then(data => {
        return res.json({status:200,message:'success',result:data});
      })
      .catch(error => {
          return res.json({status:400,message:'error',result:error});
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

        return res.json({status:400,message:'id not found',result:[]});
      })
      .catch(error => {
          return res.json({status:400,message:'error',result:error});
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

          return res.json({status:400,message:'id not found',result:[]});
      })
      .catch(error => {
          return res.json({status:400,message:'error',result:error});
      })
    }
}

module.exports = new Todo;
