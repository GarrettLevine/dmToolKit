//************************************************************************
//                  M O D U L E     I M P O R T S
//************************************************************************
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  toggleCreateUser,
} from '../actions/userAuth-actions.js';

//************************************************************************
//                 C O M P O N E N T    I M P O R T S
//************************************************************************
import LoginForm from '../containers/LoginForm.jsx';
import CreateUserForm from '../containers/CreateUserForm.jsx';

//***************************************************
//                C O M P O N E N T
//***************************************************
export class UserAuth extends Component  {
  constructor(props) {
    super(props);

    this.buttonToggle = this.buttonToggle.bind(this);
  }

  componentDidMount() {
    $('.ui.modal').modal({detachable: false});
  }

  buttonToggle() {
    this.props.toggleCreateUser();
  }

  render() {
    return (
      <div className="userAuth__container ui modal">
        <i className="close icon red"></i>
        <div className="ui two column middle aligned very relaxed stackable grid">
          <div className="column">
            { !this.props.createUser ? 
                <LoginForm /> 
                  :
                <CreateUserForm />
            }
          </div>
          <div className="ui vertical divider">
            Or
          </div>
          <div className="center aligned column">
            <div
              className="ui big green labeled icon button"
              onClick={this.buttonToggle}
            >
              <i className="signup icon"></i>
              { !this.props.createUser ? 'Sign Up' : 'Sign In' }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    createUser: state.userAuth.createUser,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleCreateUser,
  }, dispatch);
}

//************************************************************************
//                 C O M P O N E N T   E X P O R T
//************************************************************************
export default connect(mapStateToProps, mapDispatchToProps)(UserAuth);