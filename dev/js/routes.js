//*************************************************
//    M O D U L E   I M P O R T S
//*************************************************
import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';


//*************************************************
//    C O M P O N E N T   I M P O R T S
//*************************************************
import App from './components/App';
import NPC from './containers/NPC.jsx';

//*************************************************
//    R O U T E S
//*************************************************
export default (
  <Route path="/" component={App}>
    <Route path="NPC" component={NPC} />
  </Route>
);