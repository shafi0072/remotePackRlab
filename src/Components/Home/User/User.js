import React, { useState } from 'react';
import './user.css';
import UserForm from './UserForm'
const User = () => {
    const [click, setClick] = useState({
        clickToUser: true,
        clickToFrom:false
    });
    const handleClick = () => {
        const newClick = {...click}
        newClick.clickToFrom = true;
        newClick.clickToUser = false;
        setClick(newClick)
    }
    return (
        <div className='mt-5 text-center'>
        <h1 className='text-light'>User</h1>
          {click.clickToUser && <div>
           <div className="clients d-flex justify-content-evenly mb-5">
                <div className="name"><p>Ramos</p></div>
                <select name="target" id="" className='selectProparty'>
                    <option value="admin">Admin</option>
                    <option value="oparetors">Oparetors</option>
                    <option value="viewers">Viewers</option>
                </select>
                <button className="btn btn-primary btnArea">Edit</button>
            </div>
            <div className="clients d-flex justify-content-evenly mb-5">
                <div className="name"><p>Ramos</p></div>
                <select name="target" id="" className='selectProparty'>
                    <option value="admin">Admin</option>
                    <option value="oparetors">Oparetors</option>
                    <option value="viewers">Viewers</option>
                </select>
                <button className="btn btn-primary btnArea">Edit</button>
            </div><div className="clients d-flex justify-content-evenly mb-5">
                <div className="name"><p>Ramos</p></div>
                <select name="target" id="" className='selectProparty'>
                    <option value="admin">Admin</option>
                    <option value="oparetors">Oparetors</option>
                    <option value="viewers">Viewers</option>
                </select>
                <button className="btn btn-primary btnArea">Edit</button>
            </div><div className="clients d-flex justify-content-evenly mb-5">
                <div className="name"><p>Ramos</p></div>
                <select name="target" id="" className='selectProparty'>
                    <option value="admin">Admin</option>
                    <option value="oparetors">Oparetors</option>
                    <option value="viewers">Viewers</option>
                </select>
                <button className="btn btn-primary btnArea">Edit</button>
            </div>
            <div className="button d-flex justify-content-end">
                <button className="btn btn-primary" onClick={handleClick}>Add User</button>
            </div>    
           </div>}
            <div>
                {click.clickToFrom && <UserForm/>}
            </div>
        </div>
    );
};

export default User;