import express from 'express';
const router = express.Router();
import Note from '../models/Note.js';
import mongoose from 'mongoose';

// @route   GET    /api/notes
// @desc    Get single note
// @access  Public
router.get('/:id', async (req, res) => {
  const isIdValid = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!isIdValid)
    return res
      .status(400)
      .json({code: 'INVALID_ID', msg: 'dat note id is not valid'});
  try {
    const note = await Note.findById(req.params.id);
    if (note) {
      return res.json({code: 'GET_NOTE', data: note});
    }
    if (!note)
      return res
        .status(400)
        .json({code: 'NOT_FOUND', msg: 'No note found with this id'});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error!');
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
    res.json({code: 'SAVE_NOTE', msg: 'Note Saved', data: note});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error!');
  }
});

// @route   POST    /api/notes
// @desc    Update note
// @access  public
router.put('/:id', async (req, res) => {
  const {noteName, markdown, author} = req.body;
  try {
    const updatedNote = {noteName, markdown, author};
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      {$set: updatedNote},
      {new: true}
    );
    res.json({code: 'UPDATE_NOTE', msg: 'Note Updated', data: note});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error!');
  }
});

export default router;
