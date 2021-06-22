import React, { useContext, useState } from 'react';
import './user.css';
import UserForm from './UserForm';
import {userContext} from '../../../App'
const User = (props) => {
    const {name, email, Role} = props.data
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
    const [user, setUser]  = useContext(userContext)
    return (
        <div className='mt-5 text-center'>
        <h1 className='text-light'>User</h1>
          {click.clickToUser && <div>
          
            <div className="clients d-flex justify-content-evenly mb-5">
                <div className="name"><p>{name}</p></div>
                <select name="target" id="" className='selectProparty' value={Role}>
                    <option value="admin">Admin</option>
                    <option value="oparetors">Oparetors</option>
                    <option value="viewers">Viewers</option>
                </select>
                <button className="btn btn-primary btnArea">Edit</button>
            </div> 
           </div>}
            <div>
                {click.clickToFrom && <UserForm/>}
            </div>
        </div>
    );
};

export default User;