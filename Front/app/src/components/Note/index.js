/**
 * Import
 */
import React from 'react';
import PropTypes from 'prop-types';

import Notes from 'src/containers/Notes';

import './note.scss';

class Note extends React.Component {
  static propTypes = {
    note: PropTypes.object.isRequired,
  };

  componentDidMount() {
    console.log("Comme ça y'a plus de rouge");
  }

  render() {
    const { note } = this.props;
    const { title, author, content } = note;
    return (
      <div className="note">
        <div className="note-note">
          <div className="note-title">{title}</div>
          <div className="note-author"> by {author}</div>
          <div
            className="note-content"
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </div>
        <div className="note-notes">
          <Notes />
        </div>
      </div>
    );
  }
}

export default Note;
