'use strict'

module.exports = (sequelize, DataTypes) => {
  const Flight = sequelize.define('flight', {
    id_flight: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    airplane_id: {
      type: DataTypes.INTEGER
    },
    departure_time: {
      type: DataTypes.TIME
    },
    arrival_time : {
      type: DataTypes.TIME
    },
    departure_date : {
      type: DataTypes.DATE
    },
    arrival_date : {
      type: DataTypes.DATE
    },
    destination : {
      type: DataTypes.STRING
    },
    total_seat : {
      type: DataTypes.INTEGER
    },
    price : {
      type: DataTypes.INTEGER
    }
  }, {
    paranoid: true,
    underscored: true,
    tableName: 'flight',
    timestamps: false
  });

  return Flight;
};
