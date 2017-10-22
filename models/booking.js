'use strict'

module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('booking', {
    id_booking: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    passanger_id: {
      type: DataTypes.INTEGER
    },
    flight_id: {
      type: DataTypes.INTEGER
    },
    seat_number: {
      type: DataTypes.INTEGER
    }
  }, {
    paranoid: true,
    underscored: true,
    tableName: 'booking',
    timestamps: true
  });

  return Booking;
};
