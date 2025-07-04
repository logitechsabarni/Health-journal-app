const Journal = require('../models/Journal');

exports.createEntry = async (req, res) => {
  try {
    const entry = new Journal({ ...req.body, user: req.user });
    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create entry' });
  }
};

exports.getEntries = async (req, res) => {
  const entries = await Journal.find({ user: req.user }).sort({ date: -1 });
  res.json(entries);
};

exports.updateEntry = async (req, res) => {
  const updated = await Journal.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteEntry = async (req, res) => {
  await Journal.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
};
