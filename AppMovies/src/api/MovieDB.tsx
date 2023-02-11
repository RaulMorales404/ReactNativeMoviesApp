import axios from 'axios';


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/',
    params: {
        api_key: 'ae0adddc54e64ac1bd1851595ead5b6c',
        language: 'es-Es',
    },
});
export default movieDB;
