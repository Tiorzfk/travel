'use strict'

module.exports = (sequelize, DataTypes) => {
  const Airport = sequelize.define('airport', {
    id_airport: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    airport_name: {
      type: DataTypes.STRING,
      validate : {
        notEmpty: {args:true,msg:'Airport Name cannot be null'}
      }
    },
    city: {
      type: DataTypes.STRING,
      validate : {
        notEmpty: {args:true,msg:'City cannot be null'}
      }
    },
    state: {
      type: DataTypes.INTEGER,
      validate : {
        notEmpty: {args:true,msg:'State cannot be null'}
      }
    }
  }, {
    paranoid: true,
    underscored: true,
    tableName: 'airport',
    timestamps: false
  });

  return Airport;
};
