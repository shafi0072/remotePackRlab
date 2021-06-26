import React, { useState } from 'react';
import '../../../responsive.css';

const DevicesData = (props) => {
    const {model} = props.data;
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
    return (
        <div>
            <div className="clients d-flex justify-content-evenly mb-5">
                    {edit.editable && <div className="form-name"><p className="form-name-p">{model}</p></div>}
                    {edit.clickEdit && <input type="text" placeholder='edit your Meter' name='one'/>}
                    <button className="btn btn-dark btnEdit" onClick={handleEdit}>Edit</button>
                    <button className="btn btn-primary btnArea" onClick={() => props.handleSelect()}>Select</button>
                </div>
        </div>
    );
};

export default DevicesData;