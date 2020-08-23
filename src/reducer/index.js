import { combineReducers } from 'redux'
import tasks from './task'
import ui from './ui'
import modal from './modal'

const myReducer = combineReducers({
    tasks,
    ui,
    modal
});

export default myReducer;