'use strict'

module.exports = (sequelize, DataTypes) => {
  const Airplane = sequelize.define('airplane', {
    id_airplane: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    airport_id: {
      type: DataTypes.INTEGER
    },
    plane_name: {
      type: DataTypes.STRING
    },
    total_seat: {
      type: DataTypes.INTEGER
    }
  }, {
    paranoid: true,
    underscored: true,
    tableName: 'airplane',
    timestamps: false
  });

  return Airplane;
};
