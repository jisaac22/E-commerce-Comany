// requires router to create routes
const router = require('express').Router();
const { route } = require('../../../utsa-san-fsf-pt-04-2021-u-c/13-ORM/02-Homework/Develop/routes/api/category-routes');
const { Category, Product } = require('../../models');

// categories endpoint 
// finds all categories
router.get('/', (req, res) => {

});
// finds categories by id
router.get('/:id', (req, res) => {

});

// creates a new category
router.post('/', (req, res) =>{

})

// update category by id
router.put ('/:id', (req, res) => {

});

// delete category by id
router.delete('/:id', (req, res) => {

})

module.exports = router;