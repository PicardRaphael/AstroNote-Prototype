/**
 * Import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/**
 * Local import
 */
import Edit from 'src/components/Edit';
import { updateNote } from 'src/store/middlewares/websocket';
import { changeInputNote, resetEditNote } from 'src/store/ducks/note';

// State
const mapStateToProps = (state, props) => ({
  title: state.note.title,
  content: state.note.content,
  note: state.notes.noteList.filter(
    note => `${note.id}` === props.match.params.id)[0],
});

// Actions
const mapDispatchToProps = (dispatch) => {
  const actions = {
    changeInputNote,
    updateNote,
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
)(Edit);
