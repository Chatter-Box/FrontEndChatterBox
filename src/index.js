import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import login from './login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/login/login';
import { Register } from './components/register/register';
import Profile from './components/profile/Profile';
import AboutUs from './components/aboutUs/AboutUs'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>

        <Route exact path='/message'> <App /> </Route>

        <Route exact path='/'> <Login /> </Route>

        <Route exact path='/register'> <Register /> </Route>

        <Route exact path='/aboutUs'> <AboutUs /> </Route>

        <Route path='/profile' component={Profile} />

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
