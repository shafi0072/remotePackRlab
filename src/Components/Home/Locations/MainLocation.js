import React from 'react';
import Navbar from '../../Shared/Navbar';
import Location from './Locations';
const MainLocation = () => {
    return (
        <div className='row'>
            <div className="col-md-3">
                <Navbar/>
            </div>
            <div className="col-md-9">
                <Location/>
            </div>
        </div>
    );
};

export default MainLocation;