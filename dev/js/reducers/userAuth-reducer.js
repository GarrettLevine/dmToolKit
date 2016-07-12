//*************************************************
//    C O M P O N E N T   I M P O R T S
//*************************************************
	import * as types from '../actions/types';

//*************************************************
//    R E D U C E R S
//*************************************************
const initialState = {
	login: {
		email: '',
		password: '',
	},
	signUp: {
		email: '',
		password: '',
		confirmPass: '',
	},
};

export default function userAuth(state = initialState, action) {
	switch (action.type) {
		case types.UPDATE_LOGIN_EMAIL: {
			return Object.assign({}, state, {
			  login: { 
			  	email: action.payload,
			  	password: state.login.password,
			  },
			});
		}

		case types.UPDATE_LOGIN_PASSWORD: {
			return Object.assign({}, state, {
			  login: {
			  	email: state.login.email,
			  	password: action.payload,
			  },
			});
		}

		default: {
			return state;
		}
	};
};
