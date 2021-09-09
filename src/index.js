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
import AboutUs from './components/aboutUs/AboutUs';
import Settings from './components/settings/Settings';
import Home from "./components/Home/Home";
import ChatRoom from "./components/ChatRoom/ChatRoom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>

        <Route exact path="/createchannel" component={Home} />

        <Route exact path="/chatroom/:roomId" component={ChatRoom} />

        

        <Route exact path='/'> <Login /> </Route>

        <Route exact path='/register'> <Register /> </Route>

        <Route exact path='/aboutUs'> <AboutUs /> </Route>

        <Route exact path='/Settings'> <Settings/> </Route>

        <Route path='/profile' component={Profile} />

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


//<Route exact path='/message'> <App /> </Route>


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
