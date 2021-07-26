// require model for schema db and connection to run server
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// creates table with columns 
class ProductTag extends Model {}

ProductTag.init(
   {

   },
   {
       sequelize,
       timestamps: false,
       freezeTableName: true,
       underscored: true,
       modelName: 'product_tag'
   }
);

module.exports = ProductTag;