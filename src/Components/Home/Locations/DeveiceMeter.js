import React, { useContext } from 'react';
import './DeviceMeter.css';
import '../../../responsive.css';
import Rechart from '../UserHome/Rechart';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import { userContext } from '../../../App';
const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400
    }, {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210
    }, {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290
    }, {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000
    }, {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181
    }, {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500
    }, {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];
const DeveiceMeter = (props) => {
    
    console.log('dataId',props.data);
    return (
        <div className="container">
            <h1>Meter</h1>
            <div>
                <div className="row thead">
                    <div className="col-md-3 meter-col">
                        <p>Date</p>
                    </div>
                    <div className="col-md-2 meter-col">
                        <p>Vcc 1</p>
                    </div>
                    <div className="col-md-2 meter-col">
                        <p>Vcc 2</p>
                    </div>
                    <div className="col-md-2 meter-col">
                        <p>Vcc 3</p>
                    </div>
                    <div className="col-md-3 meter-col">
                        <p>Current 1</p>
                    </div>
                </div>
                <div className="row tbody">
                    <div className="col-md-3 meter-data" data-content="Date">
                        <p>12/12/21 08:06:15</p>
                    </div>
                    <div className="col-md-2 meter-data" data-content="Vcc 1">
                        <p>24.6V</p>
                    </div>
                    <div className="col-md-2 meter-data" data-content="Vcc 2">
                        <p>18.1V</p>
                    </div>
                    <div className="col-md-2 meter-data" data-content="Vcc 3">
                        <p>24.4V</p>
                    </div>
                    <div className="col-md-3 meter-data" data-content="Current 1">
                        <p>10A</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="row my-2 status-container">
                    <div className="col-xl-3 col-md-2 text-start p-0 status-data-container">
                        <span className="status-title">Status:</span>
                        <span>Ok</span>
                    </div>
                    <div className="col-xl-6 col-md-8 p-0 status-mid-data">
                        <span className="status-title">Last connection:</span>
                        <span className="status-data-date">12/12/21</span>
                        <span>06:04:25</span>
                    </div>
                    <div className="col-xl-3 col-md-2 text-end p-0 status-data-container">
                        <span className="status-title">Vbat:</span>
                        <span>4.1V</span>
                    </div>
                </div>
            </div>
            
            <div>
                <LineChart width={800} height={150} className="charts" data={data}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                </LineChart>
            </div>
            <div>
                <p className="row title-control">Control</p>
                <div className="row">
                    <div className="col-xl-3 col-lg-3">
                        <p className="control-input-text">Period :</p>
                    </div>
                    <div className="col-xl-5 col-lg-5 control-input-box"><input className="control-input-number" type="number"/></div>
                    <div className="col-xl-4 col-lg-4"></div>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-3">
                        <p className="control-input-text">Freq :</p>
                    </div>
                    <div className="col-xl-5 col-lg-5 control-input-box"><input className="control-input-number" type="number"/></div>
                    <div className="col-xl-4 col-lg-4"></div>
                </div>
                <div className="meter-button d-flex justify-content-end">
                    <div className="btn btn-primary button1"><span>INT CYCLE</span></div>
                    <div className="btn btn-primary button2"><span>ON / OFF</span></div>
                </div> 
                
            </div>
        </div>
    );
};

export default DeveiceMeter;