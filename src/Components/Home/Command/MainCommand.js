import React from 'react';
import logo from '../../../Resorces/logo_RLAB.png';
import Navbar from '../../Shared/Navbar';
import Command from './Command';
import './Command.css';
import Navbar2 from '../../Shared/Navbar/Navbar'
const MainCommand = () => {
    return (
        <div className="row">
        <Navbar2/>
            <div className="col-md-3 command-navbar">
                <Navbar/>
            </div>
            <div className="col-md-9 command-background">
            <div className="logo-img">
                <img src={logo} alt="" style={{width:'20%'}} className='mt-5' />
            </div>
                <Command/>
            </div>
        </div>
    );
};

export default MainCommand;