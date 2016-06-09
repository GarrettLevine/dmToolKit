import React, { PropTypes } from 'react';
import NavButton from './NavButton.jsx';

export const App = (props) => {
    const { children } = props;

    return (
      <div className="ui grid contentContainer">
        <div className="ui visible left demo vertical inverted sidebar labeled icon menu">
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
            <i className="book icon"></i>
              Story
          </a>
          <a className="disabled item">
            <i className="fa fa-shield icon"></i>
              Encounters
          </a>
        </div>
        <section className="fourteen wide column right floated appContentContainer">
          {children}
        </section>
      </div>
    );
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;
