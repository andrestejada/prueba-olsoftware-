import {LOGIN_SUCCESS,LOGOUT,START_LOADING} from '../types/types'

const initialState={
    isAuth:false,
    loading:false
}


export const authReducer=(state=initialState,action)=>{
    switch (action.type) {
        case LOGIN_SUCCESS:
            return{
                ...state,
                loading:false,
                isAuth: action.payload
            }
        case LOGOUT:
            return{
                ...state,
                isAuth:action.payload
            }
        case START_LOADING:
            return{
            ...state,
            loading:true,
        }
        default:
            return state;
    }
}