const router = require('express').Router();
// require all exports from models folder
const { Tag, Product, ProductTag} = require('../../models');

// api/tags endpoints

// finds all tags
router.get('/', (req, res) => {

});
// finds tags by id
router.get('/:id', (req, res) => {

});
// creates a new tag
router.post('/', (req, res) =>{

});
// updates tag by id
router.put('/:id', (req, res) => {

});
// deletes tag by id
router.delete('/:id', (req, res) =>{

});

module.exports = router;