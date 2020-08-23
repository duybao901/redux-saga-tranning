import { combineReducers } from 'redux';
import modal from './modal';
import tasks from './task';
import ui from './ui';

const myReducer = combineReducers({
    tasks,
    ui,
    modal
});

export default myReducer;