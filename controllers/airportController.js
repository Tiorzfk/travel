var db = require('../config/sequelize');

function Todo () {
    this.index = (req,res) => {
      db.airport.findAll({}).then(data => {
          return res.json({status:200,message:'success',result:data});
      })
    }
    this.detail = (req,res) => {

    }
    this.simpan = (req,res) => {

    }
    this.simpanEdit = (req,res) => {

    }
}

module.exports = new Todo;
