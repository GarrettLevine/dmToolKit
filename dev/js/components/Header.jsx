//************************************************************************
//  M O D U L E     I M P O R T S
//************************************************************************

import React, { PropTypes } from 'react';

//***************************************************
//  C O M P O N E N T
//***************************************************
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

//************************************************************************
//  C O M P O N E N T   E X P O R T
//************************************************************************
export default Header;
