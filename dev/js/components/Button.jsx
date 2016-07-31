import React, { PropTypes } from 'react';

export const Button = (props) => {
  const { classes, text, onClick } = props;

  function clickHandler() {
   onClick();
  }

  return (
    <button
      className={'ui button ' + classes}
    		onClick={clickHandler}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  classes: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
