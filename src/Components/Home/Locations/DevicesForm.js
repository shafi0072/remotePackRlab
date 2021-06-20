import React, { useState } from 'react';
import './Location.css'
const DevicesForm = () => {
    const [edit, setEdit] = useState({
        editable:true,
        clickEdit: false
    })
    return (
            <div className="container">
                <div className="clients d-flex justify-content-evenly mb-5">
                    {edit.editable && <div className="form-name"><p>Energy Meter 01</p></div>}
                    {edit.clickEdit && <input type="text" placeholder='edit your Meter' name='one'/>}
                    <button className="btn btn-dark btnEdit">Edit</button>
                    <button className="btn btn-primary btnArea">Select</button>
                </div>
                    <div className="clients d-flex justify-content-evenly mb-5">
                    {edit.editable &&<div className="form-name"><p>Energy Meter 02</p></div>}
                    {edit.clickEdit && <input type="text" placeholder='edit your Meter' name='two'/>}
                    <button className="btn btn-dark btnEdit">Edit</button>
                    <button className="btn btn-primary btnArea">Select</button>
                </div>
                <div className="clients d-flex justify-content-evenly mb-5">
                    {edit.editable && <div className="form-name"><p>Level Meter 03</p></div>}
                    {edit.clickEdit && <input type="text" placeholder='edit your Meter' name='three'/>}
                    <button className="btn btn-dark btnEdit">Edit</button>
                    <button className="btn btn-primary btnArea">Select</button>
                </div>
                <div className="clients d-flex justify-content-evenly mb-5">
                    {edit.editable &&<div className="form-name"><p>Getway A1</p></div>}
                    {edit.clickEdit && <input type="text" placeholder='edit your Meter' name='four'/>}
                    <button className="btn btn-dark btnEdit">Edit</button>
                    <button className="btn btn-primary btnArea">Select</button>
                </div>
                <div className="button d-flex justify-content-end">
                    <button className="btn btn-primary">Edit Location</button>
                </div>    
           </div>
        
    );
};

export default DevicesForm;