import { addTaskSuccses, toastError, toastSuccess } from '../commons/toastifyHeper';
import * as TaskContants from '../contants/task';
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
            toastSuccess();
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
                listTask: state.listTask
            }
        }

        case TaskContants.FILTER_TASK_SUCCESS: {
            const { data } = action.payload
            const newState = data;
            return {
                ...state,
                listTask: [...newState]
            }
        }
        case TaskContants.ADD_TASK: {
            return {
                ...state
            }
        }
        case TaskContants.ADD_TASK_SUCCESS: {
            // Thanh cong luu vao store
            const { data } = action.payload;
            addTaskSuccses()
            return {
                ...state,
                listTask: state.listTask.concat([data])
            }
        }
        case TaskContants.ADD_TASK_FALSE: {
            const { error } = action.payload;
            toastError(error);
            return {
                ...state,
                error
            }
        }
        default:
            return state;
    }
}

export default myReducer;