import * as modalTypes from '../contants/modal'

export const showModal = () => {
    return {
        type: modalTypes.SHOW_MODAL
    }
}

export const hideModal = () => {
    return {
        type: modalTypes.HIDE_MODAL
    }
}

export const showModalTitle = (title) => {
    return {
        type: modalTypes.SHOW_MODAL_TITLE,
        payload: {
            title
        }
    }
}

export const showModalContent = component => {
    return {
        type: modalTypes.SHOW_MODAL_CONTENT,
        payload: {
            component
        }
    }
}