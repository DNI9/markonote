import {SAVE_NOTE, UPDATE_NOTE, GET_NOTE} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SAVE_NOTE:
    case UPDATE_NOTE:
    case GET_NOTE:
      return {
        ...state,
        note: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
