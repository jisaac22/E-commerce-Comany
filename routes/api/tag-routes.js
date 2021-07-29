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
router.get('/:id', async (req, res) => {
    try {
      const tagById = await Tag.findByPk(req.params.id)
      
      if (!tagById){
        res.status(404).json({message: 'No tag with that ID'});
      }
      res.status(200).json(tagById)
    } catch (err) {
      res.status(500).json(err)
    }
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