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
        <div className='bg-dark mt-5 p-3 text-light text-center' style={{fontFamily: "'Poppins', sans-serif"}}>
            <div className = "">
            <h3 className='mt-5'>Email Us</h3>
            <form action='https://formspree.io/f/xbjqygpq' method="POST">
                <label htmlFor="firstName" style={{margin:"5px"}}>First Name</label><br/>
                <input className="footer-input" type="text" name='firstName' placeholder="First Name" id="firstName" style={{width:'20%', height:'40px', borderRadius:'5px', padding:'15px'}} onChange={handleChange}/><br/>
                <label htmlFor="lastName" style={{margin:"5px"}}>Last Name</label><br />
                <input className="footer-input" type="text" name="lastName" placeholder="Last Name" id="lastName" style={{width:'20%' , borderRadius:'5px', height:'40px'}} onChange={handleChange}/><br/>
                <label htmlFor="email" style={{margin:"5px"}}>Email Adress</label><br />
                <input className="footer-input" type="email" name="email" placeholder="Email Adress" id="email" style={{width:'20%',borderRadius:'5px', height:'40px' }} onChange={handleChange}/><br />
                <label htmlFor="message" style={{margin:"5px"}}>Message</label><br />
                <textarea className="footer-textarea mb-2" name="message" id="message" cols="40" rows="3" placeholder="Write Something" style={{resize:'vartical', borderRadius:"5px"}} onChange={handleChange}></textarea>
                <br />
                <button className="btn btn-primary footer-button" type="submit">Submit</button>
               
            </form>
            </div>
        </div>
    );
};

export default Footer;