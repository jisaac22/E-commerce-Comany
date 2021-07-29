const router = require('express').Router();
// require all exports from models folder
const { Tag, Product, ProductTag} = require('../../models');

// api/tags endpoints

// finds all tags
router.get('/', async (req, res) => {
  try {
      const allTags = await Tag.findAll({
        include: [{ model: Product }]
      }) 
      res.status(200).json(allTags)
  } catch (err) {
      res.status(500).json(err)
  }
 
});
// finds tags by id
router.get('/:id', async (req, res) => {
    try {
      const tagById = await Tag.findByPk(req.params.id, {
        include: [{ model: Product }]
      })
      
      if (!tagById){
        res.status(404).json({message: 'No tag with that ID'});
      }
      res.status(200).json(tagById)
    } catch (err) {
      res.status(500).json(err)
    }
});
// creates a new tag
router.post('/', async (req, res) =>{
  try {
    const createTag = await Tag.create(req.body);
    res.status(200).json(createTag)
  } catch (err){
    res.status(400).json(err)
  }
});
// updates tag by id
router.put('/:id', async (req, res) => {
    try {
      const updateTag = await Tag.update(req.body, {
        where: {
          id: req.params.id,
        }
      })
      if (!updateTag){
        res.status(400).json({message: 'No tag with that id'});
        return;
      }
      res.status(200).json(updateTag)
    } catch (err){
      res.status(500).json(err)
    }
});
// deletes tag by id
router.delete('/:id', async (req, res) =>{
  try {
    const deleteId = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!deleteId){
      res.status(404).json({ message: 'No category with that ID'})
      return;
    }
    res.status(200).json(deleteId);
  } catch (err){
    res.status(500).json(err)
  }
});

module.exports = router;