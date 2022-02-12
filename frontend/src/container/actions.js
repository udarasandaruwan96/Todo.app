import*as actionType from './types';


//registerAction
export const registerAction = (payload)=>{
    return{
        type:actionType.REGISTER_SUCCESS,
        payload
    }
}