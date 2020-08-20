import * as TaskContants from '../contants/task'
import { toastError } from '../commons/toastifyHeper'
const initialState = {
    listTask: []
};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case TaskContants.FETCH_TASK: {
            return {
                ...state,
                listTask: []
            }
        }
        case TaskContants.FETCH_TASK_SUCCESS: {
            const { data } = action.payload;
            return {
                ...state,
                listTask: data
            }
        }
        case TaskContants.FETCH_TASK_FALSE: {
            const { err } = action.payload
            toastError(err);
            return {
                ...state,
                listTask: []
            }
        }    
        default:
            return state;
    }
}

export default myReducer;