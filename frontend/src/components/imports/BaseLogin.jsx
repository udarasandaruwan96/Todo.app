import React from 'react';
//import {useLocation,useHistory,Link} from 'react-router-dom';



export default function BaseLogin() {

    // const location = useLocation();
    // const history = useHistory();

    // const register =() =>history.push("/register")
    // const login =() =>history.push("/login")

    return(
      <div className='col-sm-5 bg-img align-self-center'> 
         <div className='info'>
             <div className='logo clearfix'>
                <a href="#" className='nav-brand'>Logo</a>
             </div>
             <div className="btn-section">
                 <button className='nav-link link-btn btn-primary default-bg'> Login</button>
                 <button  className='nav-link link-btn btn-primary default-bg'> Register</button>
             </div>
         </div>
      </div>
      
      )
    }
    