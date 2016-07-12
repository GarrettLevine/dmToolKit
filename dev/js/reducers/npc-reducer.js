//*************************************************
//    C O M P O N E N T   I M P O R T S
//*************************************************
	// import * as types from '../actions/types';

//*************************************************
//    R E D U C E R S
//*************************************************
const initialState = {
	test: 'test',
};

export default function npc(state = initialState, action) {
	switch (action.type) {
		default: {
			return state;
		}
	};
};
