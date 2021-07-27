// require model for schema db and connection to run server
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// creates table with columns 
class ProductTag extends Model {}

ProductTag.init(
   {
     id: { 
       type: DataType.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true
     },
     product_id: {
       type: DataType.INTEGER,
    // references product id for inner join
        references: {
            model: 'product',
            key: 'id',
            unique: false
        }
     },
     tag_id: {
         type: DataType.INTEGER,
        //  references tag id for inner join
         references: {
             model: 'tag',
             key: 'id',
             unique: false
         }
     }
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