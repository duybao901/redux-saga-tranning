
import * as TaskConstants from '../contants/task'
import {STATUSS} from '../contants/index'

export const fetchTask = (param = {}) => {
    return {
        type: TaskConstants.FETCH_TASK,
        payload: {
            param
        }
    }
}

export const fecthListTaskSucces = (data) => {
    return {
        type: TaskConstants.FETCH_TASK_SUCCESS,
        payload: {
            data
        }
    }
}


export const fecthListTaskFalse = (err) => {
    return {
        type: TaskConstants.FETCH_TASK_FALSE,
        payload: {
            err
        }
    }
}


export const filterTask = keyword => {
    return {
        type: TaskConstants.FILTER_TASK,
        payload: {
            keyword
        }
    }
}

// thanh cong thi lay du lieu: delay 0,5s
export const filterTaskSucces = data => {
    return {
        type: TaskConstants.FILTER_TASK_SUCCESS,
        payload: {
            data
        }
    }
}

export const addTask = (title, description) => {
    return {
        type: TaskConstants.ADD_TASK,
        payload: {
            title,
            description
        }

    }
}

export const addTaskSucces = data => {
    return {
        type: TaskConstants.ADD_TASK_SUCCESS,
        payload: {
            data
        }

    }
}

export const addTaskFalse = error => {
    return {
        type: TaskConstants.ADD_TASK_FALSE,
        payload: {
            error
        }

    }
}

export const taskEditing = task => {
    return {
        type: TaskConstants.TASK_EDITING,
        payload: {
            task
        }

    }
}

export const updateTask = (title, description,status = STATUSS[0].value) => {
    return {
        type: TaskConstants.UPDATE_TASK,
        payload: {
            title,
            description,
            status
        }

    }
}

export const updateTaskSucces = data => {
    return {
        type: TaskConstants.UPDATE_TASK_SUCCESS,
        payload: {
            data
        }

    }
}

export const updateTaskFalse = error => {
    return {
        type: TaskConstants.UPDATE_TASK_FALSE,
        payload: {
            error
        }

    }
}











