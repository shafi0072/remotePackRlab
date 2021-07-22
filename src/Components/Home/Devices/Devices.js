import React, {useState} from 'react';

import './Devices.css';
import '../../../responsive.css';

import db from '../../FirebaseConfig/Firebase'

import {Button, Form, Segment} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
const Devices = () => {
    const [devicesData, setDevicesData] = useState({
        model: '',
        SerialNumber: '',
        Commission: '',
        alarm1: '',
        alarm2: '',
        format: 'ENER01'
    });
    const [devices, setDevices] = useState([
        
    ])
    const handleChange = (event) => {
        const newDevices = {
            ...devicesData
        };
        newDevices[event.target.name] = event.target.value;
        console.log(newDevices);
        setDevicesData(newDevices);

    }
    const handleSubmit = (e) => {
        db
            .collection("Devices")
            .add(devicesData)
            .then((docRef) => {})
            .catch((error) => {});
        db
            .collection(devicesData.model)
            .add(devicesData)
            .then((docRef) => {})
            .catch((error) => {});
        e.preventDefault()

    }

    return (

        <div>
            <Form unstackable="unstackable" onSubmit={handleSubmit}>
                <Form.Group widths={2}>
                    <Form.Input
                        label='Device Model'
                        name="model"
                        onChange={handleChange}
                        placeholder='Energy Meter'/>

                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Input
                        label='Serial Number'
                        name="SerialNumber"
                        onChange={handleChange}
                        placeholder='ABCb012345'/>
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Input
                        label='Commissioning Date'
                        name="Commission"
                        onChange={handleChange}
                        placeholder='153278942329'/>

                </Form.Group>
                <Form.Group widths={2}>

                    <Form.Input
                        label='Level_Alarm_Var01'
                        name="alarm1"
                        onChange={handleChange}
                        placeholder='30.35'/>
                </Form.Group>
                <Form.Group widths={2}>
                    <Form.Input
                        label='Level_Alarm_Var02'
                        name="alarm2"
                        onChange={handleChange}
                        placeholder='30.35'/>
                </Form.Group>
                <button className="btn btn-primary">Add/Save</button>
            </Form>

        </div>

    );
};

export default Devices;