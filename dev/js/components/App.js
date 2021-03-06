import React, { PropTypes } from 'react';

import NavButton from './NavButton.jsx';
import Button from './Button.jsx';
import UserAuth from '../containers/UserAuth.jsx';

import { modalToggle } from '../utils/SUIFunctions';

export const App = (props) => {
    const { children } = props;

    function userModalHandler() {
      $('.userAuth__container')
        .modal('show');
    }

    return (
      <div className="ui grid contentContainer">
        <section className="contentContainer__sidebar ui visible left demo vertical inverted sidebar labeled icon menu">
          <NavButton
            route="/"
            classes="item"
            icon="home"
            text="Dashboard"
          />
          <NavButton
            route="/NPC"
            classes="item"
            icon="child layout"
            text="NPCs"
          />
          <a className="disabled item">
            <i className="disabled book icon"></i>
              Story
          </a>
          <a className="disabled item">
            <i className="disabled fa fa-shield icon"></i>
              Encounters
          </a>
        </section>
        <section className="fourteen wide column right floated appContentContainer">
          <section className="userAuth">
            <Button
              text='Login'
              classes='userAuth__button big green'
              onClick={userModalHandler}
            />
            <UserAuth />
          </section>
          {children}
        </section>

      </div>
    );
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;
