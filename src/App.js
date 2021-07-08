import React, { createContext, useState } from 'react';
import Login from './Components/Login/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import UserHome from './Components/Home/UserHome/UserHome';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import DeviceDashBoard from './Components/Home/DeviceDashBoard/DeviceDashBoard';
import RestPassword from './Components/Login/RestPassword';
import Home from './Components/Home/HomeMain/Home'
import TemporaryTest from './Components/Home/DeviceDashBoard/TemporaryTest';
import MainDevices from './Components/Home/Devices/MainDevices';
import MainLocation from './Components/Home/Locations/MainLocation';

import MainCommand from './Components/Home/Command/MainCommand';
export const userContext = createContext()
const App = () => {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    ConfirmPassword: "",
    photoURL: "",
    error: "",
    success: false,
    LoggedInUser: true,
    newUser: false,
    userHome: true,
    user: false,
    devices: false,
    locations: false,
    admin: true,
    viewer:false,
    command:false,
    notClick: true,
    click: false,
    Role:'',
    deviceId:'', 
  })
  return (
    <userContext.Provider value={[user, setUser]}>
      <Router>
      <Switch>
      <Route exact path='/' component={Home}/>
        <Route path='/auth' component={Login} />
        <Route path ="/test1" component={TemporaryTest}/>
        <Route path ="/devices" component={MainDevices}/>
        <Route path = '/location' component={MainLocation}/>
        <PrivateRoute path = '/userHome'>
          <UserHome/>
        </PrivateRoute>
        <Route path="/:format/:id" component={DeviceDashBoard}/>
        <Route path='/restPassword' component={RestPassword}/>
        <Route path ='/command' component={MainCommand}/>
      </Switch>
    </Router>
    </userContext.Provider>
  );
};

export default App;