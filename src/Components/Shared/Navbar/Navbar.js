import React from 'react';
import logo from '../../../Resorces/logo_RLAB.png';
import './nav.css';
import {Link} from 'react-router-dom'
const Navbar = () => {
    
   
    return (
        <div >
            <nav class={`navbar navbar-expand-lg navbar-dark  navAvatar navBlack`}>
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#"><img style={{width:'10%'}} src={logo} alt=""/></Link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="#">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="#">Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="#">About us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="#">contract us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/userHome">Dashboard</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;