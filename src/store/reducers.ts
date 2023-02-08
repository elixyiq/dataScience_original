import { combineReducers } from 'redux';
import initState from './initState';
import types from './types';

interface ActionType {
  type: string,
  data: any,
}

const authReducer = (state = initState, action: ActionType) => {
  switch (action.type) {
    case types.SIGN_IN:
      return {
        ...state,
        user: action.data,
      };
    case types.SIGN_OUT:
      return {
        ...state,
        user: action.data,
      };
    case types.SET_THEME:
      return {
        ...state,
        theme: action.data,
      };
    case types.SET_LOADING:
      return {
        ...state,
        loading: action.data,
      };
    case types.SET_CRUMBS:
      return {
        ...state,
        crumbs: action.data,
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  authReducer,
});

export default reducers;
