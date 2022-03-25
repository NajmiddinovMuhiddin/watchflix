import axios from "axios";

const API_URL = 'https://www.omdbapi.com';
const API_KEY = '238dee12';

export const apiDetail = async (imdbID) => {
    const response = await axios.get(`${API_URL}/?i=${imdbID}&apikey=${API_KEY}`);
    return response.data;
}

const api = async (search) => {
    const response = await axios.get(`${API_URL}/?i=tt3896198&apikey=${API_KEY}&s=${search}`);
    return response.data.Search;
}

export default api;