// requires router to create routes
const router = require('express').Router();
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