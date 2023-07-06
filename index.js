let defaultHeaders = {
    'Content-Type': 'application/json'
};
let requestOptions = {
    method: 'get',
    headers: defaultHeaders
};

const get = (uri) => {
    return fetch(uri, requestOptions)
        .then(function (response) {
            return response.json();
        })
        .catch(function (error) {
        });
}

module.exports = {
    get: get
};

