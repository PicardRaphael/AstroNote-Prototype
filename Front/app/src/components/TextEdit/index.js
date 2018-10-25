/*
 * Package Import
 */
import React from 'react';
import { Editor, RichUtils } from 'draft-js';
// import { convertToHTML } from 'draft-convert';
import PropTypes from 'prop-types';

/*
* Local Import
*/

/*
 * Scss Import
 */
import './textedit.scss';

/*
 * Component
 */
const TextEdit = ({ title, content, onChange }) => {
  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(content, command);
    if (newState) {
      onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  // Button for change Styling
  const onBoldClick = () => {
    onChange(RichUtils.toggleInlineStyle(content, 'BOLD'));
  };
  const onItalicClick = () => {
    onChange(RichUtils.toggleInlineStyle(content, 'ITALIC'));
  };

  return (
    <div className="textEdit">
      <input
        id="title"
        className="textEdit-input"
        value={title}
        onChange={onChange}
        placeholder="Title"
      />
      <div className="textEdit-editor">
        <div className="textEdit-buttons">
          <button className="textEdit-button" onClick={onBoldClick}>
            <strong>Bold</strong>
          </button>
          <button className="textEdit-button" onClick={onItalicClick}>
            <em>Italic</em>
          </button>
        </div>
        <Editor
          className="textEdit-text"
          editorState={content}
          onChange={onChange}
          handleKeyCommand={handleKeyCommand}
        />
      </div>

    </div>
  );
};
// <div dangerouslySetInnerHTML={{
//   __html: convertToHTML(content.getCurrentContent()),
// }}
// />
TextEdit.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};
/*
 * Export
 */
export default TextEdit;
