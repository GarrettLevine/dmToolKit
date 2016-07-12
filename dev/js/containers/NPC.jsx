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
    function createNPC() {
      return createCharacter();
    }

    return (
        <div className="ui grid npcContainer">
          <Header
            classes="twelve wide column"
            header="NPC Generator"
            subheader="Roll some quick NPCs with the click of a button"
            icon="child"
          />
          <section className="ui grid sixteen wide column card__container">
            <NPCCard createNPC={createNPC} />
            <NPCCard createNPC={createNPC} />
            <NPCCard createNPC={createNPC} />
          </section>
        </div>
    )
  }

}

//*************************************************
//        C O M P O N E N T   E X P O R T
//*************************************************
export default NPC;
