import React, { useState } from 'react';


const Command = () => {
    const [pubSubM, setPubSubM] = useState({
        topic:'',
        sub:'',
        message:'',
    })
const handleOnChange = (event) => {
    const newPubSubM = {...pubSubM};
    newPubSubM[event.target.name] = event.target.value;
    setPubSubM(newPubSubM)
}
const handleSubmit = () => {
    
}
console.log(pubSubM);
    return (
        <div>
            <h1 className='text-light'>Send command in Google Cloud Pub/sub</h1>
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-around">
                        <label htmlFor="topic">Topic</label>
                        <input type="text" placeholder="topic" name="topic" id="topic" onChange={handleOnChange}/>
                    </div>
                    <div className="d-flex justify-content-around">
                        <label htmlFor="sub">Subscriptions</label>
                        <input type="text" placeholder="Subscriptions" name="sub" id="sub" onChange={handleOnChange}/>
                    </div>
                    <div className="d-flex justify-content-around">
                        <label htmlFor="sub">Message</label>
                        <textarea placeholder="Message" id="message" name="message" onChange={handleOnChange}/>
                    </div>
                    <button className="btn btn-primary" type="submit" >Send</button>
                </form>
            </div>
        </div>
    );
};

export default Command;