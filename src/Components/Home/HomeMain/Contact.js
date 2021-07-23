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
                <h1 className="text-center homePage-title">Contact Us</h1>
                <div className="row">
                    <div className="col-md-4">
                        <h1 className="">RLAB</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolore dicta eligendi corporis repudiandae tenetur quia sapiente laudantium minima repellendus assumenda laboriosam porro veniam esse hic, illum possimus quas nobis?</p>
                    </div>
                    <div className="col-md-6">
                        <h3 className='mt-5'>Email Us</h3>
                        <form action='https://formspree.io/f/xbjqygpq' method="POST">
                            <label htmlFor="firstName" style={{margin:"5px"}}>First Name</label><br/>
                            <input className="footer-input" type="text" name='firstName' placeholder="First Name" id="firstName" style={{width:'20%', height:'40px', borderRadius:'5px', padding:'10px'}} onChange={handleChange}/><br/>
                            <label htmlFor="lastName" style={{margin:"5px"}}>Last Name</label><br />
                            <input className="footer-input" type="text" name="lastName" placeholder="Last Name" id="lastName" style={{width:'20%' , borderRadius:'5px', height:'40px', padding:'10px'}} onChange={handleChange}/><br/>
                            <label htmlFor="email" style={{margin:"5px"}}>Email Adress</label><br />
                            <input className="footer-input" type="email" name="email" placeholder="Email Adress" id="email" style={{width:'20%',borderRadius:'5px', height:'40px', padding:'10px' }} onChange={handleChange}/><br />
                            <label htmlFor="message" style={{margin:"5px"}}>Message</label><br />
                            <textarea className="footer-textarea mb-2" name="message" id="message" cols="40" rows="3" placeholder="Write Something" style={{resize:'vartical', borderRadius:"5px", padding:'10px'}} onChange={handleChange}></textarea>
                            <br />
                            <button className="btn btn-primary footer-button" type="submit">Submit</button>
                        
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;