// require model for schema db and connection to run server
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// creates table with columns

class Tag extends Model {}

Tag.init(
  {
    id: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
      sequelize,
      timestamp: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'tag'
  }
);

module.exports = Tag