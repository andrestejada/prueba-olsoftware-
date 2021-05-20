import React from 'react'
import { useSelector } from 'react-redux'
import ModalForm from '../../../../modal/ModalForm'
import User from './User/User'
import './Users.scss'

function Users() {

  const {users} = useSelector(state => state.users)

    return (
        <div className='user-container' >
            <div className='header-users' >
                <div className='d-flex'>
                    <i class="fas fa-users"></i>
                    <h2 className='fs-3' >Usuarios existentes</h2> 
                </div>
                
                <ModalForm/>
            </div>

            <table class="table">
            <thead>
                <tr>
                    <td>Nombres</td>
                    <td>Apellido</td>
                    <td>Identificación C.C</td>
                    <td>Rol asociado</td>
                    <td>Estado</td>
                    <td>Telefono</td>
                    <td>Correo electrónico</td>
                    <td>Acción</td>
                </tr>
            </thead>
            <tbody>
                {
                    users.map( (user)=>(
                        <User
                            key={user.id}
                            user={user}
                        />
                    ))
                }
            </tbody>
            </table>
        </div>
    )
}

export default Users
