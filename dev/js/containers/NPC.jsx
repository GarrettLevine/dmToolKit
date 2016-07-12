//*************************************************
//         M O D U L E     I M P O R T S
//*************************************************
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NPCCard from '../components/NPCCard.jsx';
import Header from '../components/Header.jsx';

import { createCharacter } from '../utils/npcFunction';

//*************************************************
//        C O M P O N E N T
//*************************************************
export class NPC extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const npcCardCount = 3;

    function createNPC() {
      return createCharacter();
    }

    function renderCards() {
      for(var i = 1; i <= npcCardCount; i++) {
        console.log(i);
        <NPCCard
          createNPC={createNPC}
        />
      }
    }

    return (
        <div className="ui grid npcContainer">
          <Header
            classes="sixteen wide column"
            header="NPC Generator"
            subheader="Roll some quick NPCs with the click of a button"
            icon="child"
          />
          <section className="ui grid sixteen wide column card__container">
            {renderCards()}
          </section>
        </div>
    )
  }

}

//*************************************************
//        C O M P O N E N T   E X P O R T
//*************************************************
export default NPC;
