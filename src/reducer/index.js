import { combineReducers } from 'redux';
import modal from './modal';
import tasks from './task';
import ui from './ui';
import { reducer as formReducer } from 'redux-form'

const myReducer = combineReducers({
    tasks,
    ui,
    modal,
    form: formReducer
});

export default myReducer;