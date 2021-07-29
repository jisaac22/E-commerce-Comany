const router = require('express').Router();
// require all exports from models folder
const { Tag, Product, ProductTag} = require('../../models');

// api/tags endpoints

// finds all tags
router.get('/', async (req, res) => {
  try {
      const allTags = await Tag.findAll() 
      res.status(200).json(allTags)
  } catch (err) {
      res.status(500).json(err)
  }
 
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