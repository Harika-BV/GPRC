import React from 'react';
import PropTypes from 'prop-types';
import './TextInput.css';

const TextInput = (props) => (
	<div className = "form-group">
		<label className = "form-label">{props.title}</label>
		<input
	      className="form-input"
	      name={props.name}
	      value={props.value}
	      type={props.inputType}
	      onChange={props.controlFunc}
	      placeholder={props.placeholder}/>
	</div>
);


TextInput.propTypes = {
	inputType: PropTypes.oneOf(['text', 'number']).isRequired,
  	title: PropTypes.string.isRequired,
  	name: PropTypes.string.isRequired,
  	controlFunc: PropTypes.func.isRequired,
 	placeholder: PropTypes.string,
 	value:PropTypes.string
};

export default TextInput;