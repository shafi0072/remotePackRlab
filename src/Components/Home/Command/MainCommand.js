import React from 'react';
import Navbar from '../../Shared/Navbar';
import Command from './Command'
const MainCommand = () => {
    return (
        <div className="row">
            <div className="col-md-3">
                <Navbar/>
            </div>
            <div className="col-md-9">
                <Command/>
            </div>
        </div>
    );
};

export default MainCommand;