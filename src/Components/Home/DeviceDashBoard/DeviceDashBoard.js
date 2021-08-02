import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar';
import DeveiceMeter from '../Locations/DeveiceMeter';

import logo from '../../../Resorces/logo_RLAB.png';
import './DeviceDashBoard.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

import db from '../../FirebaseConfig/Firebase'



const DeviceDashBoard = () => {
    let { format, id } = useParams();


    const [status,setStatus] = useState([])
    const [loading, setLoading] = useState(true);
    const [pastData, setPastData] = useState({
      present:true,
      week:false,
      day:false,
      halfDay:false,
      sixH:false,
      oneH:false
    })
    function arrayFunc(arr,key) {
        let resultArray = [];
        for(let i = 0; i < arr.length; i++){
            if(arr[i]._id === key){
                resultArray = arr[i];
            }
        }
        return resultArray
    };

    //  function for liner search start
    
function maxNumber(arr) {
        
        let i;
        let max = arr[0].dateSocket;

        for (i = 1; i < arr.length; i++){
           if(arr[i].dateSocket > max){
               max = arr[i]
           }
        }
    // const lastItem =  await arr[arr.length - 1]
        return max;
    }
    
// finish |^ linear search 
//shorting data 
async function selectionSort(arr) {
    let min;
  
    //start passes.
    for (let i = 0; i < arr.length; i++) {
      //index of the smallest element to be the ith element.
      min = i;
  
      //Check through the rest of the array for a lesser element
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j].dateSocket < arr[min].dateSocket) {
          min = j;
        }
      }
  
      //compare the indexes
      if (min !== i) {
        //swap
        [arr[i].dateSocket, arr[min]].dateSocket = [arr[min].dateSocket, arr[i].dateSocket];
      }
    }
  
    return arr;
  }
  const unixTimeX1 = Date.now() - 5*60000;
  const unixTimex0 =  unixTimeX1 - 8*24*60*60000;
  const day = unixTimeX1 / 24
  console.log({day})
    useEffect(() => {
       if(pastData.present === true){
        const userDb =  db.collection("RealTime").doc(id).onSnapshot((querySnapshot) => {
            
          setStatus({...querySnapshot.data(), key:querySnapshot.id});
              
           
            // const maxNumber1 = maxNumber(getDataFirebase);
            
        });
        return userDb;
       }
       else if(pastData.week === true){
        const userDb2 =  db.collection(id).orderBy('dateSocket', 'desc').limit(1999).onSnapshot((querySnapshot) => {
          let getDataFirebase = [];
          querySnapshot.forEach((doc) => {
            getDataFirebase.push({...doc.data(), key:doc.id});
          });
          setStatus(getDataFirebase);
            // const maxNumber1 = maxNumber(getDataFirebase);
          return userDb2
        });
       }
     
    }, [loading, format, id, pastData]);
  console.log({status});
  console.log('dateSocket', 1627894069369 - 6.048e+8)
    return (
        <div className='row'>
            <div className="col-md-1">
                <Navbar/>
            </div>
            <div className="col-md-11 text-center">
            <img src={logo} alt="" style={{width:'20%'}} className='mt-5' />
                
                <DeveiceMeter data={status} pastDataTrig={pastData} setProps = {setPastData}/>
            </div>
        </div>
    );
};

export default DeviceDashBoard;