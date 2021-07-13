import axios from "axios";

// exportamos la api y devuelve una instancia de axios
export const API = axios.create({
    baseURL:'https://rickandmortyapi.com/api/',

});
