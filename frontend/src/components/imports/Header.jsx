import React from 'react';
import {Link} from 'react-router-dom';
import Logout from './Logout'
import { logoutAction } from '../../container/actions';
import { useDispatch } from 'react-redux';

export default function Header() {
const dispatch = useDispatch()
  const logout = ()=>{
    dispatch(logoutAction());
  }

  return (
     <header>
       <nav className='navbar navbar-expand-lg navbar-light primary-gradient shadow'>
           <Link className='nave-link brand mx-auto' to='/'>
           <h5 className='m-0'>Mern stack Appliction</h5>
           </Link>
           <button>
             <i className='fas fa-bars'></i>
           </button>
           <div className='collapse navbar-collapse' id='navbar'>
             <div className='me-auto'>
               <ui className='nav-item active'>
                 <li className='nav-item active'>
                 <h4 className='text-light'><Logout onLogout={logout}/></h4>
                 </li>
               </ui>
             </div>
           </div>
       </nav>
     </header>

    // NOt Link any page or any one
  )
}
