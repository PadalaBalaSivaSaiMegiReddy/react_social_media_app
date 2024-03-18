import { useRef } from "react";
import "./Register.css";
import axios from "axios";
import { useHistory } from 'react-router-dom';





function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain=useRef();
  const history = useHistory();



  const onClick=async (event)=>{
    event.preventDefault();
    if(password.current.value!==passwordAgain.current.value){
        passwordAgain.current.setCustomValidity("Passwords don't match!!!");
    }
    else{
        const user = {
            username:username.current.value,
            email:email.current.value,
            password:password.current.value,
        };
        try {
            await axios.post("http://localhost:8800/api/auth/register",user)
            history.push('/login'); // Redirect to login page
            
        } catch (error) {
            console.log(error);
        }
    }

  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MegiSocial</h3>
          <span className="loginDesc">
            Connect with your friends and the world around you with MegiSocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={onClick}>
            <input required ref={username} placeholder="Username" type="text" className="loginInput" />
            <input required ref={email} placeholder="Email" type="email" className="loginInput" />
            <input required ref={password}
            minLength={6}
              placeholder="Password"
              type="password"
              className="loginInput"
            />
            <input required ref={passwordAgain}
              placeholder="Confirm Password"
              type="password"
              className="loginInput"
            />
            <button type="submit"  className="loginButton">Sign Up</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Log into you account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
