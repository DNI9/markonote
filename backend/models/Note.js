import mongoose from 'mongoose';
import {nanoid} from 'nanoid';

const noteSchema = mongoose.Schema(
  {
    _id: {type: String, default: () => nanoid(9)},
    author: {type: String, required: true},
    noteName: {type: String, required: true},
    markdown: {type: String, required: true},
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model('Note', noteSchema);

export default Note;
