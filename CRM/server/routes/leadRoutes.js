const express = require('express');
const router = express.Router();
const Lead = require('../models/lead');

// 1. READ: Get all leads
router.get('/', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2. CREATE: Add a new lead
router.post('/', async (req, res) => {
  const newLead = new Lead({
    name: req.body.name,
    email: req.body.email,
    source: req.body.source || 'Website Form'
  });
  try {
    const savedLead = await newLead.save();
    res.status(201).json(savedLead);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 3. UPDATE: Change lead status
router.put('/:id', async (req, res) => {
  try {
    const updatedLead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(updatedLead);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 4. DELETE: Remove a lead completely
router.delete('/:id', async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ message: "Lead deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
