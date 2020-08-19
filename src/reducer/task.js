import * as TaskContants from '../contants/task'

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
        default:
            return state;
    }
}

export default myReducer;