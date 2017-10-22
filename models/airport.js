'use strict'

module.exports = (sequelize, DataTypes) => {
  const Airport = sequelize.define('airport', {
    id_airport: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    airport_name: {
      type: DataTypes.STRING
    },
    city: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.INTEGER
    }
  }, {
    paranoid: true,
    underscored: true,
    tableName: 'airport',
    timestamps: false
  });

  return Airport;
};
