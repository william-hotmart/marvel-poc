import Axios from 'axios'
import ApiInfo from '../config/apiInfo'

Axios.defaults.baseURL = "http://gateway.marvel.com/"

const mountUrl = (url, query) => `${url}?apikey=${ApiInfo.publicKey}${query ? `&${query}` : ''}`

export const get = async (url, query) => {
    const { data } = await Axios.get(mountUrl(url, query))
    return data
}

export const post = async (url, body, headers, query) => {
    const response = await Axios.post(mountUrl(url, query), body, { headers })
    return response
}