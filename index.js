import axios from "axios";

class ApiCaller {
    defaultHeaders = {
        'Content-Type': 'application/json'
    }

    requestOptions = {
        headers: this.defaultHeaders
    }

    withHeaders(headers = []) {
        this.defaultHeaders = headers
        return this
    }

    withHeader(key, item) {
        this.defaultHeaders[key] = item
        return this
    }

    get(uri) {
        return axios.get(uri, this.requestOptions)
    }

    post(uri, data, headers = null) {
        if (headers !== null) {
            this.withHeaders(headers)
        }
        return axios.post(uri, data, this.requestOptions)
    }
}

export default ApiCaller;
