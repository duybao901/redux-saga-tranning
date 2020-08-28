import axios from 'axios'

class axiosServices {

    constructor() {
        const intance = axios.create();
        intance.interceptors.response.use(this.handleSuccess, this.handleError)
        this.intance = intance; // Đê biến intance sử dụng toàn cục
    }

    handleSuccess(res) {
        return res;
    }

    handleError(err) {
        return Promise.reject(err);
    }

    get(url) {
        return this.intance.get(url);
    }

    post(url, body) {
        return this.intance.post(url,body)
    }

}

export default new axiosServices();