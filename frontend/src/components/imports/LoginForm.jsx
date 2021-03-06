import React from 'react';

export default function LoginForm (props) {

  let {handleSubmit, setEmail, setPassword} = props.loginState;

  return(
      <div className='col-sm-7 bg-collor align-self-center'>
    <div className="form-section">
    <div className="title">
     <h3>Sign into your account</h3> 
     </div>  
     <div className="login-inner-form">
      <form method="POST" onSubmit={handleSubmit}>
       
        <div className="form-group form-box">
         <input type="text" id="email" onChange={e =>setEmail(e.target.value)} className="input-text" placeholder="Email Address"></input>
         <i className='icon email'></i>
        </div>
        <div className="form-group form-box">
         <input type="text" id="password" onChange={e =>setPassword(e.target.value)} className="input-text" placeholder="Password"></input>
         <i className='icon lock'></i>
        </div>
        <div className="form-group">
         <button className ="btn primary-btn">Login</button>
        </div>
      </form>
   
     </div>
 </div>
 </div>
 
  ) 
}
