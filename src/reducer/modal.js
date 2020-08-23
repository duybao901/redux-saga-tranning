import * as modalTypes from '../contants/modal';

const initialState = {
    openModal: false,
    title: '',
    component: null
};

const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case modalTypes.SHOW_MODAL: {
            return {
                ...state,
                openModal: true
            }
        }
        case modalTypes.HIDE_MODAL: {
            return {
                ...state,
                openModal: false
            }
        }
        case modalTypes.CHANGE_MODAL_TITLE: {
            const { title } = action.payload
            return {
                ...state,
                title: title
            }
        }
        case modalTypes.CHANGE_MODAL_CONTENT: {
            const { component } = action.payload
            return {
                ...state,
                component: component
            }
        }
        default: return state;
    }
}

export default myReducer;