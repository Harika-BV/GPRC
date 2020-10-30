import React from 'react';
import PropTypes from 'prop-types';
import './TextArea.css'

const TextArea = (props) => (
  <div className="form-group">
    <label className="form-label">{props.title}</label>
    <textarea
      className="form-input"
      style={props.resize ? null : {resize: 'none'}}
      name={props.name}
      rows={props.rows}
      onChange={props.controlFunc}
      value={props.value}
      placeholder={props.placeholder} />
  </div>
);

TextArea.propTypes = {
  title: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  resize: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  controlFunc: PropTypes.func.isRequired
};

export default TextArea;