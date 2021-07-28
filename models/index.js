// imports models
const Product = require('./product');
const Category = require('./Category');
const Tag = require('./tag');
const ProductTag = require('./productTag');

Category.hasMany(Product, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});

Product.belongsTo(Category, {
    foreignKey: 'category_id'
});

Product.belongsToMany(Tag, {
    through: {
    model: ProductTag,
    unique: false
    },
    as: 'productToTag' 
})

Tag.belongsToMany(Product, {
    through: {
    model: ProductTag,
    unique: false
    },
    as: 'tagToProduct'
})


module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};