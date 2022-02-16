import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../imports/Header';
import { useHistory } from 'react-router-dom';




export default function Home() {
  const user = useSelector(state=>state.isLoggedln)
  const history = useHistory();
  useEffect(()=>{
    if(!user){
      history.push('/login')
    }
  },[user.history])
  console.log(user)
  return (
 <>
  
  ?
     {/* ---------------------------------------- */}
     {/* <Header></Header> */}
     <Header/>
  <main>
    <div className='container'> 
        <h4>Welcome to Home page</h4>
        
     </div>
  </main>
   
 </>
  )
}
