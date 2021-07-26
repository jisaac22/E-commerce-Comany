// requires category export from model folder
const { Category } = require('../models');

// creates array of objects for category data
const categoryData = [
    {
       category_name: 'Shirts'
    },
    {
       category_name: 'Shorts'
    },
    {
       category_name: 'Music'
    },
    {
       category_name: 'Hats'
    },
    {
       category_name: 'Shoes'
    },
];
// creates a bulk data for categories
const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;