import { combineReducers } from 'redux';
import tasks from './tasks';
import filterTerm from './filterTerm';

export default combineReducers({
    tasks,
    filterTerm
})