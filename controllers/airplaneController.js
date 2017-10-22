var db = require('../config/sequelize');

function Todo () {
    this.index = (req,res) => {
      db.airplane.findAll({include: [db.airport]}).then(data => {
          return res.json({status:200,message:'success',result:data});
      })
    }
    this.detail = (req,res) => {
      db.airplane.findById(req.params.id,{include: [db.airport]}).then(data => {
          return res.json({status:200,message:'success',result:data});
      })
      .catch(error => {
          return res.json({status:400,message:'error',result:error});
      })
    }
    this.simpan = (req,res) => {
      db.airplane.create(req.body).then(data => {
        return res.json({status:200,message:'success',result:data});
      })
      .catch(error => {
          return res.json({status:400,message:'error',result:error});
      });
    }
    this.simpanEdit = (req,res) => {
      db.airplane.update(req.body, {
        where: {
          id_airplane: req.body.id_airplane
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
      db.airplane.destroy({
        where: {
          id_airplane: req.body.id_airplane
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
