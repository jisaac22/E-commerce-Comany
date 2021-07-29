// requires router to create routes
const router = require('express').Router();

const { Category, Product } = require('../../models');

// categories endpoint 
// finds all categories
router.get('/', async (req, res) => {
    try {
        const allCategories = await Category.findAll({
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

Category.create({
    category_name: req.body.category_name
})
.then((newCategory) => {
    res.json(newCategory);
})
.catch((err) =>{
    res.json(err)
});
});
// update category by id
router.put('/:id', (req, res) => {
    Category.update(
        {
            category_name: req.body.category_name
        },
        {
            where: {
                id: req.params.id
            }
        }
    ).then((updatedCategory) => {
        res.json(updatedCategory)
    })
      .catch((err) => res.json(err));
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