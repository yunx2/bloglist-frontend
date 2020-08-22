import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/blogs'

let token = null

export const setToken = newToken => {
  token = `bearer ${newToken}`
}

export const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export const create = async dataObject => {
  const config = {
    headers: { Authorization: token }
  }
  const response = await axios.post(baseUrl, dataObject, config)
  console.log('response data:', response.data)
  return response.data
}

export const update = async (id, dataObject) => {
  const request = await axios.put(`${baseUrl}/${id}`, dataObject)
  console.log(request)
  return request
}

export const deleteBlog = async id => {
  await axios.delete(`${baseUrl}/${id}`)
}
