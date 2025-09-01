const express = require('express');
const Flower = require('../models/Flower');
const router = express.Router();

// Get all flowers
router.get('/', async (req, res) => {
  try {
    const { category, inStock, sortBy, sortOrder } = req.query;
    let query = {};

    // Filter by category
    if (category) {
      query.category = category;
    }

    // Filter by stock availability
    if (inStock !== undefined) {
      query.inStock = inStock === 'true';
    }

    // Build sort object
    let sort = {};
    if (sortBy) {
      sort[sortBy] = sortOrder === 'desc' ? -1 : 1;
    } else {
      sort = { createdAt: -1 }; // Default sort by newest
    }

    const flowers = await Flower.find(query).sort(sort);
    res.json(flowers);
  } catch (error) {
    console.error('Error fetching flowers:', error);
    res.status(500).json({ message: 'Error fetching flowers' });
  }
});

// Get single flower by ID
router.get('/:id', async (req, res) => {
  try {
    const flower = await Flower.findById(req.params.id);
    if (!flower) {
      return res.status(404).json({ message: 'Flower not found' });
    }
    res.json(flower);
  } catch (error) {
    console.error('Error fetching flower:', error);
    res.status(500).json({ message: 'Error fetching flower' });
  }
});

// Create new flower (Admin only)
router.post('/', async (req, res) => {
  try {
    const flower = new Flower(req.body);
    await flower.save();
    res.status(201).json(flower);
  } catch (error) {
    console.error('Error creating flower:', error);
    res.status(500).json({ message: 'Error creating flower' });
  }
});

// Update flower (Admin only)
router.put('/:id', async (req, res) => {
  try {
    const flower = await Flower.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!flower) {
      return res.status(404).json({ message: 'Flower not found' });
    }
    
    res.json(flower);
  } catch (error) {
    console.error('Error updating flower:', error);
    res.status(500).json({ message: 'Error updating flower' });
  }
});

// Delete flower (Admin only)
router.delete('/:id', async (req, res) => {
  try {
    const flower = await Flower.findByIdAndDelete(req.params.id);
    
    if (!flower) {
      return res.status(404).json({ message: 'Flower not found' });
    }
    
    res.json({ message: 'Flower deleted successfully' });
  } catch (error) {
    console.error('Error deleting flower:', error);
    res.status(500).json({ message: 'Error deleting flower' });
  }
});

// Get flowers by category
router.get('/category/:category', async (req, res) => {
  try {
    const flowers = await Flower.find({ category: req.params.category });
    res.json(flowers);
  } catch (error) {
    console.error('Error fetching flowers by category:', error);
    res.status(500).json({ message: 'Error fetching flowers' });
  }
});

module.exports = router;
