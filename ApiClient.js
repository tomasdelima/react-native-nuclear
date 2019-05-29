import QueryString from 'query-string'

let headers = {'Accept': 'application/json', 'Content-Type': 'application/json'}

global.ApiClient = {
  post: (path, data={}) => {
    return fetch(nuclearConfigs.url + path, {
      method: 'POST',
      body: JSON.stringify(data),
      headers
    }).then((data) => data.json())
  },
  put: (path, data={}) => {
    return fetch(nuclearConfigs.url + path, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers
    }).then((data) => data.json())
  },
  get: (path, data={}) => {
    return fetch(nuclearConfigs.url + path + '?' + QueryString.stringify(data), {
      headers
    }).then((data) =>  data.json())
  },
}
