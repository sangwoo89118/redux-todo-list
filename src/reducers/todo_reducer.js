import types from '../actions/types';

const DEFAULT_STATE={
  list:[],
  single: null
}


export default function(state=DEFAULT_STATE, action){
  switch(action.type){
    case types.GET_ITEMS:
      return { ...state, list: action.payload.data.todos};
    case types.GET_SINGLE_ITEM:
      // console.log('GET SINGLE ITEM: ', action);
      return {...state, single: action.payload.data.todo};
    default:
      return state;
  }
}
