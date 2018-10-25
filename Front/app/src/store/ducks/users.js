import users from 'src/data/users';

/*
 * Types
 */
// Pour l'instant, aucunes actions ici
// Pas besoin pour le prototype
/*
 * Initial State
 */
const initialState = {
  users,
};

/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    /*
     * Data
     */
    // If action is not found, just return the state
    default:
      return state;
  }
};

/*
 * Actions Creators
 */
