import React from 'react';

export default function LoginForm(props) {
  return     <div className = "form-section">
  <div className = "title">
     <h3>Sign in to your account</h3>
  </div> 
  <div className ="login-inner-form">
    <form method ="POST">
       <div className = "form-group form-box">
          <input type = "text" id ="email" className ="input-text" placeholder = "Email Address"></input>
       </div>
       <div className = "form-group form-box">
          <input type = "text" id ="password" className ="input-text" placeholder = "Password"></input>
       </div>
       <div className = "form-group">
          <button className = "btn btn-primary">Login</button>
       </div>

    </form>
  </div>
</div>;
}
