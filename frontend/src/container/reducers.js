import * as actionType from './types';

const initialState = {isLoggedln :false,user : null}
//reducer
export default function rootReducer(state = initialState,action){
    const {type,payload}=action;
    switch(type){
        case actionType.REGISTER_SUCCESS:
            return{
                ...state,
                isLoggedln:false
            }

            case actionType.REGISTER_FAIL:
                return{
                    ...state,
                    isLoggedln:false
                }

                case actionType.LOGIN_SUCCESS:
                    return{
                        ...state,
                        isLoggedln:true,
                        user:payload.user
                    }

                    case actionType.LOGIN_FAIL:
                        return{
                            ...state,
                            isLoggedln:false,
                            user:null
                        }

                        case actionType.LOGOUT:
                            return{
                                ...state,
                                isLoggedln:false,
                                user: null
                            }
            default:
                return state;
    }
    
}