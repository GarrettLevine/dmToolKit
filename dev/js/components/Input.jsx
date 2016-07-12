//************************************************************************
//  M O D U L E     I M P O R T S
//************************************************************************
import React, { PropTypes } from 'react';

//***************************************************
//  C O M P O N E N T
//***************************************************
export const Input = props => {
  const { type, text, name, classes, funky, value } = props;

  function handleChange(e) {
    funky(e.target.value);
  }

  return (
    <div className={classes + ' field'}>
     <label htmlFor={name}>{text}</label>
      <input
        type={type}
        id={name}
        name={name}
        onChange={handleChange}
        value={value}
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
  funky: PropTypes.func,
};

//************************************************************************
//  C O M P O N E N T   E X P O R T
//************************************************************************
export default Input;
