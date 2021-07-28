// requires router to create routes
const router = require('express').Router();
const { Category, Product } = require('../../models');

// categories endpoint 
// finds all categories
router.get('/', async (req, res) => {
   try {
       const allCategories = await Category.findAll({
           include: [{ model: Product}]
       });
       
       res.status(200).json(allCategories)
   } catch (err) {
       res.status(500).json(err)
   }
});

// finds categories by id
router.get('/:id', async (req, res) => {
   try { 
       const categoryById = await Category.findByPk(req.params.id, {
           include: [{ model: Product}],
       });

       if (!categoryById) {
           res.status(404).json({ message: 'No category with that ID founf'});
           return;
        }
        res.status(200).json(categoryById)
   } catch(err) {
       res.status(500).json(err)
   }
});

// creates a new category
router.post('/', async (req, res) =>{
    try {
        const newCategory = await Category.create(req.body);
        res.status(200).json(newCategory)
    } catch (err) {
        res.status(400).json(err)
    }
})

// update category by id
router.put ('/:id', (req, res) => {

});

// delete category by id
router.delete('/:id', (req, res) => {

})

module.exports = router;