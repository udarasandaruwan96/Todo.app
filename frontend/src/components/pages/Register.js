import React, {useState} from 'react';
import BaseLogin from '../imports/BaseLogin';
import RegisterForm from '../imports/RegisterForm';
import { registerAction } from '../../container/actions';
//import {usedispatch} from 'react-redux';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';


export default function Register() {

  const [username, setUsername] = useState("");
  const[email, setEmail] = useState("");
  const [password, setPassword]=useState("");
  const [passwordCheck, setPasswordCeck]= useState ("");

  const dispatch = useDispatch()
  const history = useHistory();
  // on form submit click handler
  const handleSubmit =(event) =>{
    event.preventDefault();
    
    const newUser ={
      username,
      email,
      password,
      passwordCheck
    }

    const user ={username:username,email:email,
  password:password,passwordCheck:passwordCheck}

    const validate = dispatch(registerAction(user));
    validate
    .then(data => {
      // console.log(data)  
      history.push('/login');

    })
    .catch(error => console.log(error))
    //console.log(newUser);
  }

  let registerData ={
    handleSubmit,
    setUsername,
    setEmail,
    setPassword,
    setPasswordCeck
  }

  return (
    <div id = "login">
      <div className = "container">
    <     div className = "row login-box">
          <BaseLogin/>
          <RegisterForm registerState ={registerData}/>
         </div>
      </div>
   </div>

  )
}
