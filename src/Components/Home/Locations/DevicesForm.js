import React, { useState } from 'react';
import './Location.css';
import DeveiceMeter from './DeveiceMeter'
const DevicesForm = () => {
    const [edit, setEdit] = useState({
        editable:true,
        clickEdit: false
    })
    const handleEdit = () => {
       const newUser = {...edit};
       newUser.editable = false;
       newUser.clickEdit = true;
       setEdit(newUser);
    };
    const [sl, setSl] = useState({
       notClick: true,
       click: false 
    });
    const handleSelect = () => {
        const newSl = {...sl};
        newSl.notClick = false;
        newSl.click = true;
        setSl(newSl);
    }
    return (
            <div>
                {sl.notClick && <div className="container">
                <div className="clients d-flex justify-content-evenly mb-5">
                    {edit.editable && <div className="form-name"><p>Energy Meter 01</p></div>}
                    {edit.clickEdit && <input type="text" placeholder='edit your Meter' name='one'/>}
                    <button className="btn btn-dark btnEdit" onClick={handleEdit}>Edit</button>
                    <button className="btn btn-primary btnArea" onClick={handleSelect}>Select</button>
                </div>
                    <div className="clients d-flex justify-content-evenly mb-5">
                    {edit.editable &&<div className="form-name"><p>Energy Meter 02</p></div>}
                    {edit.clickEdit && <input type="text" placeholder='edit your Meter' name='two'/>}
                    <button className="btn btn-dark btnEdit" onClick={handleEdit}>Edit</button>
                    <button className="btn btn-primary btnArea">Select</button>
                </div>
                <div className="clients d-flex justify-content-evenly mb-5">
                    {edit.editable && <div className="form-name"><p>Level Meter 03</p></div>}
                    {edit.clickEdit && <input type="text" placeholder='edit your Meter' name='three'/>}
                    <button className="btn btn-dark btnEdit" onClick={handleEdit}>Edit</button>
                    <button className="btn btn-primary btnArea">Select</button>
                </div>
                <div className="clients d-flex justify-content-evenly mb-5">
                    {edit.editable &&<div className="form-name"><p>Getway A1</p></div>}
                    {edit.clickEdit && <input type="text" placeholder='edit your Meter' name='four'/>}
                    <button className="btn btn-dark btnEdit" onClick={handleEdit}>Edit</button>
                    <button className="btn btn-primary btnArea">Select</button>
                </div>
                <div className="button d-flex justify-content-end">
                    <button className="btn btn-primary">Edit Location</button>
                </div>    
           </div>}
           {
               sl.click && <DeveiceMeter/>
           }
            </div>
        
    );
};

export default DevicesForm;