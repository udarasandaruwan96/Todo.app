import React from 'react';

export default function RegisterForm() {
    return (

        <div className='col-sm-7 big-color align-self-center'>
            <div className="form-section">
                <div className="title">
                    <h3>Create a new account</h3>
                </div>
                <div className="login-inner-form">
                    <form method ="POST">
      
                      <div className="form-group form-box"> 
                              <input type="text" id='username' className='input-text' placeholder='Username' />
                              <i className='icon user'></i>
                      </div>
                      <div className="form-group form-box"> 
                              <input type="text" id='email' className='input-text' placeholder='Email' />
                              <i className='icon email'></i>
                      </div>
                      <div className="form-group form-box"> 
                              <input type="text" id='password' className='input-text' placeholder='Password' />
                              <i className='icon lock'></i>
                      </div>
                      <div className="form-group form-box"> 
                              <input type="text" id='passwordcheck' className='input-text' placeholder='VerifyPassword' />
                              <i className='icon lock'></i>
                      </div>
                      <div className="form-group">
                          <button className='btn primary-btn'>Register</button>
                      </div>
                    </form>
                </div>
            </div>
        </div>
        
        
        
        
        )
}
