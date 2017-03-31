import { combineReducers } from 'redux';
import tasks from './tasks';
import filterTerm from './filterTerm';
import filterState from './filterState';

export default combineReducers({
    tasks,
    filterTerm,
    filterState
})