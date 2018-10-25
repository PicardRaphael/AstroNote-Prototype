/**
 * Import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Local import
 */
import Add from 'src/components/Add';
import { createNote } from 'src/store/middlewares/websocket';
import { changeInputNote, resetEditNote } from 'src/store/ducks/note';

// State
const mapStateToProps = state => ({
  title: state.note.title,
  content: state.note.content,
});

// Actions
const mapDispatchToProps = (dispatch) => {
  const actions = {
    changeInputNote,
    createNote,
    resetEditNote,
  };
  // Dispatch
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Add);
