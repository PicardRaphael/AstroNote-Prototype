/**
 *  Import
 */
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Note from 'src/components/Note';

/**
 * Local import
*/

const mapStateToProps = (state, props) => ({
  note: state.notes.noteList.filter(
    note => `${note.id}` === props.match.params.id)[0],
});

// const mapDispatchToProps = (dispatch) => {
//   const actions = {

//   };

//   // Dispatch
//   return {
//     actions: bindActionCreators(actions, dispatch),
//   };
// };

export default connect(
  mapStateToProps,
  //  mapDispatchToProps,
)(Note);
