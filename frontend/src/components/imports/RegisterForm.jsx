import React from 'react';

export default function RegisterForm(props) {

    let {
        handleSubmit,
        setUsername,
        setEmail,
        setPassword,
        setPasswordCeck
      } = props.registerState;
    return (

        <div className='col-sm-7 big-color align-self-center'>
            <div className="form-section">
                <div className="title">
                    <h3>Create a new account</h3>
                </div>
                <div className="login-inner-form">
                    <form method ="POST" onSubmit={handleSubmit}>
      
                      <div className="form-group form-box"> 
                              <input type="text" id='username' onChange={e=>setUsername(e.target.value)} className='input-text' placeholder='Username' />
                              <i className='icon user'></i>
                      </div>
                      <div className="form-group form-box"> 
                              <input type="text" id='email' onChange={e=>setEmail(e.target.value)} className='input-text' placeholder='Email' />
                              <i className='icon email'></i>
                      </div>
                      <div className="form-group form-box"> 
                              <input type="text" id='password' onChange={e=>setPassword(e.target.value)} className='input-text' placeholder='Password' />
                              <i className='icon lock'></i>
                      </div>
                      <div className="form-group form-box"> 
                              <input type="text" id='passwordcheck' onChange={e=>setPasswordCeck(e.target.value)} className='input-text' placeholder='VerifyPassword' />
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
