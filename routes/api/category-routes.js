// requires router to create routes
const router = require('express').Router();

const { Category, Product } = require('../../models');

// categories endpoint 
// finds all categories
router.get('/', async (req, res) => {
    try {
        const allCategories = await Category.findAll({
            // includes associated products
            include: [{ model: Product }]
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
             // includes associated products
            include: [{ model: Product }],
        });

        if (!categoryById) {
            res.status(404).json({ message: 'No category with that ID found' });
            return;
        }
        res.status(200).json(categoryById)
    } catch (err) {
        res.status(500).json(err)
    }
});

// creates a new category
router.post('/', async (req, res) => {
   try {
       const newCategory = await Category.create(req.body);
       res.status(200).json(newCategory)
   } catch (err){
       res.status(400).json(err)
   }


})





// update category by id
router.put('/:id', async (req, res) => {
    try {
      const updatedCategory = await Category.update(req.body, {
           where: {
               id: req.params.id,
           }
      })
      if (!updatedCategory){
          res.status(404).json({message:'No Category with that ID'})
          return;
      }
      res.status(200).json(updatedCategory)
    } catch (err){
        res.status(500).json(err)
    }      
});

// delete category by id
router.delete('/:id', async (req, res) => {
     try {
         const deleteCategory = await Category.destroy({
             where: {
                 id: req.params.id
             }
         });

         if (!deleteCategory) {
             res.status(404).json({ message: "No category with that ID"})
             return;
        }
        res.status(200).json(deleteCategory);
     } catch (err){
         res.status(500).json(err)
     }
})

module.exports = router;