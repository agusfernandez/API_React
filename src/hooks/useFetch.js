import {useEffect, useState } from "react";
import {API} from "../API";

//cargo los diferentes estados
export const useFetch=(endpoint)=>{

    const [loading, setLoading ] = useState(true);
    const [data, setData] = useState({});
    const [error, setError] = useState(false);

    const getData = useCallback(async()=>{
        try{
            const {data}= await API.get(`${endpoint}`);
            setData(data);
            setLoading(false);
        } catch(error){
            setError(true);
        };
    }, [endpoint]);

    useEffect(() => {
       getData();
    }, [endpoint, getData]);

}