import Request from '../http.js'

// export  async function apiGetAText (params={}) {
//   const res = Request('https://api.quotable.io/random', params)
//   console.log(res);
//   return res
// }

export const apiGetAText = data =>
  Request({
    url: 'https://api.quotable.io/random',
    method: 'GET',
    data,
  });