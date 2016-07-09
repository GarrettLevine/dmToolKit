//************************************************************************
//  M O D U L E     I M P O R T S
//************************************************************************
import React, { PropTypes } from 'react';

//************************************************************************
//  C O M P O N E N T    I M P O R T S
//************************************************************************
import Input from './Input.jsx';
//***************************************************
//  C O M P O N E N T
//***************************************************
export const LoginForm = props => {
  return (
    <form className="ui form">
      <Input
        type="text"
        text="E-mail"
        name="email"
        classes="big"
      />
      <Input
        type="password"
        text="Password"
        name="password"
        classes="big"
      />

      <input type="submit" className="ui button green" value="Sign In" />
    </form> 
  );
}

//************************************************************************
//  C O M P O N E N T   E X P O R T
//************************************************************************
export default LoginForm;
