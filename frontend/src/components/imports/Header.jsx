import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
     <header>
       <nav className='navbar navbar-expand-lg navbar-light primary-gradient shadow'>
           <Link className='nave-link brand mx-auto'>
           <h5 className='m-0'>Mern stack Appliction</h5>
           </Link>
           <button>
             <i className='fas fa-bars'></i>
           </button>
       </nav>
     </header>

   
  )
}
