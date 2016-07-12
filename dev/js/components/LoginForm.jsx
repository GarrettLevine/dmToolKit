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
import Header from './Header.jsx';

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
        <Header
          header="Login"
          subheader="Login and resume planning your adventure."
          icon="user"
          classes=""
        />
        <Input 
          type="text"
          text="E-mail"
          name="email"
          classes="loginForm__email"
          value={this.props.login.email}
          onChange={this.props.updateLoginEmail}
        />
        <Input
          type="password"
          text="Password"
          name="password"
          classes="loginForm__password"
          value={this.props.login.password}
          onChange={this.props.updateLoginPassword}
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
