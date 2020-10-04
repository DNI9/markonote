import mongoose from 'mongoose';

const noteSchema = mongoose.Schema(
  {
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
