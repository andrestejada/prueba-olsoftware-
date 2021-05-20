import React from 'react'
import './User.scss'
import {ReactComponent as Pen} from '../../../../../../assets/pen-solid.svg';
import {ReactComponent as Trash} from '../../../../../../assets/trash-solid.svg';
import { useDispatch } from 'react-redux';
import { deleteUser, userSelected } from '../../../../../../actions/userActions';

const User = ({user}) => {

const handleEdit =()=>{
    dispatch( userSelected(id) );
};

const dispatch = useDispatch();

    const {nombre,
        apellido,
        identificacion,
        rol,
        estado,
        telefono,
        correo,
        id
    }= user;

    const handleDeleteUser =(id)=>{
        dispatch( deleteUser(id) )
    }
    return (
        <tr>
            <td>{nombre}</td>
            <td>{apellido}</td>
            <td>{identificacion}</td>
            <td>{rol}</td>
            <td>{estado}</td>
            <td>{telefono}</td>
            <td>{correo}</td>
            <td> 
                <Pen 
                    className='pen'
                    onClick={ handleEdit }
                />
                <Trash 
                    onClick={ ()=> handleDeleteUser(id) }
                    className='trash' 
                />
            </td>
            
        </tr>
    )
}

export default User
