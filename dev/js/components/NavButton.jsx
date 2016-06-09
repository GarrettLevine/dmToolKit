import React, { PropTypes } from 'react';
import { Link } from 'react-router';

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

export default NavButton;
