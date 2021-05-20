import {ADD_USER, DELETE_USER, USER_SELECTED,USER_UPDATED,CLEAN_USER_SELECTED} from '../types/types'

const initialState={
    users: [
        {
            id: '1',
            nombre:'Andres',
            apellido:'tejada',
            identificacion:'1113532691',
            rol: 'administrador',
            estado:'activo',
            telefono:'3165327601',
            correo:'andres@correo.com'
        }
    ],
    userSelected:null
}

export const userReducer =(state= initialState ,action)=>{
    switch (action.type) {
        case ADD_USER:
            return{
                ...state,
                users: [...state.users, action.payload ]
            }
        case DELETE_USER:
            return{
                ...state,
                users: state.users.filter( user=> user.id !== action.payload )
            }
        case USER_SELECTED:
            return{
                ...state,
                userSelected: state.users.find( user=> user.id === action.payload )
            }
        case USER_UPDATED:
            return{
                ...state,
                users: state.users.map( 
                    user=> (user.id=== action.payload.id) 
                            ? action.payload
                            : user
                    ),
                
                userSelected:null
            }
        case CLEAN_USER_SELECTED:
            return{
                ...state,
                userSelected:null
            }
        
        default:
            return state;
    }
}