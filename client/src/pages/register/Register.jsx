import './Register.css'

function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">MegiSocial</h3>
                <span className="loginDesc">
                    Connect with your friends and the world around you with MegiSocial.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Username' type="text" className="loginInput" />
                    <input placeholder='Email' type="email" className="loginInput" />
                    <input placeholder='Password' type="password" className="loginInput" />
                    <input placeholder='Confirm Password' type="password" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Log into you account</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Register