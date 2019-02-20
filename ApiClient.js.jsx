import QueryString from 'query-string'

let headers = {'Accept': 'application/json', 'Content-Type': 'application/json'}

global.ApiClient {
  post: (endpoint, data={}) => {
    return fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      headers
    }).then((data) => data.json())
  },
  get: (endpoint, data={}) => {
    return fetch(endpoint + '?' + QueryString.stringify(data), {
      headers
    }).then((data) =>  data.json())
  },
}
