import React, {useReducer} from 'react';
import axios from 'axios';
import noteContext from './noteContext';
import noteReducer from './noteReducer';
import {SAVE_NOTE, GET_NOTE, SET_LOADING} from '../types';

const NoteState = props => {
  // Set up initial state
  const initialState = {
    note: null,
    loading: false,
  };

  // Setup reducer
  const [state, dispatch] = useReducer(noteReducer, initialState);

  // SET LOADING
  const setLoading = () => dispatch({type: SET_LOADING});

  // GET USER DETAILS
  //   const getUserDetails = async username => {
  //     setLoading();
  //     const res = await axios.get(
  //       `https://api.github.com/users/${username}?client_id=${githubClientID}&client_secret=${githubClientSecret}`
  //     );

  //     dispatch({
  //       type: GET_USER_DETAILS,
  //       payload: res.data,
  //     });
  //   };

  // SAVE NOTE
  const saveNote = async data => {
    // setLoading();
    console.log('data');
  };

  return (
    <noteContext.Provider
      value={{
        note: state.note,
        loading: state.loading,
        saveNote,
      }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
