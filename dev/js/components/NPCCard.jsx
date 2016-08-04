import React, { PropTypes } from 'react';

export const NPCCard = props => {
  const { createNPC } = props;

  const details = createNPC();

  const renderDetails = attributes => {
    //for each key in the object
    // map over and return the values with their properties in p tags
    return Object.keys(attributes).map(attr => {
      if (attr === 'firstName' || attr === 'lastName' || attr === 'race') {
        return null;
      }

      return (
        <h5 key={attr} className="ui header npcHeader">
          {attr}
          <div className="sub header">{attributes[attr]}</div>
        </h5>
      );
    });
  };

  const removeCard = function(event) {
    $(event.target).parents('.NPCCard').remove();
  };

  return (
    <div className="ui card floated left eight wide column NPCCard">
      <div className="content ui column">
        <div className="header floated left npcNameHeader">
          {details.firstName + ' ' + details.lastName}
        </div>
        <h5 className="ui large sub header npcName">{details.race}</h5>
      </div>
      <div className="content npcCard__column">
        <div className="ui small feed">
          <div className="event">
            <div className="content">
              {renderDetails(details)}
            </div>
          </div>
        </div>
      </div>
      <div className="extra content">
        <button className="ui icon tiny green button right floated">
          <i className="plus icon"> </i>
        </button>
        <button
          className="ui icon tiny red button right floated"
          onClick={removeCard}
        >
          <i className="icon remove"></i>
        </button>
      </div>
    </div>
  );
}

NPCCard.propTypes = {
  createNPC: PropTypes.func,
};

export default NPCCard;
