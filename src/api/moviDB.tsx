import axios from "axios";



const moviDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: '5f9fa986b151658b0beb1b81fe5671f0',
        language: 'es-ES',
        page: 1
    }
});

export default moviDB;