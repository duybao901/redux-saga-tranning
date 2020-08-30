import AdminHomePage from '../containers/AdminHomePage/index'
import Taskboard from '../containers/Taskboard/index'

export const API_URL = "http://localhost:3000"

export const STATUSS = [
    {
        value: 0,
        label: "READY"
    },
    {
        value: 1,
        label: "IN PROGRESS"
    },
    {
        value: 2,
        label: "COMPLETE"
    }
]

export const STATUS_CODE = {
    SUSCCES: 200,
    CREATE: 201,
    UPDATE: 202
}

export const ROUTES = [
    {
        path: '/',
        name: 'Admin',
        exact: true,
        component: AdminHomePage,
    },
    {
        path: '/task-board',
        name: 'TaskBoard',
        component: Taskboard,
    }
]