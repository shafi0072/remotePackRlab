import React from 'react';
import './DeviceMeter.css';
import '../../../responsive.css';
import { Line } from 'react-chartjs-2'

import { useState } from 'react';
import { useParams } from 'react-router-dom';


const DeveiceMeter = (props) => {
    const { DeviceID, voltage01, voltage02, voltage03, dateSocket, voltage04, vBat, txPower, rssiGateway, nMedicion, msActivo, longitude, latitude, current01, rassiGateWay, resistance, temperature, nMessages } = props.data;
    const { id } = useParams();
    const [voltageData, setVoltageData] = useState({
        voltageName: '',
        voltage: ''
    });

    

    const [fetchDevice, setFetchDeviceData] = useState({
        
    });
   
    const [deviceId, setDeviceID] = useState(true)
  
  

    const handleVoltage01 = () => {
        const newVoltage = { ...voltageData };
        newVoltage.voltage = voltage01;
        newVoltage.voltageName = 'voltage01'
        setVoltageData(newVoltage);
    };
    const handleVlotage02 = () => {
        const newVoltage = { ...voltageData };
        newVoltage.voltage = voltage02;
        newVoltage.voltageName = 'voltage02'
        setVoltageData(newVoltage);
    }
    const handleVolage03 = () => {
        const newVoltage = { ...voltageData };
        newVoltage.voltage = voltage03;
        newVoltage.voltageName = 'voltage03'
        setVoltageData(newVoltage);
    }
    const handleVlotage04 = () => {
        const newVoltage = { ...voltageData };
        newVoltage.voltage = voltage04;
        newVoltage.voltageName = 'voltage04'
        setVoltageData(newVoltage);
    }
    // unixtimestamp
    // let mil = dateSocket;
   function clock(){
    const newData = {...fetchDevice}
    let unixTimeStamp = new Date() - 5*60000;
    let mil = unixTimeStamp - 7*24*60*60000;
    let date = new Date(mil);
    newData.localString = date.toLocaleDateString();
    newData.localTIme = date.toLocaleTimeString()
    
    newData.seconds = Math.floor((unixTimeStamp - (unixTimeStamp))/1000);
    newData.minutes = (newData.seconds / 60) | 0;
     

    newData.hours = (newData.minutes / 60) | 0;
     

    newData.days = (newData.hours/ 24) | 0;
     

    newData.mainWeek = (newData.days / 7) | 0;
    
    setFetchDeviceData(newData)
    // console.log({seconds},{minutes},{hours}, {days}, {mainWeek});
    // console.log({localString})
   }

    
    setInterval(() => clock(), 1000)
    return (
        <div className="container">
            <h1 className="meter-text">Meter</h1>

            <div className="device-meter-container">
                {voltage01 >= 0 && <div>
                    <div className="row thead">
                        <div className="col-md-4 meter-col">
                            <p>Date</p>
                        </div>
                        <div className="col-md-1 meter-col">
                            <p>Vcc 1</p>
                        </div>
                        <div className="col-md-1 meter-col">
                            <p>Vcc 2</p>
                        </div>
                        <div className="col-md-1 meter-col">
                            <p>Vcc 3</p>
                        </div>
                        <div className="col-md-1 meter-col">
                            <p>Vcc 4</p>
                        </div>

                        <div className="col-md-3 meter-col">
                            <p>Current 1</p>
                        </div>
                    </div>
                    <div className="row tbody">
                        <div className="col-md-4 meter-data" data-content="Date">
                            {/* <p>{localString}</p> */}
                        </div>
                        <div className="col-md-1 meter-data" data-content="Vcc 1" onClick={handleVoltage01}>
                            <p>{voltage01}V</p>
                        </div>
                        <div className="col-md-1 meter-data" data-content="Vcc 2" onClick={handleVlotage02}>
                            <p>{voltage02}V</p>
                        </div>
                        <div className="col-md-1 meter-data" data-content="Vcc 3" onClick={handleVolage03}>
                            <p>{voltage03}V</p>
                        </div>
                        <div className="col-md-1 meter-data" data-content="Vcc 3" onClick={handleVlotage04}>
                            <p>{voltage04}V</p>
                        </div>

                        <div className="col-md-3 meter-data" data-content="Current 1">
                            <p>{current01}A</p>
                        </div>
                    </div>
                </div>}
                <div>
                    <div className="row my-2 status-container">
                        <div className="col-xl-3 col-md-2 text-start p-0 status-data-container">
                            <span className="status-title">Status:</span>
                            <span>Ok</span>
                        </div>
                        <div className="col-xl-6 col-md-8 p-0 status-mid-data">
                            <span className="status-title">Last connection:</span>
                            <span className="status-data-date">{fetchDevice.localString}</span>
                            <span>{fetchDevice.localTIme}</span>
                        </div>
                        <div className="col-xl-3 col-md-2 text-end p-0 status-data-container">
                            <span className="status-title">Vbat:</span>
                            <span>{vBat}V</span>
                        </div>
                    </div>
                </div>

                {/* {voltage01 >= 0 && <div className="chart-container">
                    <LineChart width={800} height={150} className="charts" data={data}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                    </LineChart> 
            </div>} */}
                <Line height={100} width={400} data={{
                    labels: [voltageData.voltageName, 'voltage01', 'voltage02', 'voltage03', 'voltage04'],
                    datasets: [{
                        label: 'Voltage Data',
                        data: [voltageData.voltage, voltage01, voltage02, voltage03, voltage04],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                }} />
                <div className="chart-btn">
                    <ul className="d-flex justify-content-end chart-lists">
                        
                        <li className="bg-primary chart-list">{fetchDevice.mainWeek}W</li>
                        <li className="bg-primary chart-list">{fetchDevice.days}D</li>
                        <li className="bg-primary chart-list">{fetchDevice.hours}H</li>
                        <li className="bg-primary chart-list">{fetchDevice.minutes}M</li>
                        <li className="bg-primary chart-list">{fetchDevice.seconds}S</li>
                    </ul>
                </div>
                <div className="device-meter-scroll">
                    <div>
                        <div>
                            <p className="row title-control">Control</p>
                            <div className="row">
                                <div className="col-xl-3 col-lg-3">
                                    <p className="control-input-text">Period :</p>
                                </div>
                                <div className="col-xl-5 col-lg-5 control-input-box"><input className="control-input-number" type="number" value={latitude} /></div>
                                <div className="col-xl-4 col-lg-4"></div>
                            </div>
                            <div className="row">
                                <div className="col-xl-3 col-lg-3">
                                    <p className="control-input-text">Freq :</p>
                                </div>
                                <div className="col-xl-5 col-lg-5 control-input-box"><input className="control-input-number" type="number" value={longitude} /></div>
                                <div className="col-xl-4 col-lg-4"></div>
                            </div>
                            <div className="meter-button d-flex justify-content-end">
                                <div className="btn btn-primary button1"><span>INT CYCLE</span></div>
                                <div className="btn btn-primary button2"><span>ON / OFF</span></div>
                            </div>

                        </div>
                        <ul className="row device-meter-list-container">
                            {txPower >= 0 && <li className=" text-start text-light device-list"><h5 className="device-meter-list" htmlFor="">txPower :</h5> {txPower}</li>}
                            {rssiGateway >= 0 && <li className=" text-start text-light device-list"><h5 className="device-meter-list" htmlFor="">rssiGateway :</h5> {rssiGateway}</li>}
                            {nMedicion >= 0 && <li className=" text-start text-light device-list"><h5 className="device-meter-list" htmlFor="">nMedicion :</h5> {nMedicion}</li>}
                            {msActivo >= 0 && <li className="text-start text-light device-list"><h5 className="device-meter-list" htmlFor="">msActivo :</h5> {msActivo}</li>}
                        </ul>
                        <ul className="row d-flex justify-content-lg-around text-light device-meter-list-container">
                            {rassiGateWay >= 0 && <li className=" text-start text-light device-list"><h5 className="device-meter-list" htmlFor="">rassiGateWay :</h5> {rassiGateWay}</li>}
                            {resistance >= 0 && <li className=" text-start text-light device-list"><h5 className="device-meter-list" htmlFor="">resistance :</h5> {resistance}</li>}
                            {temperature >= 0 && <li className=" text-start text-light device-list"><h5 className="device-meter-list" htmlFor="">temperature :</h5> {temperature}</li>}
                            {nMessages >= 0 && <li className=" text-start text-light device-list"><h5 className="device-meter-list" htmlFor="">nMessages :</h5> {nMessages}</li>}
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default DeveiceMeter;