import React, { useState } from 'react';
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

const Command = () => {
    const [pubSubM, setPubSubM] = useState({
        Device_id:'',
        Command:'',
    })
const handleOnChange = (event) => {
    const newPubSubM = {...pubSubM};
    newPubSubM[event.target.name] = event.target.value;
    setPubSubM(newPubSubM)
}
const handleSubmit = (e) => {
    db.collection("Command").add(pubSubM)
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    e.preventDefault();
}
console.log(pubSubM);
    return (
        <div>
            <h1 className='text-light'>Send command in Google Cloud Pub/sub</h1>
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-around">
                        <label htmlFor="topic">Device_id</label>
                        <input type="text" placeholder="Device_id" name="Device_id" id="topic" onChange={handleOnChange}/>
                    </div>
                    
                    <div className="d-flex justify-content-around">
                        <label htmlFor="sub">Command</label>
                        <textarea placeholder="Command" id="Command" name="Command" onChange={handleOnChange}/>
                    </div>
                    <button className="btn btn-primary" type="submit" >Send</button>
                </form>
            </div>
        </div>
    );
};

export default Command;