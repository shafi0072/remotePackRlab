import React, { useContext, useEffect, useState } from 'react';
import './user.css';
import UserForm from './UserForm';
import {userContext} from '../../../App'
import UserData from './UserData'

const User = (props) => {
   const data = props.data;
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
    const [user, setUser]  = useContext(userContext);
    
    return (
        <div className='mt-5 text-center'>
        
          {click.clickToUser && <div>
            
                <div>
                    {
                        data.map(data => <UserData data={data}/>)
                    }
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