'use strict'

const Sequelize = require('sequelize');
const env = require('./env');
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  dialect: env.DATABASE_DIALECT,
  define: {
    underscored: true
  },
  operatorsAliases: false
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Op = Sequelize.Op;

//Models/tables
db.flight = require('../models/flight.js')(sequelize,Sequelize);
db.airplane = require('../models/airplane.js')(sequelize,Sequelize);
db.airport = require('../models/airport.js')(sequelize,Sequelize);
db.booking = require('../models/booking.js')(sequelize,Sequelize);
db.passanger = require('../models/passanger.js')(sequelize,Sequelize);

db.flight.belongsTo(db.airplane, {foreignKey: 'airplane_id'});
db.airplane.belongsTo(db.airport, {foreignKey: 'airport_id'});
db.booking.belongsTo(db.passanger, {foreignKey: 'passanger_id'});
db.booking.belongsTo(db.flight, {foreignKey: 'flight_id'});
// //Relations
// db.pets.belongsTo(db.owners);
// db.owners.hasMany(db.pets);

module.exports = db;
