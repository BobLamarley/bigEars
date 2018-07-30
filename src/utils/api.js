const mocks = {
  'auth': { 'POST': { token: 'This-is-a-mocked-token' } },
  'user/me': { 'GET': { login: 'alpha', role: 'admin', firstname: 'Maitre', lastname: 'Alpha', lastConnection: 1531816274, imageProfile: 'http://media.lelombrik.net/t/2d1063edb5f4caa228705370e9e0f1d9/f/2d1063edb5f4caa228705370e9e0f1d9.jpg' } }
}

const apiCall = ({url, method, ...args}) => new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      resolve(mocks[url][method || 'GET'])
      console.log(`Mocked '${url}' - ${method || 'GET'}`)
      console.log('response: ', mocks[url][method || 'GET'])
    } catch (err) {
      reject(new Error(err))
    }
  }, 1000)
})

export default apiCall
