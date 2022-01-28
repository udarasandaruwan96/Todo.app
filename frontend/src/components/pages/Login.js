import React from 'react';

import BaseLogin from '../imports/BaseLogin';
import LoginForm from '../imports/LoginForm';

// import BaseLogin from './components/imports/BaseLogin';
// import LoginForm from './components/imports/LoginForm';

export default function Login() {
    return (
        <div>
             <div id = "login">
          <div className = "container">
            <div className = "row login-box">
             <BaseLogin/>
             <LoginForm/>
             
            </div>
          </div>
          </div>
        </div>
        
        
        )
}
