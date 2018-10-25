/**
 * Import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Local Import
 */
import Notes from 'src/components/Notes';
import { getNotes, deleteNote } from 'src/store/middlewares/websocket';

/**
 * Code
 */
const mapStateToProps = state => ({
  notes: state.notes.noteList,
});

const mapDispatchToProps = (dispatch) => {
  const actions = {
    deleteNote,
    getNotes,
  };
  return {
    actions: bindActionCreators(actions, dispatch),
  };
};
/**
 * Export
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notes);
