import qs from 'query-string'
import axiosServices from '../commons/axiosServices'
import { API_URL } from '../contants/index'

const url = 'tasks'

export const getList = param => {
    // Kiem tra trong param co cai key nao hay khong
    let queryParam = ''
    if (param) {
        if (Object.keys(param).length > 0) {
            queryParam = `?${qs.stringify(param)}`;
        }
    }
    return axiosServices.get(`${API_URL}/${url}${queryParam}`)

}

export const addTask = data => {
    return axiosServices.post(`${API_URL}/${url}`, data)
}

// http://localhost:3000/tasks/:id METHOD : PUT
export const updateTaskAPI = (data, taskId) => {
    return axiosServices.put(`${API_URL}/${url}/${taskId}`, {
        title: data.title,
        description: data.description,
        status: parseInt(data.status)
    })
}
