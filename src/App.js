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
    deviceID:''
  })
  return (
    <userContext.Provider value={[user, setUser]}>
      <Router>
      <Switch>
        <Route path='/auth' component={Login} />
        <PrivateRoute path = '/'>
          <UserHome/>
        </PrivateRoute>
      </Switch>
    </Router>
    </userContext.Provider>
  );
};

export default App;