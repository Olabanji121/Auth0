// src/App.js

import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import { useAuth0 } from "./react-auth0-spa";
import './App.css';
import PrivateRoute from "./components/PrivateRoute";
import Spinner from './components/Spinner'

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return ( <div className="App">
      <Spinner/>
      
      </div> )
  }

  return (
    
      <div className="App">
        {/* New - use BrowserRouter to provide access to /profile */}
        <BrowserRouter>
          <header>
            <NavBar />
          </header>
          <Switch>
            <Route path="/" exact />
            <PrivateRoute path="/profile" component={Profile} />
          </Switch>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
