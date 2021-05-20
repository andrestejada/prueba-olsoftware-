import React from 'react'
import './Filter.scss'

const Filter = () => {
    return (
        <div className='filter-container' >
               <div>
                    <div className='filter-title' >
                        <span class="fas fa-user-plus"></span>    
                        <h2>Filtrar Busqueda</h2>
                    </div>
                <form>
                    <div class="mb-1" >
                        <label >Nombres</label>
                        <input
                            type='text'
                        />
                    </div>
                    <div class="mb-1" >
                        <label >Apellidos</label>
                        <input
                            type='text'
                        />
                    </div>
                    <div class="mb-1" >
                        <label >Identificación C.C</label>
                        <input
                            type='text'
                        />
                    </div>
                    <div class="mb-1" >
                        <label >Rol Asociado</label>
                        <select>
                            <option></option>
                        </select>
                    </div>
                    <div class="mb-1" >
                        <label >Estado</label>
                        <select>
                            <option></option>
                        </select>
                    </div>
                    <div class="mb-1" >
                        <label >Contraseña</label>
                        <input
                            type='text'
                        />
                    </div>
                    <div class="mb-1" >
                        <label >Teléfono</label>
                        <input
                            type='text'
                        />
                    </div>
                    <div class="mb-1" >
                        <label >Correo electrónico</label>
                        <input
                            type='text'
                        />
                    </div>

                    <div className='button-box' >
                        <button
                            type='button'
                            className='btn btn-green'
                        >Filtrar</button>
                        <button
                            type='button'
                            className='btn btn-outline-green'
                        >Limpiar</button>
                    </div>
                </form>
               </div>
        </div>
    )
}

export default Filter
