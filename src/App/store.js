import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState();
const store = createStore(
    rootReducer,
    persistedState
 );
 
 store.subscribe(throttle(() => {
     saveState({
         tasks: store.getState().tasks
     })
 }, 1000));

export default store;