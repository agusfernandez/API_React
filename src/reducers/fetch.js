import {ACTIONS} from '../actions/fetch';

export const initialState ={
    loading:true,
    error:false,
    data:{},
}

//el estado se modifica a trves de una accion 
//le paso un estado y una accion
// type es el tipo de accion q voy a tener
export const fetchReducer = (state,action)=>{
    switch (action.type){
      case ACTIONS.SET_DATA:  
        return{
            ...initialState,
            loading:false,
            data:{
                info:action.payload.info,
                results:action.payload.results,
            },
        };

        case ACTIONS.SET.ERROR:
            return{
                ...initialState,
                error:true,
                loading:false,

        }
        
        default:
            return state;
    }
};