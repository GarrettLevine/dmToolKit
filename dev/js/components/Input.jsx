//************************************************************************
//  M O D U L E     I M P O R T S
//************************************************************************
import React, { PropTypes } from 'react';

//************************************************************************
//  C O M P O N E N T    I M P O R T S
//************************************************************************

//***************************************************
//  C O M P O N E N T
//***************************************************
export const Input = props => {
  const { type, text, name, classes } = props;

  return (
    <div className="field">
     <label htmlFor={name}>{text}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={text}
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  classes: PropTypes.string,
};

//************************************************************************
//  C O M P O N E N T   E X P O R T
//************************************************************************
export default Input;
