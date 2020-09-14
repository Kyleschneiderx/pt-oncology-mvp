import { SIGN_IN, SIGN_OUT, SIGN_UP, REGISTER_PATIENT } from '../actions/types';

const INTIAL_STATE = {
  isSignedIn: null,
  userId: null,
  token:'',
  createPatient:null
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_PATIENT:
        return {...state, createPatient:true }
    case SIGN_UP:
        return { ...state, isSignedIn: true, userId: action.id, token:action.payload  }
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.id, token:action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
