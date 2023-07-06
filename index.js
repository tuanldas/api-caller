import axios from "axios";

let defaultHeaders = {
    'Content-Type': 'application/json'
}

let requestOptions = {
    headers: defaultHeaders
};

const ApiCaller = {
    withHeaders(headers = []) {
        defaultHeaders = headers
        return this
    },
    withHeader(key, item) {
        defaultHeaders[key] = item
        return this
    },
    get(uri) {
        return axios.get(uri, requestOptions)
    }
}

export default ApiCaller
