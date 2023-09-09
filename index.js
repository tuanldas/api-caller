import axios from "axios";

class ApiCaller {
    defaultHeaders = {
        'Content-Type': 'application/json'
    }

    withHeaders(headers) {
        this.defaultHeaders = {
            ...this.defaultHeaders,
            ...headers
        }
        return this
    }

    withHeader(key, item) {
        this.defaultHeaders[key] = item
        return this
    }

    get(uri) {
        return axios.get(uri, this.renderRequestOpction)
    }

    post(uri, data, headers = null) {
        if (headers !== null) {
            this.withHeaders(headers)
        }
        return axios.post(uri, data, this.renderRequestOpction)
    }

    delete(uri, headers = null) {
        if (headers !== null) {
            this.withHeaders(headers)
        }
        return axios.delete(uri, this.renderRequestOpction)
    }

    static renderRequestOption() {
        return {
            headers: this.defaultHeaders
        }
    }
}

export default ApiCaller;
