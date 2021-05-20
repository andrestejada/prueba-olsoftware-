import React from 'react'
import '../spiner/Spiner.scss'

const Spinner = () => {
    return (
        <div className='spiner-container' >
            <h2>Estamos preparando todo para tí</h2>
            <div class="spinner">
                <div class="bounce1"></div>
                <div class="bounce2"></div>
                <div class="bounce3"></div>
            </div>
        </div>
    )
}

export default Spinner
