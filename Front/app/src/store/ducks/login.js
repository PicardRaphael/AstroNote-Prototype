/*
 * Types
 */
const CHANGE_INPUT = 'CHANGE_INPUT';
const CHANGE_LOGGED_STATUS = 'CHANGE_LOGGED_STATUS';
const CHANGE_ERROR_STATUS = 'CHANGE_ERROR_STATUS';

/*
 * Initial State
 */
const initialState = {
  email: '',
  password: '',
  logged: false,
  error: false,
  user: {
    id: null,
    email: '',
    role: '',
  },
};

/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    /*
     * Input controller
     */
    case CHANGE_INPUT: {
      return {
        ...state,
        [action.key]: action.value,
      };
    }
    /*
     * Sign UP
     */
    case CHANGE_LOGGED_STATUS: {
      const { value, data } = action;
      const { _id, email } = data;
      console.log(data);
      return {
        ...state,
        logged: value,
        user: {
          id: _id,
          email,
        },
      };
    }
    /*
    * Error
    */
    case CHANGE_ERROR_STATUS: {
      const { value } = action;
      return {
        ...state,
        error: value,
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
export const changeInput = (key, value) => ({
  type: CHANGE_INPUT,
  key,
  value,
});
export const changeLoggedStatus = (value, data) => ({
  type: CHANGE_LOGGED_STATUS,
  value,
  data,
});

export const changeErrorStatus = value => ({
  type: CHANGE_ERROR_STATUS,
  value,
});
