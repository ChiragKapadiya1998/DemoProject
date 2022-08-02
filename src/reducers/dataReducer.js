import {GET_DATA} from '../action/types';

const INITIAL_STATE = {
  arr: {},
};

export const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DATA:
      // console.log('response from reducer -', action.payload);
      return {...state, arr: action.payload};
    default:
      return state;
  }
};
