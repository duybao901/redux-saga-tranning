import * as uiTypes from '../contants/ui'

export const globalShowLoading = () => {
    return {
        type: uiTypes.GLOBAL_SHOW_LOADING
    }
}

export const globalHideLoading = () => {
    return {
        type: uiTypes.GLOBAL_HIDE_LOADING
    }
}