import React from 'react';
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
const DeveiceMeter = () => {

    return (
        <div className="container">
            <h1>Meter</h1>
            <div>
                <div className="row ">
                    <div className="col-md-4 meter-col">
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
                    <div className="col-md-2 meter-col">
                        <p>Current 1</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 meter-data">
                        <p>12/12/21 08:06:15</p>
                    </div>
                    <div className="col-md-2 meter-data">
                        <p>24.6V</p>
                    </div>
                    <div className="col-md-2 meter-data">
                        <p>18.1V</p>
                    </div>
                    <div className="col-md-2 meter-data">
                        <p>24.4V</p>
                    </div>
                    <div className="col-md-2 meter-data">
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
            <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
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