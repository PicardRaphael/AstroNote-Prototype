/*
 * Types
 */
const SET_NOTES = 'SET_NOTES';
/*
 * Initial State
 */
const initialState = {
  noteList: [],
};

/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    /*
     * Add Note
     */
    case SET_NOTES: {
      return {
        ...state,
        noteList: action.data.map(note => ({
          id: note._id,
          author: note.author,
          title: note.title,
          content: note.content,
        })),
      };
    }
    // If action is not found, just return the state
    default:
      return state;
  }
};

/*
 * Actions Creators
 */

// Add note
export const setNotes = data => ({
  type: SET_NOTES,
  data,
});
