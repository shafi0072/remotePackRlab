import React, { useState } from 'react';
import './user.css'

import firebase from 'firebase';
import 'firebase/firestore';


if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyA47b6Rx0RioZApSMcyDooUmOpQFFs9WLE",
  authDomain: "test1-68872.firebaseapp.com",
  projectId: "test1-68872",
  storageBucket: "test1-68872.appspot.com",
  messagingSenderId: "504703093399",
  appId: "1:504703093399:web:50a89636d428ac8bd2f7d2"
    });
 }else {
    firebase.app(); // if already initialized, use that one
 }

const db = firebase.firestore();

const UserForm = () => {
    const [userInfo, setuserInfo] = useState({
        email:'',
        name:'',
        position:'',
        Role:'admin',
        Uid:'',
    });
    const handleOnchange = (event) => {
        const newUserInfo = {...userInfo};
        newUserInfo[event.target.name] = event.target.value;
        const RandomId = Math.random() * 100000000000000000000000000000000000000;
        newUserInfo.Uid = RandomId;
        setuserInfo(newUserInfo)
    }
    const handleOnChangeSelect = (event) => {
        setuserInfo({Role: event.target.value})
    };
    const handleSubmit = (e) => {
        db.collection("user").add(userInfo)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        e.preventDefault();
    }
    console.log(userInfo);
    
    return (
        <div style={{width:'50%', margin:'2% auto'}} className='text-center'>
            <form action="" onSubmit={handleSubmit}>
            <div className='d-flex justiy-content-around mb-4' >
                    <label htmlFor="Role"  className='me-5  text-light interface-name'><h5>Role</h5></label>
                    <select id="role" className='form-control' onChange={handleOnChangeSelect}>
                        <option value="admin" >Admin</option>
                        <option value="oparetors">Oparetors</option>
                        <option value="viewers">Viewers</option>
                    </select>
                </div>
                <div className='d-flex justiy-content-around mb-4'>
                    <label htmlFor="userEmail"  className='me-5 text-light interface-name'><h5>Email</h5></label>
                    <input type="email" id='userEmail' className='form-control' placeholder='Enter Your Email' name="email" onChange={handleOnchange}/>
                </div>
                <div className='d-flex justiy-content-around mb-4'>
                    <label htmlFor="name" className='me-5 text-light interface-name'><h5>Name</h5></label>
                    <input type="text" id='name' placeholder='Enter Your Name' className='form-control' name="name" onChange={handleOnchange}/>
                </div>
                <div className='d-flex justiy-content-around mb-4'>
                    <label htmlFor="position"  className='me-5 text-light interface-name'><h5>Position</h5></label>
                    <input type="text" id='position' placeholder='Enter Your position' className='form-control' name="position" onChange={handleOnchange}/>
                </div>
                <button className="btn btn-primary create-button" type="submit">Create/Save</button>
            </form>
        </div>
    );
};

export default UserForm;