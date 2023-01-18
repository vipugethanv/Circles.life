import { combineReducers } from "redux";
import user from './userReducer';

export default combineReducers({
    user:user
});

/*index.js file in the reducers folder to combine the reducers.*/