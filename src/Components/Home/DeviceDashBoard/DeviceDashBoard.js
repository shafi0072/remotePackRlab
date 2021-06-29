import React from 'react';
import Navbar from '../../Shared/Navbar';
import DeveiceMeter from '../Locations/DeveiceMeter';

const DeviceDashBoard = () => {
    return (
        <div className='row'>
            <div className="col-md-3">
                <Navbar/>
            </div>
            <div className="col-md-3">
                <DeveiceMeter/>
            </div>
        </div>
    );
};

export default DeviceDashBoard;