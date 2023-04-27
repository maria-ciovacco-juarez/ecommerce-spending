const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({
        message: 'No product found with that name!'
      });
      return;
    }

    res.status(200).json
      (categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryNew = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json
      (categoryNew);
  } catch (err) {
    res.status(400).json(err);
  }

});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
 try {
    // Find the category to update by ID
    const categoryToUpdate = await Category.findByPk(req.params.id);
    if (!categoryToUpdate) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    // Update the category with the new category_name
    const updatedCategory = await categoryToUpdate.update({
      category_name: req.body.category_name,
    });
    // Send back the updated category object as JSON
    res.status(200).json(updatedCategory);
  } catch (err) {
    // Handle any errors that occur during the update process
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
