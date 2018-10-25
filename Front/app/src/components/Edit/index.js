import React from 'react';
import PropTypes from 'prop-types';
import {
  convertFromHTML,
  EditorState,
  ContentState,
} from 'draft-js';
import { Link } from 'react-router-dom';

import TextEdit from 'src/components/TextEdit';
import Notes from 'src/containers/Notes';

import './style.scss';

class Edit extends React.Component {
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
    author: PropTypes.number.isRequired,
    note: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { actions, note } = this.props;
    const { changeInputNote } = actions;

    const blocksFromHTML = convertFromHTML(note.content);
    const state = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap,
    );

    changeInputNote('content', EditorState.createWithContent(state));
    changeInputNote('title', note.title);
  }

  componentWillUnmount() {
    const { resetEditNote } = this.props.actions;
    resetEditNote();
  }

  // Input controller
  handleChange = (evt) => {
    const { changeInputNote } = this.props.actions;

    if (evt.target) {
      const { id, value } = evt.target;

      if (value.length < 50) {
        changeInputNote(id, value);
      }
    }
    else {
      changeInputNote('content', evt);
    }
  };

  // Save note in data
  handleSave = () => {
    const { note, actions } = this.props;
    const { updateNote, resetEditNote } = actions;

    updateNote(note.id);
    resetEditNote();
  };

  // Reset Input & Editor
  handleCancel = () => {
    const { resetEditNote } = this.props.actions;
    resetEditNote();
  };

  render() {
    const { title, content } = this.props;
    return (
      <div className="edit">
        <div className="edit-note">
          <TextEdit
            title={title}
            content={content}
            onChange={this.handleChange}
          />
          <div className="edit-buttons">
            <Link className="edit-save" onClick={this.handleSave} to="/">
              Save
            </Link>
            <Link className="edit-cancel" onClick={this.handleCancel} to="/">
              Cancel
            </Link>
          </div>
        </div>
        <div className="edit-notes">
          <Notes />
        </div>
      </div>
    );
  }
}

export default Edit;
