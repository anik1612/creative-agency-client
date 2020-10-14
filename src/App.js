import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login/Login';
import useLocalStorageState from 'use-local-storage-state/dist';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard';

export const SelectedServiceContext = createContext([])
export const UserContext = createContext([])

function App() {
  const [loggedInUser, setLoggedInUser] = useLocalStorageState('userInfo', {
    isSignedIn: false,
    name: '',
    email: '',
    image: ''
  })
  const [selectedService, setSelectedService] = useLocalStorageState('selectedService', {})

  return (
    <SelectedServiceContext.Provider value={[selectedService, setSelectedService]}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Dashboard />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </SelectedServiceContext.Provider>
  );
}

export default App;
