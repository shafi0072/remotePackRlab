import React, { useState } from 'react';
import DevicesForm from './DevicesForm';

const LocationUser = () => {
    const [click, setClick] = useState({
        locationCLick:true,
        terminal: false
    })
    const handleTerminal = () => {
        const newClick = {...click};
        newClick.locationCLick = false;
        newClick.terminal = true;
        setClick(newClick)
    }
    return (
        <div >
           {click.locationCLick && <div className='row'>
           <div className="col-md-4 mb-3">
            <div class="card" style={{width: '10rem'}} onClick={handleTerminal}>
                <img src="https://www.clipartmax.com/png/middle/301-3017435_icon-delivery-vector-image-delivery-truck-vector-png.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                   <h6>Location 1</h6>
                </div>
            </div>
            </div>
            <div className="col-md-4 mb-3">
            <div class="card" style={{width: '10rem'}} onClick={handleTerminal}>
                <img src="https://www.clipartmax.com/png/middle/301-3017435_icon-delivery-vector-image-delivery-truck-vector-png.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                   <h6>Location 2</h6>
                </div>
            </div>
            </div>
            <div className="col-md-4 mb-3">
            <div class="card" style={{width: '10rem'}} onClick={handleTerminal}>
                <img src="https://www.clipartmax.com/png/middle/301-3017435_icon-delivery-vector-image-delivery-truck-vector-png.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                   <h6>Location 3</h6>
                </div>
            </div>
            </div>
            <div className="col-md-4 mb-3">
            <div class="card" style={{width: '10rem'}} onClick={handleTerminal}>
                <img src="https://www.clipartmax.com/png/middle/301-3017435_icon-delivery-vector-image-delivery-truck-vector-png.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                   <h6>Location 4</h6>
                </div>
            </div>
            </div>
            <div className="col-md-4 mb-3">
            <div class="card" style={{width: '10rem'}} onClick={handleTerminal}>
                <img src="https://www.clipartmax.com/png/middle/301-3017435_icon-delivery-vector-image-delivery-truck-vector-png.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                   <h6>Location 6</h6>
                </div>
            </div>
            </div>
            <div className="col-md-4 mb-3">
            <div class="card" style={{width: '10rem'}} onClick={handleTerminal}>
                <img src="https://www.clipartmax.com/png/middle/301-3017435_icon-delivery-vector-image-delivery-truck-vector-png.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                   <h6>Location 6</h6>
                </div>
            </div>
            </div>
           </div>}
            {click.terminal && <DevicesForm/>}
        </div>
    );
};

export default LocationUser;