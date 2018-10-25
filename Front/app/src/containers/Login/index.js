/**
 *  Import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from 'src/components/Login';

/**
 * Local import
 */
import { changeInput } from 'src/store/ducks/login';
import { signIn } from 'src/store/middlewares/websocket';

const mapStateToProps = state => ({
  email: state.login.email,
  password: state.login.password,
});

// Actions
const mapDispatchToProps = (dispatch) => {
  const actions = {
    signIn,
    changeInput,
  };

  // Dispatch
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
