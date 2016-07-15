//*************************************************
//    C O M P O N E N T   I M P O R T S
//*************************************************
  import * as types from '../actions/types';

//*************************************************
//    R E D U C E R S
//*************************************************
const initialState = {
  createUser: false,
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

    case types.UPDATE_CREATE_EMAIL: {
      return Object.assign({}, state, {
        signUp: {
          email: action.payload,
          password: state.signUp.password,
          confirmPass: state.signUp.password,
        },
      });
    }

    case types.UPDATE_CREATE_PASSWORD: {
      return Object.assign({}, state, {
        signUp: {
          email: state.signUp.email,
          password: action.payload,
          confirmPass: state.signUp.confirmPass,
        },
      });
    }

    case types.UPDATE_CONFIRM_PASSWORD: {
      return Object.assign({}, state, {
        signUp: {
          email: state.signUp.email,
          password: state.signUp.password,
          confirmPass: action.payload,
        },
      });
    }

    case types.TOGGLE_CREATE_USER: {
      return Object.assign({}, state, {
        createUser: !state.createUser,
      });
    }

    default: {
      return state;
    }
  };
};
