import React, { Component } from 'react';

export class App extends Component {
  render() {
    return (
    	<div className="ui visible left demo vertical inverted sidebar labeled icon menu">
	 				<a className="item">
	 				  <i className="book icon"></i>
		 				  Story
	 				</a>
	 				<a className="item">
	 				  <i className="child layout icon"></i>
		 				  NPCs
	 				</a>
	 				<a className="item">
	 				  <i className="fa fa-shield icon"></i>
		 				  Encounters
	 				</a>
    	</div>
    );
  }
}

export default App;
