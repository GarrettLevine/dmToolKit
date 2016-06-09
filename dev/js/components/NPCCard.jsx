import React, { PropTypes } from 'react';

export const NPCCard = props => {
  const { name, race, details } = props;


  const renderDetails = (attributes) => {
    //for each key in the object
    // map over and return the values with their properties in p tags
    return Object.keys(attributes).map(attr => {
      return <p key={attr}>{attr}: {attributes[attr]}</p>
    });
  };

  return (
    <div className="ui card column">
      <div className="content">
        <div className="header">{name}</div>
      </div>
      <div className="content">
        <h4 className="ui sub header">{race}</h4>
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
  header: PropTypes.string,
  subheader: PropTypes.string,
  details: PropTypes.object,
};

export default NPCCard;
