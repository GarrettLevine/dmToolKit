//************************************************************************
//  M O D U L E     I M P O R T S
//************************************************************************
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

//***************************************************
//  C O M P O N E N T
//***************************************************
export const NavButton = (props) => {
  const { route, classes, icon, text } = props;

  return (
    <Link
      to={route}
      className={classes}
    >
    <i className={icon + ' icon'}></i>
      {text}
    </Link>
  )
}

NavButton.propTypes = {
  route: PropTypes.string,
  classes: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
};


//************************************************************************
//  C O M P O N E N T   E X P O R T
//************************************************************************
export default NavButton;
