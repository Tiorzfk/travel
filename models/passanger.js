'use strict'

module.exports = (sequelize, DataTypes) => {
  const Passanger = sequelize.define('passanger', {
    id_passanger: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstname: {
      type: DataTypes.STRING,
      validate : {
        notEmpty: {args:true,msg:'Firstname cannot be null'}
      }
    },
    lastname: {
      type: DataTypes.STRING,
      validate : {
        notEmpty: {args:true,msg:'Lastname cannot be null'}
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate : {
        notEmpty: {args:true,msg:'Email cannot be null'},
        isEmail: {args:true,msg:'Email is not valid'}
      }
    },
    password: {
      type: DataTypes.STRING,
      validate : {
        notEmpty: {args:true,msg:'Password cannot be null'}
      }
    },
    address: {
      type: DataTypes.TEXT
    },
    age: {
      type: DataTypes.INTEGER,
      validate : {
        isNumeric: {args:true,msg:'Age must be number'}
      }
    },
    status: {
      type: DataTypes.STRING
    },
    token: {
      type: DataTypes.STRING
    }
  }, {
    paranoid: true,
    underscored: true,
    tableName: 'passanger',
    timestamps: false
  });

  return Passanger;
};
