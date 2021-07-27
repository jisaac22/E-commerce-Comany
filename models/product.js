// require model for schema db and connection to run server
const { Model, DataTypes } = require('sequelize');
const sequelize = require ('../;config/connection');

// creates table with columns
class Product extends Model {}

Product.init(
  {
    id: { 
       type: DataType.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true,
    },
    product_name: {
       type: DataType.STRING,
       allowNull: false
    },
    price: {
       type: DataType.DECIMAL(10, 2),
       allowNull: false,
    //    validates if input is a decimal
       validate: {
           isDecimal: true
       }
    },
    stock: {
        type: DataType.INTEGER,
        allowNull: false,
        // sets default value to 10
        defaultValue: 10,
        // validates if input is a number
        validate: {
            isNumeric: true
        }
    },
    category_id: {
        type: DataType.INTEGER,
        // reference category id for inner joins
        references: {
            model: 'category',
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
     modelName: 'product',
  }
  );

module.exports = Product;