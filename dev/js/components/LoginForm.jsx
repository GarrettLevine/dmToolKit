//************************************************************************
//  M O D U L E     I M P O R T S
//************************************************************************
import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  updateLoginEmail,
  updateLoginPassword
} from '../actions/userAuth-actions';

import Input from './Input.jsx';

//***************************************************
//  C O M P O N E N T
//***************************************************
export class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form
        id="loginForm"
        className="ui form"
      >
        <Input
          type="text"
          text="E-mail"
          name="email"
          classes="loginForm__email"
          value={this.props.login.email}
          funky={this.props.updateLoginEmail}
        />
        <Input
          type="password"
          text="Password"
          name="password"
          funky={this.props.updateLoginPassword}
          classes="loginForm__password"
        />
        <input type="submit" className="ui button green" value="Sign In" />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    login: state.userAuth.login
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateLoginEmail,
    updateLoginPassword,
  }, dispatch);
}

//************************************************************************
//  C O M P O N E N T   E X P O R T
//************************************************************************
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
