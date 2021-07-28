// requires sequelize to use database from javascript
const Sequelize = require('sequelize');
// pulls data from .env file
require('dotenv').config();


let sequelize;

if ( process.env.JAWSDB_URL) {
   sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      dialectOptions: {
        decimalNumbers: true,
      },
  });
  }
module.exports = sequelize;