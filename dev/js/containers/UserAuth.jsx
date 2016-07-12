//************************************************************************
//                  M O D U L E     I M P O R T S
//************************************************************************
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//************************************************************************
//                 C O M P O N E N T    I M P O R T S
//************************************************************************
import LoginForm from '../components/LoginForm.jsx';

//***************************************************
//                C O M P O N E N T
//***************************************************
export class UserAuth extends Component  {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="userAuth__container ui modal">
        <i className="close icon red"></i>
        <div className="content">
          <LoginForm />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.userAuth.login,
    signup: state.userAuth.signUp,
  };
}

//************************************************************************
//                 C O M P O N E N T   E X P O R T
//************************************************************************
export default connect(mapStateToProps)(UserAuth);