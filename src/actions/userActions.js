import {ADD_USER ,DELETE_USER,USER_SELECTED,USER_UPDATED,CLEAN_USER_SELECTED} from '../types/types'

export const addUser =(user)=>({
    type:ADD_USER,
    payload:user
})

export const deleteUser =(id)=>({
    type:DELETE_USER,
    payload:id
})

export const userSelected =(id)=>({
    type:USER_SELECTED,
    payload: id
})


export const userUpdate =(user)=>({
    type:USER_UPDATED,
    payload: user
})

export const cleanUserSelected =()=>({
    type:CLEAN_USER_SELECTED,   
})



