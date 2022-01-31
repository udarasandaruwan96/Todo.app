// import LoginForm from './components/imports/LoginForm';
//import RegisterForm from './components/imports/RegisterForm';
//import BaseLogin from './components/imports/BaseLogin';
import './App.css';
import './css/login.css';
import './assets/medium-cover.jpg';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';

//import { BrowserRouter,Router,Route } from 'react-router-dom';

import { BrowserRouter as Router, Route,  Routes, } from "react-router-dom";


function App() {
  return (
    
    // <div id="login">
    //   <div className="container">
    //     <div className="row login-box">
          
      

        <Router>
        < Routes>
          <Route exact path ="/" component = {Home} />
          <Route  path ="/login" component = {Login} />
          <Route  path ="/register" component = {Register} />
        </ Routes>
      </Router> 

         

         
    //     </div>
    //   </div>
    // </div>
  );
};


export default App;


 