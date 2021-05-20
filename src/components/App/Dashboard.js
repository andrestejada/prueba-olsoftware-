import React from 'react'
import Nav from './layout/Nav/Nav'
import Sidebar from './layout/Sidebar/Sidebar'
import './dashboard.scss'
import Main from './layout/Main/Main'

const Dashboard = () => {
    return (
        <div className='dashboard-container' >
            <Sidebar/>

            <section>
                <Nav/>
                <Main/>
            </section>
            
            
        </div>
    )
}

export default Dashboard
