import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import RegisterForm from './pages/Register';

function App() {
  return (
    <div className="h-100">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/register">
            <RegisterForm/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
