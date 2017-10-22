'use strict'

module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('booking', {
    id_booking: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    passanger_id: {
      type: DataTypes.INTEGER,
      validate : {
        notEmpty: {args:true,msg:'Id Passanger cannot be null'}
      }
    },
    flight_id: {
      type: DataTypes.INTEGER,
      validate : {
        notEmpty: {args:true,msg:'Id Flight cannot be null'}
      }
    },
    seat_number: {
      type: DataTypes.INTEGER,
      validate : {
        notEmpty: {args:true,msg:'Seat Number cannot be null'},
        isNumeric: {args:true,msg:'Total Seat must be number'}
      }
    },
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    deleted_at: DataTypes.DATE
  }, {
    paranoid: true,
    underscored: true,
    tableName: 'booking',
    timestamps: true
  });

  return Booking;
};
