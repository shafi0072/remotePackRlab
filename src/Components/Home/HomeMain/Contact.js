import React, { useState } from 'react';
import './Home.css'


    

const Contact = () => {
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
            <div className="contact-section py-5">
                <div className="contact-container">
                    <h1 className="text-center homePage-title">Contact Us</h1>
                    <p className="homePage-p text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                    <div className="row">
                        <div className="col-md-5 text-center">
                            <div>
                                <h1 className="">RLAB</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolore dicta eligendi corporis repudiandae tenetur quia sapiente laudantium minima repellendus assumenda laboriosam porro veniam esse hic, illum possimus quas nobis?</p>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-6 text-center">
                            <div>
                                <h3 className=''>Email Us</h3>
                                <form action='https://formspree.io/f/xbjqygpq' method="POST">
                                    <h4 htmlFor="firstName" style={{margin:"0"}}>First Name</h4><br/>
                                    <input className="footer-input" type="text" name='firstName' placeholder="First Name" id="firstName" style={{width:'55%', height:'40px', borderRadius:'5px', padding:'10px'}} onChange={handleChange}/>
                                    <br/>
                                    <h4 htmlFor="lastName" style={{margin:"5px"}}>Last Name</h4><br />
                                    <input className="footer-input" type="text" name="lastName" placeholder="Last Name" id="lastName" style={{width:'55%' , borderRadius:'5px', height:'40px', padding:'10px'}} onChange={handleChange}/><br/>
                                    <h4 htmlFor="email" style={{margin:"5px"}}>Email Adress</h4><br />
                                    <input className="footer-input" type="email" name="email" placeholder="Email Adress" id="email" style={{width:'55%',borderRadius:'5px', height:'40px', padding:'10px' }} onChange={handleChange}/><br />
                                    <h4 htmlFor="message" style={{margin:"5px"}}>Message</h4><br />
                                    <textarea className="footer-textarea mb-2" name="message" id="message" cols="45" rows="3" placeholder="Write Something" style={{resize:'vartical', borderRadius:"5px", padding:'10px'}} onChange={handleChange}></textarea>
                                    <br />
                                    <button className="btn btn-primary footer-button" type="submit">Submit</button>
                                
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Contact;