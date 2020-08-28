
import * as TaskConstants from '../contants/task'

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

  