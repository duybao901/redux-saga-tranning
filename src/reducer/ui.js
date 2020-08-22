import * as uiTypes from '../contants/ui'

const initialState = {
    showLoading: false
}

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case uiTypes.GLOBAL_SHOW_LOADING: {
            return {
                ...state,
                showLoading: true
            }
        }
        case uiTypes.GLOBAL_HIDE_LOADING: {
            return {
                ...state,
                showLoading: false
            }
        }
        default:
            return state
    }
}

export default myReducer;