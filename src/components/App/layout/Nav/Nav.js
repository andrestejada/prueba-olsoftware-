import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../../../../actions/authActions'
import { toggleMenu } from '../../../../actions/uiAction'
import './Nav.scss'

const Nav = () => {
const dispatch = useDispatch()

const handleLogout =()=>{
    dispatch( logOut() )
}

const [toggle, setToggle] = useState(false)

const handleToggle =()=>{
    setToggle(!toggle)
    dispatch( toggleMenu(toggle) )
}
    return (
        <nav>
                <div 
                    className='fas fa-bars'
                    onClick={ handleToggle }
                ></div>

                <p>Prueba Front-end</p>

                <div className='profile-box' >
                    <div className='fas fa-user-circle'></div>
                    <p className='user' >Andrés Felipe Garcia Castro</p>
                </div>

                <div 
                    class="fas fa-sign-in-alt"
                    onClick={handleLogout}
                ></div>

                  
        </nav>
    )
}

export default Nav
