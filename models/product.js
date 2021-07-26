// require model for schema db and connection to run server
const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../;config/connection');

// creates table with columns
class Product extends Model {}

Product.init(
 {

 },
 {
     sequelize,
     timestamps: false,
     freezeTableName: true,
     underscored: true,
     modelName: 'product',
 }
)

module.exports = Product;