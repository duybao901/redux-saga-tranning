import axiosServices from '../commons/axiosServices'
import { API_URL } from '../contants/index'

const url = 'tasks'

export const getList = () => {
    return axiosServices.get(`${API_URL}/${url}`)
}

