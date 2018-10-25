/*
 * Package Import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

/*
 * Local Import
 */
import App from 'src/components/App';
import { connectSocket } from 'src/store/middlewares/websocket';

/*
 * Code
 */

// State
const mapStateToProps = state => ({
  logged: state.login.logged,
});

// Actions
const mapDispatchToProps = (dispatch) => {
  const actions = {
    connectSocket,
  };
  // Dispatch
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

/*
 * Export
 */
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
