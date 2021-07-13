import {useCallback, useEffect, useState } from "react";
import {API} from "../API";

//cargo los diferentes estados
export const useFetch=(endpoint)=>{
 // seteo de los estados 
    const [loading, setLoading ] = useState(true);
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
//funcion asincronica
//axios es  igual a fetch y devuelve un objeto 
//api.get($endpoint) me permite concatenar el link de la api + endpoint
//useCallback permite que memorice una funcion 
    const getData = useCallback(async()=>{
        try{
            //{data} con las llaves destructuro el objeto
            const {data}= await API.get(`${endpoint}`);
            setData(data);
            setLoading(false);
        } catch(e){
            setError(true);
        };

        //esto cambia en funcion del endpoint 
    }, [endpoint]);

//endpoint para el search ..cada vez q cambie el endpoint lo que va a ser es volver a cargar getData y cargar la nueva data. este getData solo cambia si el endpoint cambia o hago del getData y para ello hay q memorizarla asi nose vuelve a cargar (useCallback) // ejecuta cuando cambia el endpoint
    useEffect(() => {
       getData();
    }, [endpoint, getData]);

    return[data,loading,error];

};