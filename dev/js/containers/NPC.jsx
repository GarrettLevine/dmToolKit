//*************************************************
//         M O D U L E     I M P O R T S
//*************************************************
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NPCCard from '../components/NPCCard.jsx';
import Header from '../components/Header.jsx';

//*************************************************
//        C O M P O N E N T
//*************************************************
export class NPC extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const content = {
      strength: 'dexterity',
      Weakness: 'constitution',
      trait: 'long nails',
    }

    return (
        <div className="ui grid npcContainer">
          <Header
            classes="sixteen wide column"
            header="NPC Generator"
            subheader="Roll some quick NPCs with the click of a button"
            icon="child"
          />
          <section className="sixteen wide column card__container">
            <NPCCard
              name="Fealor Dwendle"
              race="Orc"
              details={content}
            />
          </section>
        </div>
    )
  }

}

//*************************************************
//        C O M P O N E N T   E X P O R T
//*************************************************
export default NPC;
