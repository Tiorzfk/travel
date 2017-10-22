var db = require('../config/sequelize');

function Todo () {
    this.index = (req,res) => {
      db.airport.findAll({}).then(data => {
          return res.json({status:200,message:'success',result:data});
      })
    }
    this.detail = (req,res) => {
      db.airport.findById(req.params.id).then(data => {
          return res.json({status:200,message:'success',result:data});
      })
      .catch(error => {
          return res.json({status:400,message:'error',result:error});
      })
    }
    this.simpan = (req,res) => {
      db.airport.create(req.body).then(data => {
        return res.json({status:200,message:'success',result:data});
      })
      .catch(error => {
          return res.json({status:400,message:'error',result:error});
      });
    }
    this.simpanEdit = (req,res) => {
      db.airport.update(req.body, {
        where: {
          id_airport: req.body.id_airport
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
      db.airport.destroy({
        where: {
          id_airport: req.body.id_airport
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
