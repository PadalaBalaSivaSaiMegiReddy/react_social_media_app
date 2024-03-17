import { useRef } from 'react'
import './Login.css'

function Login() {

    const email=useRef();
    const password=useRef();

    const handleClick=(event)=>{
        event.preventDefault()
    }

   
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">MegiSocial</h3>
                <span className="loginDesc">
                    Connect with your friends and the world around you with MegiSocial.
                </span>
            </div>
            <div className="loginRight" onSubmit={handleClick}>
                <form className="loginBox">
                    <input placeholder='Email' required ref={email} type="email" className="loginInput" />
                    <input minLength={6} placeholder='Password' required ref={password} type="password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button type='button' className="loginRegisterButton">Create a New Account</button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Login