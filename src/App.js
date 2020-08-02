import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import About from './pages/About';

function App() {


  return (
    
    <Router className="h-100">
      <Switch>
        <Route exact path="/">
          <Home
            
          />
        </Route>
        <Route exact path="/register">
          <Register
            
          />
        </Route>
        <Route exact path="/welcome">
          <Welcome/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
