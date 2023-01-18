
// import * as actionTypes from './actionTypes';

import { actionTypes } from "./actionTypes";

// export const createUser = (user) =>
// {
//     return {
//         type: actionTypes.CREATE_NEW_USER,
//         user: user
//     }
// };

export function userLogin(userData){
    return {
        type : actionTypes.LOGIN_USER,
        data : userData
    }
}

export function userLoginSuccess(token){
    return {
        type : actionTypes.LOGIN_SUCCESS,
        data : token
    }
}

export function userLoginFailed(userData){
    return {
        type : actionTypes.LOGIN_FAILED,
        data : userData
    }
}

//export {userLoginSuccess:userLoginSuccess}
// createUser() function returns an object that describes two things.

// 1. action type
// 2. payload