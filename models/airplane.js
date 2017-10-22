'use strict'

module.exports = (sequelize, DataTypes) => {
  const Airplane = sequelize.define('airplane', {
    id_airplane: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    airport_id: {
      type: DataTypes.INTEGER,
      validate : {
        notEmpty: {args:true,msg:'Id Airport cannot be null'}
      }
    },
    plane_name: {
      type: DataTypes.STRING,
      validate : {
        notEmpty: {args:true,msg:'Airplane Name cannot be null'}
      }
    },
    total_seat: {
      type: DataTypes.INTEGER,
      validate : {
        notEmpty: {args:true,msg:'Total Seat cannot be null'},
        isNumeric: {args:true,msg:'Total Seat must be number'}
      }
    }
  }, {
    paranoid: true,
    underscored: true,
    tableName: 'airplane',
    timestamps: false
  });

  return Airplane;
};
