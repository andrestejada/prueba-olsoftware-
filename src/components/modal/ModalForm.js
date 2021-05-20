import Modal from 'react-modal';
import React , {useEffect} from 'react';
import './ModalForm.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, userUpdate ,cleanUserSelected } from '../../actions/userActions';
import { useSelector } from 'react-redux';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(128, 128, 128, 0.566)'
  },

    content : {
      width                 : '600px',
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      
    }
  };
  const ModalForm = () => {

  const dispatch = useDispatch()

  const {userSelected} = useSelector(state => state.users);

  const initialState={
    nombre:'',
    apellido:'',
    identificacion:'',
    rol:'',
    estado:'',
    telefono:'',
    email:'',
  }

  const [formValues, setformValues] = useState(initialState)
  console.log(formValues)

  useEffect(() => {

    if(userSelected){
      openModal();
      setformValues(userSelected)
    }else{
      return
    }

  }, [userSelected,setformValues]);

  const {
    nombre,
    apellido,
    identificacion,
    rol,
    estado,
    telefono,
    correo,} = formValues;

  const handleOnchangeForm =(e)=>{
    setformValues({
      ...formValues,
      [e.target.name] : e.target.value
    })
  };

  const handleSubmitModal=(e)=>{
    e.preventDefault();

    if(nombre ===''||apellido===""||identificacion===""||
      rol===""||estado===""||telefono===""||correo===""
    ){
      console.log('no paso la validacion')
      return
    }

    if(userSelected){
      dispatch( userUpdate(formValues) )
    }else{
      const id = Date.now();
      formValues.id = id
      dispatch( addUser(formValues) ) 
    }
    setformValues(initialState)
    closeModal();
    
  }
  
  const [modalIsOpen,setIsOpen] = useState(false);
  
  function openModal() {
    setIsOpen(true);
  }

  
  function closeModal(){
    setIsOpen(false);
    setformValues(initialState)
    dispatch( cleanUserSelected() )
  }
      return ( 
        <div>
        <button 
        className='btn btn-primary'
        onClick={openModal}>Crear</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >

          <div className='header-modal' >
            <h2>{ userSelected ?'Editar Usuario' :'Agregar Nuevo Usuario' }</h2>
            <button
              className='close-modal-btn' 
              onClick={closeModal}
            >&times;</button>
          </div>
          

          <form 
            class="row" 
            onSubmit={handleSubmitModal}
          >
            <div className='col-6' >
              <label>Nombre</label>
              <input 
                type='text'
                class="form-control"
                name='nombre'
                onChange={handleOnchangeForm}
                value={nombre}  
              />
            </div>
            <div className='col-6' >
              <label>Apellido</label>
              <input 
                type='text'
                class="form-control"
                name='apellido'
                onChange={handleOnchangeForm}
                value={apellido} 
              />
            </div>
            <div className='col-6' >
              <label>Identificacion C.C</label>
              <input 
                type='text'
                class="form-control"
                name='identificacion'
                onChange={handleOnchangeForm}
                value={identificacion}   
              />
            </div>
            <div className='col-6' >
              <label>Rol Asociado</label>
              <input 
                class="form-control"
                type='text'
                name='rol'
                onChange={handleOnchangeForm}
                value={rol} 
              />
            </div>
            <div className='col-6' >
              <label>Estado</label>
              <input 
                type='text'
                class="form-control"
                name='estado'
                onChange={handleOnchangeForm}
                value={estado} 
              />
            </div>
            <div className='col-6' >
              <label>Contraseña</label>
              <input 
                type='text'
                class="form-control"
                />
            </div>
            <div className='col-6' >
              <label>Telefono</label>
              <input 
                type='text'
                class="form-control"
                name='telefono'
                onChange={handleOnchangeForm}
                value={telefono} 
              />
            </div>
            <div className='col-6' >
              <label>Correo Electronico</label>
              <input 
                type='text'
                class="form-control"
                name='correo'
                onChange={handleOnchangeForm}
                value={correo} 
              />
            </div>
            <div className='row justify-content-center mt-4' >
              <button
                className="col-3 btn btn-green mx-3"
                type='submit'
              >Aceptar</button>
              <button
                type='button'
                className="col-3 btn btn-outline-green mx-3"
                onClick={closeModal}
              >Cancelar</button>
            </div>
          </form>
        </Modal>
      </div>
       );
  }
   
  export default ModalForm;