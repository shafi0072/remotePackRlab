import React, { useState } from 'react';

const Footer = () => {
    const [input, setInput] = useState({
        firstName:'',
        lastName:'',
        email:'',
        message:''
    });
    const handleChange = (e) => {
        const newForm = {...input};
        newForm[e.target.name] = e.target.value;
        
        setInput(newForm)
    }
    
    return (
        <div>
            <div className="footer-section">
                <div className="row">
                    <div className="col-md-4">
                        <div className="left-section">
                            <h2>This is RLAB</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias eum nobis neque ipsum, qui dolor.</p>
                            <button>Parches Here</button>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-3">
                                <h5>Discover</h5>
                                <ul>
                                    <li><label htmlFor="">Discover1</label></li>
                                    <li><label htmlFor="">Discover2</label></li>
                                    <li><label htmlFor="">Discover3</label></li>
                                    <li><label htmlFor="">Discover4</label></li>
                                    <li><label htmlFor="">Discover5</label></li>
                                    <li><label htmlFor="">Discover6</label></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                            <h5>Discover</h5>
                                <ul>
                                    <li><label htmlFor="">Discover1</label></li>
                                    <li><label htmlFor="">Discover2</label></li>
                                    <li><label htmlFor="">Discover3</label></li>
                                    <li><label htmlFor="">Discover4</label></li>
                                    <li><label htmlFor="">Discover5</label></li>
                                    <li><label htmlFor="">Discover6</label></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                            <h5>Discover</h5>
                                <ul>
                                    <li><label htmlFor="">Discover1</label></li>
                                    <li><label htmlFor="">Discover2</label></li>
                                    <li><label htmlFor="">Discover3</label></li>
                                    <li><label htmlFor="">Discover4</label></li>
                                    <li><label htmlFor="">Discover5</label></li>
                                    <li><label htmlFor="">Discover6</label></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-footer text-center">
                    <p>© 2019 POLO - Responsive Multi-Purpose HTML5 Template. All Rights Reserved. INSPIRO</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;