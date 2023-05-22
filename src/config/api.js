import axios from "axios";

export const BASE_URL = `https://api.themoviedb.org/3`

// In React
// export const TMDB_TOKEN = process.env.VITE_APP_TMDB_TOKEN;

// In VITE
export const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// export const TMDB_TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MzI3NTc2MmMyMTllODExYjM5Yjc5ZGYwYzYzNzY2ZSIsInN1YiI6IjY0NmI2ZmI5YzM1MTRjMmIwYTMzNWQzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Aqo9i5vRN_Q53gzRrv5wmQQeL0nh03Kw4pNYA4guDiA`;

const headers = {
    Authorization: `Bearer ${TMDB_TOKEN}`
};


export const fetchDataFromApi = async(endpoint, params)=>{
    try {
        const response = await axios.get(BASE_URL+endpoint, {
            headers: headers,
            params: params
        })
        return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
}


/* 
export const fetchDataFromApi = async(endpoint, params)=>{
    try {
        const {data} = await axios.get(BASE_URL+endpoint, {
            headers,
            params
        })
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}
*/