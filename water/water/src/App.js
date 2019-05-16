import React from 'react';
import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router,
  Route, Switch, NavLink } from 'react-router-dom';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Book  from "./components/Book";
import Login from "./components/Login";
import Home from './components/Home';
import About from "./components/About";

class App extends React.Component {
  render(){
  return (
    <div>
    <div className="App">
      <Router>
        <div className="container">
          <div className="row">
            <div className="col-md-7" style={{left:'-350px'}}>
              Water App
            </div>
            <div className="col-md-1" style={{right:'-105px'}}>
              <NavLink to="/home" exact activeStyle={{color:'green'}}>Home</NavLink>
            </div>
            <div className="col-md-1" style={{right:'-115px'}}>
              <NavLink to="/about" exact activeStyle={{color:'green'}}>About</NavLink>
            </div>
            <div className="col-md-2" style={{right:'-95px'}}>
              <NavLink to="/login" exact activeStyle={{color:'green'}}>Login/Signup</NavLink>
            </div>
            <div className="col-md-1" style={{right:'-65px'}}>
              <NavLink to="/book" exact activeStyle={{color:'green'}}>Book</NavLink>
            </div>
          </div>
        </div>
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/book" component={Book}></Route>
        </Switch>
      </Router>
    </div>
    </div>
  );
}
}

export default App;
