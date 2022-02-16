import React,{useState} from 'react';

import BaseLogin from '../imports/BaseLogin';
import LoginForm from '../imports/LoginForm';
import { useDispatch,useStore} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginAction } from '../../container/actions';
//import { error } from 'npmlog';

// import BaseLogin from './components/imports/BaseLogin';
// import LoginForm from './components/imports/LoginForm';

export default function Login() {

  const[email, setEmail] = useState("");
  const [password, setPassword]=useState("");
  
  const dispatch = useDispatch()
  const store = useStore()
  const history = useHistory();

  //handle Submit handler function
  const handleSubmit = (event) =>{
    event.preventDefault();

    const userCredential = {
      email,
      password
    }

    const userdata = {email:email ,password:password}
    const login = dispatch(loginAction(userdata))
    login
    .then(data=>history.push('/'))
    .catch(error=>console.log(error))
    console.log(store.getState())
    //console.log(userCredential);
  }
  return (
        <div>
             <div id = "login">
          <div className = "container">
            <div className = "row login-box">
             <BaseLogin/>
             <LoginForm loginState={{handleSubmit, setEmail, setPassword}}/>
             
            </div>
          </div>
          </div>
        </div>
        
        
        )
}
