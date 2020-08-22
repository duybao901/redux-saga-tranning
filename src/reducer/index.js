import { combineReducers } from 'redux'
import tasks from './task'
import ui from './ui'

const myReducer = combineReducers({
    tasks,
    ui
});

export default myReducer;