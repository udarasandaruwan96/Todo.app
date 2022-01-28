// import LoginForm from './components/imports/LoginForm';
import RegisterForm from './components/imports/RegisterForm';
import BaseLogin from './components/imports/BaseLogin';
import './App.css';
import './css/login.css';
import './assets/medium-cover.jpg';

import Login from './components/pages/Login';

import {BrowserRouter,Router,Route} from 'react-router-dom';

// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div id="login">
      <div className="container">
        <div className="row login-box">
          
       <BrowserRouter>
         <Router>
           {/* <Route path="/login" component={LoginForm}></Route>
           <Route path="/register" component={RegisterForm}></Route> */}

           <Route path="/login" component={Login}></Route>
         </Router>
       </BrowserRouter>
         
          {/* <BaseLogin/>
          <RegisterForm/> */}
          {/* <LoginForm/> */}
          {/* <div className="col-lg-7 bg-color align-self-center">
               <LoginForm/>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
