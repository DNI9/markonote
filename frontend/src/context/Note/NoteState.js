import axios from 'axios';
import React, {useReducer} from 'react';
import {
  CLEAR_NOTE,
  GET_NOTE,
  NOTE_ERROR,
  SAVE_NOTE,
  UPDATE_NOTE,
} from '../types';
import noteContext from './noteContext';
import noteReducer from './noteReducer';

const NoteState = props => {
  // NOTE: REMEMBER TO SET AS VALUE BELOW
  const initialState = {
    note: null,
    loading: true,
    alert: null,
    error: null,
  };

  // Setup reducer
  const [state, dispatch] = useReducer(noteReducer, initialState);

  // GET NOTE
  const getNote = async noteID => {
    try {
      const res = await axios.get(`/api/notes/${noteID}`);
      dispatch({type: GET_NOTE, payload: res.data});
    } catch (err) {
      dispatch({type: NOTE_ERROR, payload: err.response.data});
    }
  };

  const saveNoteToStorage = id => {
    let noteIDs =
      localStorage.getItem('MARKDOWN_NOTE_NOTE_IDs') === null
        ? []
        : JSON.parse(localStorage.getItem('MARKDOWN_NOTE_NOTE_IDs'));

    noteIDs.push(id);

    localStorage.setItem('MARKDOWN_NOTE_NOTE_IDs', JSON.stringify(noteIDs));
  };

  // SAVE NOTE
  const saveNote = async data => {
    const noteData = {
      author: 'Anonymous',
      ...data,
    };
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/notes', noteData, config);
      dispatch({type: SAVE_NOTE, payload: res.data});
      saveNoteToStorage(res.data.data._id);
    } catch (err) {
      // dispatch({ type: SAVE_ERROR, payload: err.response.msg });
      console.error(err);
    }
  };

  // UPDATE NOTE
  const updateNote = async (data, noteID) => {
    const noteData = {
      author: 'Anonymous',
      ...data,
    };
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.put(`/api/notes/${noteID}`, noteData, config);
      dispatch({type: UPDATE_NOTE, payload: res.data});
    } catch (err) {
      // dispatch({ type: SAVE_ERROR, payload: err.response.msg });
      console.error(err);
    }
  };

  // clear notes
  const clearNote = () => dispatch({type: CLEAR_NOTE, payload: null});

  return (
    <noteContext.Provider
      value={{
        note: state.note,
        loading: state.loading,
        error: state.error,
        saveNote,
        updateNote,
        getNote,
        clearNote,
      }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
