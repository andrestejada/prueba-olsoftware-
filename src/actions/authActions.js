import {LOGIN_SUCCESS,LOGOUT,START_LOADING} from '../types/types'

export const loginSuccess=()=>({
    type: LOGIN_SUCCESS,
    payload:true
})

export const logOut=()=>({
    type:LOGOUT,
    payload:false
})


export const startloading=()=>({
    type:START_LOADING,
})