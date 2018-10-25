/**
 * Import
 */
import io from 'socket.io-client';
import { convertToHTML } from 'draft-convert';

/*
 * Local Import
 */
import {
  changeLoggedStatus,
  changeErrorStatus,
} from 'src/store/ducks/login';
import { setNotes } from 'src/store/ducks/notes';

/*
 * Types
 */
const SIGN_IN = 'SIGN_IN';
const CONNECT_SOCKET = 'CONNECT_SOCKET';
const CREATE_NOTE = 'CREATE_NOTE';
const GET_NOTES = 'GET_NOTES';
const DELETE_NOTE = 'DELETE_NOTE';
const UPDATE_NOTE = 'UPDATE_NOTE';

let socket;
/*
 * Middleware
 */
export default store => next => (action) => {
  switch (action.type) {
    /*
     * If the desired action has been triggered,
     * We can get the state, dispatch an action, ajax...
     */
    case CONNECT_SOCKET: {
      socket = io('http://localhost:3001');

      socket.on('success_login', (user) => {
        store.dispatch(changeLoggedStatus(true, user));
        store.dispatch(changeErrorStatus(false));
      });

      socket.on('error_login', () => {
        store.dispatch(changeErrorStatus(true));
      });

      socket.on('set_notes', (notes) => {
        store.dispatch(setNotes(notes));
      });

      break;
    }

    case SIGN_IN: {
      const { email, password } = store.getState().login;
      socket.emit('send_login', {
        email,
        password,
      });
      break;
    }

    case CREATE_NOTE: {
      const { title, content } = store.getState().note;
      const { email } = store.getState().login.user;

      socket.emit('create_note', {
        author: email.split('@')[0],
        title,
        content: convertToHTML(content.getCurrentContent()),
      });
      break;
    }

    case GET_NOTES: {
      socket.emit('get_notes');
      break;
    }

    case DELETE_NOTE: {
      const { id } = action;
      socket.emit('delete_note', { id });
      break;
    }

    case UPDATE_NOTE: {
      const { id } = action;
      const { title, content } = store.getState().note;
      const { email } = store.getState().login.user;

      socket.emit('update_note', {
        id,
        newNote: {
          author: email.split('@')[0],
          title,
          content: convertToHTML(content.getCurrentContent()),
        },
      });
      break;
    }

    // If the triggered action does not interest us, do nothing
    default:
  }

  // Go to the next middleware
  next(action);
};

/*
 * Actions Creators
 */
export const signIn = () => ({
  type: SIGN_IN,
});

export const connectSocket = () => ({
  type: CONNECT_SOCKET,
});

export const createNote = () => ({
  type: CREATE_NOTE,
});

export const getNotes = () => ({
  type: GET_NOTES,
});

export const deleteNote = id => ({
  type: DELETE_NOTE,
  id,
});

export const updateNote = id => ({
  type: UPDATE_NOTE,
  id,
});
