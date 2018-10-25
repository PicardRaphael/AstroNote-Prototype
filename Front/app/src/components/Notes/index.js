/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTrash,
  faEdit,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

/**
 * Local
 */
import './style.scss';
/**
 * Code
 */
class Notes extends React.Component {
  static propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
  };

  state = {
    search: '',
  }

  componentDidMount() {
    const { getNotes } = this.props.actions;
    getNotes();
  }

  handleDelete = id => () => {
    const { deleteNote } = this.props.actions;
    deleteNote(id);
  };

  handleChange = (evt) => {
    this.setState({
      search: evt.target.value,
    });
  }

  render() {
    const { notes } = this.props;
    const { search } = this.state;

    const newNotes = notes.filter(note => note.title.includes(search));
    return (
      <div className="notes">
        <div className="notes-search">
          <input
            onChange={this.handleChange}
            value={search}
            placeholder="search"
          />
        </div>
        <div className="notes-plus">
          <Link className="button-icon" to="/note/add">
            <FontAwesomeIcon icon={faPlus} />
          </Link>
        </div>
        {notes &&
          newNotes.map(note => (
            <div className="notes-note" key={note.id} >
              <Link
                className="notes-note-author"
                to={`/note/edit/${note.id}`}
              >
                {note.author}
              </Link>
              <Link className="notes-note-link" to={`/note/${note.id}`}>
                {note.title}
              </Link>
              <div className="notes-note-buttons">
                <button
                  id={note.id}
                  className="notes-note-buttons-trash"
                  onClick={this.handleDelete(note.id)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <Link
                  to={`/note/edit/${note.id}`}
                  id={note.id}
                  className="notes-note-buttons-edit"
                >
                  <FontAwesomeIcon icon={faEdit} />
                </Link>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

/*
 * Export
 */
export default Notes;
