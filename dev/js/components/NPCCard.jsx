import React, { PropTypes } from 'react';

export const NPCCard = props => {
  const { name, race, details } = props;


  const renderDetails = (attributes) => {
    //for each key in the object
    // map over and return the values with their properties in p tags
    return Object.keys(attributes).map(attr => {
      if (attr === 'firstName' 
        || attr === 'lastName'
        || attr === 'race') {
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

  return (
    <div className="ui card column">
      <div className="content">
        <div className="header">
          {details.firstName + ' ' + details.lastName}
        </div>
      </div>
      <div className="content">
        <h4 className="ui large sub header npcName">{details.race}</h4>
        <div className="ui small feed">
          <div className="event">
            <div className="content">
              {renderDetails(details)}
            </div>
          </div>
        </div>
      </div>
      <div className="extra content">
        <button className="ui green button right floated">Save Character</button>
      </div>
    </div>
  );
}

NPCCard.propTypes = {
  details: PropTypes.object,
};

export default NPCCard;
