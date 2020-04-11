import * as types from '../actions/actionTypes';

export default function courseReducer(state=[],action){
  console.log('reducer',action);
  switch(action.type){
    case types.CREATE_COURSE:
      return [...state,{...action.course}]
    default: 
      return state;
  }
} 