//************************************************************************
//  M O D U L E     I M P O R T S
//************************************************************************
import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  updateCreateEmail,
  updateCreatePassword,
  updateConfirmPassword,
} from '../actions/userAuth-actions';

import Input from '../components/Input.jsx';
import Header from '../components/Header.jsx';

//***************************************************
//  C O M P O N E N T
//***************************************************
export class CreateUserForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form
        id="createUserForm"
        className="ui form"
      >
        <Header
          header="Sign Up"
          subheader="Sign up to start planning an adventure!"
          icon="user"
          classes=""
        />
        <Input
          type="text"
          text="E-mail"
          name="email"
          classes="createUserForm__email"
          value={this.props.signUp.email}
          onChange={this.props.updateCreateEmail}
          isRequired
        />
        <Input
          type="password"
          text="Password"
          name="password"
          classes="createUserForm__password"
          value={this.props.signUp.password}
          onChange={this.props.updateCreatePassword}
          isRequired
        />
        <Input
          type="password"
          text="Confirm Password"
          name="confirmPassword"
          classes="createUserForm__confirmPassword"
          value={this.props.signUp.confirmPass}
          onChange={this.props.updateConfirmPassword}
          isRequired
        />
        <input type="submit" className="ui button green" value="Create Account" />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    signUp: state.userAuth.signUp
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateCreateEmail,
    updateCreatePassword,
    updateConfirmPassword,
  }, dispatch);
}

//************************************************************************
//  C O M P O N E N T   E X P O R T
//************************************************************************
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUserForm);
