import * as taskApis from '../apis/task'
import * as TaskConstants from '../contants/task'

export const fetchTask = () => {
    return {
        type: TaskConstants.FETCH_TASK
    }
}

export const fectListTaskSucces = (data) => {
    return {
        type: TaskConstants.FETCH_TASK_SUCCESS,
        payload: {
            data
        }
    }
}


export const fectListTaskFalse = (err) => {
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
export const fectListTaskRequest = () => {
    return dispatch => {
        dispatch(fetchTask());
        taskApis.getList().then(res => {
            dispatch(fectListTaskSucces(res.data))
        }).catch(err => {
            dispatch(fectListTaskFalse(err));
        })
    }
}

  