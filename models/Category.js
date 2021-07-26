// require model for schema db and connection to run server
const { Model, DataTypes } = require('sequelize');
const sequelize= require ('../config/connection.js');

// creates category table with columns
class Category extends Model {}

Category.init(
  {

  },
  {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',
  }
);

module.exports = Category;