import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginSuccess, startloading } from '../../actions/authActions'
import {ReactComponent as Email} from '../../assets/user-regular.svg';
import {ReactComponent as Password} from '../../assets/unlock-alt-solid.svg';
import Spinner from '../spiner/Spiner'

import './login.scss'


const Login = () => {

const dispatch = useDispatch();
const {loading} = useSelector(state => state.auth)



const [loginForm, setLoginForm] = useState({
  email:'',
  password:''
})

const {email,password} =loginForm;

const handleLoginChange=(e)=>{
  setLoginForm({
    ...loginForm,
    [e.target.name] : e.target.value
  })
};

const hanleSubmitLogin =(e)=>{
  e.preventDefault();

  if( email ==='andres@correo.com' && password ==='123456' ){
      dispatch( startloading())

      setTimeout(()=>{
        dispatch( loginSuccess() )
      },3000)
      
  }else{
    console.log('no paso la validacion')
    return
  }
}


    return (
      <>
      { loading && <Spinner/> }
        <div className={'login-container'}>

          <div className='col-login' >
            <div>
            <h1>Aplicación OLSoftware</h1>
            <p>Prueba práctica Front-end senior</p>
            </div>
          </div>

          <div className='col-login' >
            <form 
              onSubmit={hanleSubmitLogin} 
              className='form-login' >
              <div className='form-container'>
                
              <h2>Inicio de sesión</h2>

              <div className='input-container' >
                <div className='input-box' >
                  <input 
                    type="email"
                    placeholder='Usuario'
                    name='email'
                    value={email}
                    onChange={handleLoginChange} 
                  />
                  <Email
                    className='icon-login'
                  />
                </div>
                <div className='input-box' >
                <input 
                  type="password" 
                  placeholder='Contraseña'
                  name='password'
                  value={password} 
                  onChange={handleLoginChange}  
                />
                <Password
                  className='icon-login'
                />
                </div>
                
              </div>
             
              <input 
                type='submit'
                value='Iniciar sesión'
                className='btn btn-primary text-white w-100'
                
              />
              </div>

            </form>
          </div>
        </div>
        <footer>OLSoftware - 2018</footer>
        </>
    )
}

export default Login
