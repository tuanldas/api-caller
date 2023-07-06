import axios from "axios";

let defaultHeaders = {
    'Content-Type': 'application/json'
}

let requestOptions = {
    headers: defaultHeaders
};

class ApiCaller {
    static withHeaders(headers = []) {
        defaultHeaders = headers
        return this
    }

    static withHeader(key, item) {
        defaultHeaders[key] = item
        return this
    }

    static get(uri) {
        return axios.get(uri, requestOptions)
    }
}

export default ApiCaller
