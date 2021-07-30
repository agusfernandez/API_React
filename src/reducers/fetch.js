import {ACTIONS} from '../actions/fetch';

export const initialState ={
    loading:true,
    error:false,
    data:{},
}

//el estado se modifica a trves de una accion 
//le paso un estado y una accion
export const fetchReducer = (state,action)=>{

}