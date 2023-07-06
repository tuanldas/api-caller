import axios from "axios";

let defaultHeaders = {
    'Content-Type': 'application/json'
}

let requestOptions = {
    method: 'get',
    headers: defaultHeaders
};

const ApiCaller = {
    get(uri) {
        return fetch(uri, requestOptions)
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
            });
    }
}

export default ApiCaller
