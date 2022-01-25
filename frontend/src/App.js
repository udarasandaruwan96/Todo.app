
import './App.scss';
import LoginForm from './components/imports/LoginForm';
import BaseLogin from './components/imports/BaseLogin';


function App() {
  return (
    <div id = "login">
      <div className = "container">
        <div className = "row login-box">
          
            <BaseLogin/>
            <LoginForm/>
          {/* <div className = "col-lg-7 bg-collor align-self-center">
              <LoginForm/>
          </div> */}

        </div>
      </div>
      </div>
     
  );
}

export default App;
