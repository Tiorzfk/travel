'use strict';
//   require('dotenv').config();
// const env = {
//   PORT: process.env.PORT || 8089,
//   DATABASE_NAME: process.env.DATABASE_NAME || 'medicare',
//   DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
//   DATABASE_USERNAME: process.env.DATABASE_USERNAME || 'root',
//   DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || '',
//   DATABASE_PORT: process.env.DATABASE_PORT || 3306,
//   DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',
//
//   NODE_ENV: process.env.NODE_ENV || 'development',
// };

const env = {
  PORT: process.env.PORT || 8089,
  DATABASE_NAME: 'travel',
  DATABASE_HOST: 'ap-cdbr-azure-southeast-b.cloudapp.net',
  DATABASE_USERNAME: 'b2be66a7b608ea',
  DATABASE_PASSWORD: '1740b650',
  DATABASE_PORT: 3306,
  DATABASE_DIALECT: 'mysql'
};


module.exports = env;
