import * as taskApis from '../apis/task'
import * as TaskConstants from '../contants/task'

export const fetchTask = () => {
    return {
        type: TaskConstants.FETCH_TASK
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
/*
    B1: fectListTaskRequest();
    B2: Reset: state task = [];
    B3: fectListTaskSucces(data response)
*/
export const fecthListTaskRequest = () => {
    return dispatch => {
        dispatch(fetchTask());
        taskApis.getList().then(res => {
            dispatch(fecthListTaskSucces(res.data))
        }).catch(err => {
            dispatch(fecthListTaskFalse(err));
        })
    }
}

  