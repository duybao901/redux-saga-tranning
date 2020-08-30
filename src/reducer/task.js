import { addTaskSuccses, toastError, toastSuccess, updateTaskSuccses, deleteTaskSuccses } from '../commons/toastifyHeper';
import * as TaskContants from '../contants/task';
const initialState = {
    listTask: [],
    taskEditing: null
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
                ...state,
                taskEditing: null
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
        case TaskContants.TASK_EDITING: {
            const { task } = action.payload;
            return {
                ...state,
                taskEditing: task
            }
        }
        case TaskContants.UPDATE_TASK: {

            return {
                ...state,
            }
        }
        case TaskContants.UPDATE_TASK_SUCCESS: {
            updateTaskSuccses();
            const { data } = action.payload;
            const { listTask } = state
            const index = listTask.findIndex((task) => {
                return task.id === data.id
            })
            // 1 3 5 7 9
            // ...1 3   ,data, ...7 9
            const newList = [
                ...listTask.slice(0, index),
                data,
                ...listTask.slice(index + 1)
            ];
            return {
                ...state,
                listTask: newList
            }
        }
        case TaskContants.UPDATE_TASK_FALSE: {
            const { error } = action.payload;
            toastError(error);
            return {
                ...state,
                error
            }
        }
        case TaskContants.DELETE_TASK: {
            return {
                ...state,
            }
        }
        case TaskContants.DELETE_TASK_SUCCESS: {
            const { id } = action.payload;
            deleteTaskSuccses();
            return {
                ...state,
                listTask: state.listTask.filter((task) => task.id !== id)
            }
        }
        case TaskContants.DELETE_TASK_FALSE: {
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