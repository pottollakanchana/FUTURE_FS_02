const Lead = require("../models/lead");

// CREATE LEAD
exports.createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body);
    res.status(201).json(lead);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET ALL LEADS
exports.getLeads = async (req, res) => {
  try {
    const leads = await Lead.find();
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE STATUS
exports.updateLeadStatus = async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(lead);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ADD NOTE
exports.addNote = async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    lead.notes.push({ text: req.body.text });
    await lead.save();
    res.json(lead);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE LEAD
exports.deleteLead = async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ message: "Lead deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
