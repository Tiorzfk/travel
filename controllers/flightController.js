var db = require('../config/sequelize');

function Todo () {
    this.index = (req,res) => {
      db.flight.findAll({include: [db.airplane]}).then(data => {
          return res.json({status:200,message:'success',result:data});
      })
    }
    this.detail = (req,res) => {
      db.flight.findById(req.params.id,{include: [db.airplane]}).then(data => {
          return res.json({status:200,message:'success',result:data});
      })
      .catch(error => {
          return res.json({status:400,message:'error',result:error});
      })
    }
    this.simpan = (req,res) => {
      db.flight.create(req.body).then(data => {
        return res.json({status:200,message:'success',result:data});
      })
      .catch(error => {
          return res.json({status:400,message:'error',result:error});
      });
    }
    this.simpanEdit = (req,res) => {
      db.flight.update(req.body, {
        where: {
          id_flight: req.body.id_flight
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
      db.flight.destroy({
        where: {
          id_flight: req.body.id_flight
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
