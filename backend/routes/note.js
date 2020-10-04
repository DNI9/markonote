import express from 'express';
const router = express.Router();
import Note from '../models/Note.js';

// @route   GET    /api/notes
// @desc    Get single note
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.json(note);
  } catch (err) {
    console.error(err.message);
    req.status(500).send('Server error!');
  }
});

// @route   POST    /api/notes
// @desc    add new note
// @access  public
router.post('/', async (req, res) => {
  const {noteName, markdown, author} = req.body;
  try {
    const newNote = new Note({noteName, markdown, author});
    const note = await newNote.save();
    res.json({msg: 'Note Saved', note: note});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error!');
  }
});

export default router;
