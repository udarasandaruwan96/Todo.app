import React from 'react';

//import Header from '../imports/Header';



export default function Home() {
  return (
 <>
  
  <header>
       <nav className='navbar navbar-expand-lg navbar-light primary-gradient shadow'>
           <a className='nave-link brand mx-auto'>
           <h5 className='text-light m-0'>Mern stack Appliction</h5>
           </a>
             {/* short screen toggler button */}
           <button className='navbar-toggler' type='button' data-toggle="collapse" data-target="#navbarNav" aria-expanded="false">
             <i className='fas fa-bars'></i>
           </button>
           
           <div className='collapse navbar-collapse' id ="navbarNav">
             <div className='me-auto'></div>
               <ul className='navbar-nav'>
                  <li className='nav-item active'>
                     <h4 className='text-light'>Logout</h4>
                  </li>
               </ul>
           </div>
       </nav>
     </header>
     {/* ---------------------------------------- */}
     {/* <Header></Header> */}
  <main>
    <div className='container'> 
        <h4>Welcome to Home page</h4>
        
     </div>
  </main>
   
 </>
  )
}
