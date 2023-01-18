// import * as actionTypes from '../actions/actionTypes';

import { actionTypes } from "../actions/actionTypes";

// export default (state = [], action) => {
//     switch (action.type){

//         case actionTypes.CREATE_NEW_USER:
//             return[
//                 ...state,
//                 Object.assign({}, action.user)
//             ];
//             default:
//                 return state;
//     }
// };
const initialState = {
    token:null //initially token empty while launching
}

function userReducer(state = initialState, action) {
  if (action.type === actionTypes.LOGIN_USER) {
    const token = action.type;
    state.token = action.data 
    return { ...state };
  } 
  else if (action.type === actionTypes.LOGIN_SUCCESS) {
    state.token = action.data 
    return { ...state };//(...)spread operator
  } 
  else if (action.type === actionTypes.LOGIN_FAILED) {
    state.token = action.data 
    return { ...state };
  }
}

export default userReducer;

// export const loginReducer = function (state = initialState,action){
//   switch(action.type) {
//       case LOGIN_USER_SUCCESS:
//           return {...state,token: action.payload};
//       case LOGIN_USER_FAIL:
//           return {...state,token: action.payload};
//       default:
//           return state;    
//   }
// };
/*userReducer.js file to connect the actions
 with the state stored in the Redux store*/
