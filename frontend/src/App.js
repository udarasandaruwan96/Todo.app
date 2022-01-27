import LoginForm from './components/imports/LoginForm';
import BaseLogin from './components/imports/BaseLogin';
import './App.css';
import './css/login.css';
import './assets/medium-cover.jpg';




function App() {
  return (
    <div id="login">
      <div className="container">
        <div className="row login-box">

          <BaseLogin/>
          <LoginForm/>
          {/* <div className="col-lg-7 bg-color align-self-center">
               <LoginForm/>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
