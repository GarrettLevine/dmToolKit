import React, { PropTypes } from 'react';

export const Header = (props) => {
    const { header, subheader, icon, classes } = props;

    return (
      <h2 className={classes + ' huge ui header'}>
        <i className={icon + ' icon'}></i>
        <div className="content">
          {header}
          <div className="sub header">{subheader}</div>
        </div>
      </h2>
    )
}

Header.propTypes = {
  icon: PropTypes.string,
  header: PropTypes.string,
  subheader: PropTypes.string,
  content: PropTypes.string,
  classes: PropTypes.string,
};

export default Header;