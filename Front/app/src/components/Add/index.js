import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Notes from 'src/containers/Notes';
import TextEdit from 'src/components/TextEdit';

import './style.scss';

class Add extends React.Component {
  static propTypes = {
    actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired,
  };

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
    const { actions } = this.props;
    const { createNote, resetEditNote } = actions;

    createNote();
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
      <div className="add">
        <div className="add-edit">
          <TextEdit
            title={title}
            content={content}
            onChange={this.handleChange}
          />
          <div className="add-buttons">
            <Link className="add-create" onClick={this.handleSave} to="/">
              Create
            </Link>
            <Link className="add-cancel" onClick={this.handleCancel} to="/">
              Cancel
            </Link>
          </div>
        </div>
        <div className="add-notes">
          <Notes />
        </div>
      </div>
    );
  }
}

export default Add;
