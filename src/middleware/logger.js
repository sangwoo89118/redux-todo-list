
export default store => next => action => {
  // Code Goes Here


  console.log('Logger:', action);


  const result = next(action);

  console.log('Next State:', store.getState());

  return result;

}















// export default function (store){
//   return function (next){
//     return function (action){
//       //Coe Goes Here
//     }
//   }
// }
