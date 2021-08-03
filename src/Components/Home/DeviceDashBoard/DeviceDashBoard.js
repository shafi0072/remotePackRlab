import React, {useEffect, useState} from 'react';
import Navbar from '../../Shared/Navbar';
import DeveiceMeter from '../Locations/DeveiceMeter';

import logo from '../../../Resorces/logo_RLAB.png';
import './DeviceDashBoard.css';

import {BrowserRouter as Router, Switch, Route, Link, useParams} from "react-router-dom";

import db from '../../FirebaseConfig/Firebase'
import {useContext} from 'react';
import {userContext} from '../../../App';

const DeviceDashBoard = () => {
    let {format, id} = useParams();

    const [status, setStatus] = useState([])
    const [loading, setLoading] = useState(true);
    const [pastData, setPastData] = useState([])
    // const [pastData, setPastData] = useState({   present:true,   week:false,
    // day:false,   halfDay:false,   sixH:false,   oneH:false })
    const [user, setUser] = useContext(userContext)

    async function arrayFunc(arr, key) {
        let resultArray = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].dateSocket <= key) {
                resultArray = await arr[i];
            }
        }
        return resultArray
    };

    //  function for liner search start finish |^ linear search shorting data

    useEffect(() => {
        if (user.present === true) {
            const userDb = db
                .collection("RealTime")
                .doc(id)
                .onSnapshot((querySnapshot) => {

                    setStatus({
                        ...querySnapshot.data(),
                        key: querySnapshot.id
                    });

                    // const maxNumber1 = maxNumber(getDataFirebase);

                });
            return userDb;
        } else if (user.week === true) {
          
          let UnixTimeFOrToday = Date.now() - 5*60000;
          let unixToWeek = UnixTimeFOrToday - 6.048e+8;
          db.collection(id).where("dateSocket", ">=", unixToWeek).where("dateSocket", "<=", UnixTimeFOrToday).limit(100)
          .get()
          .then((querySnapshot) => {
            let getDataFirebase = [];
              querySnapshot.forEach((doc) => {
                  // doc.data() is never undefined for query doc snapshots
                  getDataFirebase.push({...doc.data(),key: doc.id});
              });
              setPastData(getDataFirebase[0])
          })
          .catch((error) => {
              console.log("Error getting documents: ", error);
          });
        }
        else if (user.day === true) {
            
            let UnixTimeFOrToday = Date.now() - 5*60000;
            let unixToWeek = UnixTimeFOrToday - 8.64e+7;
            db.collection(id).where("dateSocket", ">=", unixToWeek).where("dateSocket", "<=", UnixTimeFOrToday).limit(100)
            .get()
            .then((querySnapshot) => {
              let getDataFirebase = [];
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    getDataFirebase.push({...doc.data(),key: doc.id});
                });
                setPastData(getDataFirebase[0])
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
          }
          else if (user.halfDay === true) {
            
            let UnixTimeFOrToday = Date.now() - 5*60000;
            let unixToWeek = UnixTimeFOrToday - 4.32e+7;
            db.collection(id).where("dateSocket", ">=", unixToWeek).where("dateSocket", "<=", UnixTimeFOrToday).limit(100)
            .get()
            .then((querySnapshot) => {
              let getDataFirebase = [];
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    getDataFirebase.push({...doc.data(),key: doc.id});
                });
                setPastData(getDataFirebase[0])
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
          }
          else if (user.sixH === true) {
            
            let UnixTimeFOrToday = Date.now() - 5*60000;
            let unixToWeek = UnixTimeFOrToday - 2.16e+7;
            db.collection(id).where("dateSocket", ">=", unixToWeek).where("dateSocket", "<=", UnixTimeFOrToday).limit(100)
            .get()
            .then((querySnapshot) => {
              let getDataFirebase = [];
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    getDataFirebase.push({...doc.data(),key: doc.id});
                });
                setPastData(getDataFirebase[0])
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
          }
          else if (user.oneH === true) {
            let UnixTimeFOrToday = Date.now() - 5*60000;
            let unixToWeek = UnixTimeFOrToday - 3.6e+6;
            db.collection(id).where("dateSocket", ">=", unixToWeek).where("dateSocket", "<=", UnixTimeFOrToday).limit(100)
            .get()
            .then((querySnapshot) => {
              let getDataFirebase = [];
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    getDataFirebase.push({...doc.data(),key: doc.id});
                });
                setPastData(getDataFirebase[0])
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
          }
    }, [loading, format, id, user]);
    
    console.log('dateSocket', 1627894069369 - 6.048e+8)
    console.log({pastData})
    return (
        <div className='row'>
            <div className="col-md-1">
                <Navbar/>
            </div>
            <div className="col-md-11 text-center">
                <img
                    src={logo}
                    alt=""
                    style={{
                        width: '20%'
                    }}
                    className='mt-5'/>

                <DeveiceMeter data={status} pastData={pastData}/>
            </div>
        </div>
    );
};

export default DeviceDashBoard;