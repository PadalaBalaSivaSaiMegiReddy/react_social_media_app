import { useContext, useRef } from "react";
import "./Login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (event) => {
    event.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };


  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MegiSocial</h3>
          <span className="loginDesc">
            Connect with your friends and the world around you with MegiSocial.
          </span>
        </div>
        <div className="loginRight" onSubmit={handleClick}>
          <form className="loginBox">
            <input
              placeholder="Email"
              required
              ref={email}
              type="email"
              className="loginInput"
            />
            <input
              minLength={6}
              placeholder="Password"
              required
              ref={password}
              type="password"
              className="loginInput"
            />
            <button type="submit" className="loginButton" disabled={isFetching}>
              {isFetching ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CircularProgress
                    style={{ color: "white", fontSize: "25px" }}
                  />
                </Box>
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/register">
            <button type="button" className="loginRegisterButton">

            {isFetching ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CircularProgress
                    style={{ color: "white", fontSize: "25px" }}
                    />
                </Box>
              ) : (
                "Create a New Account"
                )}


              
            </button>
                </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
