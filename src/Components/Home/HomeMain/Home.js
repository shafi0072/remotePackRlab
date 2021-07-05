import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Carusel from '../../Carusel/Carusel';
import Card from '../../Card/Card';
import Footer from '../../Footer/Footer';
import './Home.css';
import './HomeResponsive.css';
const Home = () => {
    return (
        <div>
            <Navbar/>
            <Carusel/>
            <div className='cardBG'>
            <Card/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;