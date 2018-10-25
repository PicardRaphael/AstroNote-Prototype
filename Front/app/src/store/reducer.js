/*
 * Package Import
 */
import { combineReducers } from 'redux';

/*
 * Local Import
 */
import notes from 'src/store/ducks/notes';
import users from 'src/store/ducks/users';
import login from 'src/store/ducks/login';
import note from 'src/store/ducks/note';

/*
 * Combine ...Reducers
 */
const reducer = combineReducers({ notes, users, login, note });

/*
 * Export
 */
export default reducer;
