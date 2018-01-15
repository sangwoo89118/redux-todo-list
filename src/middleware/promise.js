
export default store => next => action => {

  if(!action.payload || !action.payload.then){
    next(action);
    return;
  }

  action.payload.then( resp =>{
    const newAction = {...action, payload: resp};

    store.dispatch(newAction);
  });
  console.log('WHAT???? IS THIS??', action);
  return action.payload;

}
