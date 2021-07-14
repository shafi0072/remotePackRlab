import React, { useContext } from 'react';
import { userContext } from '../../App';
import './Navbar.css';
import {Link} from 'react-router-dom'
const Navbar = (props) => {
    const [user, setUser] = useContext(userContext);
    const handleHomeClick = () => {
        const newClick = {...user}
        newClick.userHome = true;
        newClick.user = false;
        newClick.devices = false;
        newClick.locations = false;
        newClick.command = false;
        setUser(newClick);
    }
    const handleUserClick = () => {
        const newClick = {...user}
        newClick.userHome = false;
        newClick.user = true;
        newClick.devices = false;
        newClick.locations = false;
        newClick.command = false;
        setUser(newClick);
    };
    
   
    const handleCommandChanger = () => {
        const newClick = {...user}
        newClick.userHome = false;
        newClick.user = false;
        newClick.devices = false;
        newClick.locations = false;
        newClick.command = true;
        setUser(newClick);
    }

    return (
        <div className='navBackground'>
            <ul style={{listStyle:'none', margin:'0', padding:'0'}}>
                <Link className="navbar-link" to='/userHome'><li className=' navbar-item' onClick={handleHomeClick} style={{cursor:'pointer'}}><h5 className="navbar-text">User Home</h5></li></Link>
                {user.admin && <li className=' navbar-item' onClick={handleUserClick} style={{cursor:'pointer'}}><h5 className="navbar-text">User</h5></li>}
                <Link className="navbar-link" to="/devices"><li className=' navbar-item' style={{cursor:'pointer'}}><h5 className="navbar-text">Devices</h5></li></Link>
                <Link className="navbar-link" to='/location'><li className=' navbar-item' style={{cursor:'pointer'}}><h5 className="navbar-text">Locations</h5></li></Link>
                <Link className="navbar-link" to="/command"><li className=' navbar-item'  style={{cursor:'pointer'}}><h5 className="navbar-text">Commands</h5></li></Link>
                <li className=' navbar-item d-flex justify-content-center align-items-center' onClick={handleCommandChanger} style={{cursor:'pointer'}}><button className='btn btn-dark'>Log out</button></li>
            </ul>
        </div>
    );
};

export default Navbar;