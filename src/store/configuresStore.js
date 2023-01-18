import { createStore } from 'redux';
import userReducer from '../reducers/userReducer'

//export const store = createStore(usestate = rReducer);
export function configuresStore(initialState = []){
    return configuresStores(userReducer.initialState);
}

export default configuresStore;
/*configureStore.js to initialize the store and connect to the reducers.*/