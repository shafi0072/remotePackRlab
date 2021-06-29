import React, { createContext, useState } from 'react';
import Login from './Components/Login/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserHome from './Components/Home/UserHome/UserHome';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import DeviceDashBoard from './Components/Home/DeviceDashBoard/DeviceDashBoard';
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
    deviceId:'', 
  })
  return (
    <userContext.Provider value={[user, setUser]}>
      <Router>
      <Switch>
        <Route path='/auth' component={Login} />
        
        <PrivateRoute exact path = '/'>
          <UserHome/>
        </PrivateRoute>
        <Route path="/:id" component={DeviceDashBoard}/>
      </Switch>
    </Router>
    </userContext.Provider>
  );
};

export default App;