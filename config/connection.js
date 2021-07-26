// pulls data from .env file
require('dotenv').config();
// requires sequelize to use database from javascript
const Sequelize = require('sequelize');
// pulls users info from .env file to run server 
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
// exports sequelize
module.exports = sequelize;
