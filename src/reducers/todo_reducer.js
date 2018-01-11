import types from '../actions/';

const DEFAULT_STATE={
  list:[]
}


export default function(state=DEFAULT_STATE, action){
  switch(action.type){
    default:
      return state;
  }
}
