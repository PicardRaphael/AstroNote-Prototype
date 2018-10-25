/**
 * Import
 */
import { EditorState } from 'draft-js';

/*
 * Types
 */
const CHANGE_INPUT_NOTE = 'CHANGE_INPUT_NOTE';
const RESET_EDIT_NOTE = 'RESET_EDIT_NOTE';

/*
 * Initial State
 */
const initialState = {
  title: '',
  content: EditorState.createEmpty(),
};

/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    /*
     * Data
     */
    case CHANGE_INPUT_NOTE: {
      const { key, value } = action;
      return {
        ...state,
        [key]: value,
      };
    }
    case RESET_EDIT_NOTE: {
      return initialState;
    }

    // If action is not found, just return the state
    default:
      return state;
  }
};

/*
 * Actions Creators
 */
export const changeInputNote = (key, value) => ({
  type: CHANGE_INPUT_NOTE,
  key,
  value,
});
export const resetEditNote = () => ({
  type: RESET_EDIT_NOTE,
});
