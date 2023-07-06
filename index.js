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
        console.log(this.requestOptions)
        return axios.get(uri, this.requestOptions)
    }
}

export default ApiCaller;
