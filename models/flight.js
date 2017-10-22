'use strict'

module.exports = (sequelize, DataTypes) => {
  const Flight = sequelize.define('flight', {
    id_flight: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    airplane_id: {
      type: DataTypes.INTEGER,
      validate : {
        notEmpty: {args:true,msg:'Id Airplane cannot be null'}
      }
    },
    departure_time: {
      type: DataTypes.TIME,
      validate : {
        notEmpty: {args:true,msg:'Departure Time cannot be null'}
      }
    },
    arrival_time : {
      type: DataTypes.TIME,
      validate : {
        notEmpty: {args:true,msg:'Arrival Time cannot be null'}
      }
    },
    departure_date : {
      type: DataTypes.DATE,
      validate : {
        notEmpty: {args:true,msg:'Departure Date cannot be null'}
      }
    },
    arrival_date : {
      type: DataTypes.DATE,
      validate : {
        notEmpty: {args:true,msg:'Arrival Date cannot be null'}
      }
    },
    destination : {
      type: DataTypes.STRING,
      validate : {
        notEmpty: {args:true,msg:'Destination cannot be null'}
      }
    },
    total_seat : {
      type: DataTypes.INTEGER,
      validate : {
        notEmpty: {args:true,msg:'Total Seat cannot be null'},
        isNumeric: {args:true,msg:'Total Seat must be number'}
      }
    },
    price : {
      type: DataTypes.INTEGER,
      validate : {
        notEmpty: {args:true,msg:'Price cannot be null'},
        isNumeric: {args:true,msg:'Price must be number'}
      }
    }
  }, {
    paranoid: true,
    underscored: true,
    tableName: 'flight',
    timestamps: false
  });

  return Flight;
};
