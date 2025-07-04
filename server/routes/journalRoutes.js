const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  createEntry,
  getEntries,
  updateEntry,
  deleteEntry,
} = require('../controllers/journalController');

router.post('/', auth, createEntry);
router.get('/', auth, getEntries);
router.put('/:id', auth, updateEntry);
router.delete('/:id', auth, deleteEntry);

module.exports = router;
