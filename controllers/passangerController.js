var db = require('../config/sequelize');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var transport = require('../config/mailer').transport;

function Todo () {
    this.login = (req,res) => {
      db.passanger.findOne({where:{email : req.body.email}}).then(datacek => {
        if(datacek) {
          var cek = bcrypt.compareSync(req.body.password, datacek.password);
          if(cek) {
            if(datacek.status == 1)
              return res.json({status:200,message:'success',result:datacek});
            else
              return res.json({status:400,message:'Please Activated your account',result:[]});
            }
            return res.json({status:400,message:'username or password is wrong',result:cek});
        }else{
          return res.json({status:400,message:'username or password is wrong',result:[]});
        }
      });

    }

    this.index = (req,res) => {
        db.passanger.findAll({}).then(data => {
            return res.json({status:200,message:'success',result:data});
        })
    }
    this.detail = (req,res) => {
        db.passanger.findById(req.params.id).then(data => {
            return res.json({status:200,message:'success',result:data});
        })
        .catch(error => {
            return res.json({status:400,message:'error',result:error});
        })
    }
    this.register = (req,res) => {
      db.passanger.findOne({
        where: {
          email: req.body.email
        }
      }).then(data => {
          if(!data) {
            req.body.password = bcrypt.hashSync(req.body.password, 10);
            req.body['token'] = jwt.sign(req.body, 'AsyI8Ngw3OpzZ');
            db.passanger.create(req.body).then(data => {
              var mailOptions = {
                from: 'tiorezafebrian@gmail.com',
                to: data.email,
                subject: 'Travel - Confirmation Email',
                html: '<p>Click link bellow to confirm your email address</p><p><a href="http://localhost:3000/api/1.1/passanger/confirm/'+data.token+'">link<a></p>'
              };

              transport.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });

              return res.json({status:200,message:'success , please check your email address',result:data});
            })
            .catch(error => {
                return res.json({status:400,message:'error',result:error});
            });
          }else{
            return res.json({status:400,message:'email already exist',result:[]});
          }
      });

    }
    this.confirm = (req,res) => {
      jwt.verify(req.params.token, 'AsyI8Ngw3OpzZ', function(err, decoded) {
        if(err)
          return res.json({status:400,message:'error',result:err});

          db.passanger.update({status:"1"}, {
              where: {
                token: req.params.token
              }
          }).then(data => {
              if(data[0] == 1)
                return res.json({status:200,message:'success',result:[]});

              return res.json({status:400,message:'token is invalid',result:[]});
          })
          .catch(error => {
              return res.json({status:400,message:'error',result:error});
          })
      });
    }
    this.simpanEdit = (req,res) => {
      var data = {
        firstname : req.body.firstname,
        lastname  : req.body.lastname,
        email : req.body.email,
        password : req.body.password,
        address : req.body.address,
        age : req.body.age
      }
      db.passanger.update(data, {
        where: {
          id_passanger: req.body.id_passanger
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
      db.passanger.destroy({
        where: {
          id_passanger: req.body.id
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
