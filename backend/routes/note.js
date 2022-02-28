import express from 'express';
import Note from '../models/Note.js';
const router = express.Router();

// @route   GET    /api/notes/:id
// @desc    Get single note
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res
        .status(404)
        .json({code: 'NOT_FOUND', msg: 'No note found with this id'});
    }
    return res.json({code: 'GET_NOTE', data: note});
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
    return res.json({code: 'SAVE_NOTE', msg: 'Note Saved', data: note});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error!');
  }
});

// @route   PUT    /api/notes/:id
// @desc    Update note
// @access  public
router.put('/:id', async (req, res) => {
  try {
    const updatedNote = {};
    Object.keys(req.body).forEach(key => {
      updatedNote[key] = req.body[key];
    });

    const note = await Note.findByIdAndUpdate(
      req.params.id,
      {$set: updatedNote},
      {new: true}
    );

    if (!note) {
      return res
        .status(404)
        .json({code: 'NOT_FOUND', msg: 'No note found with this id'});
    }
    return res.json({code: 'UPDATE_NOTE', msg: 'Note Updated', data: note});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error!');
  }
});

export default router;
