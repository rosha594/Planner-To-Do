import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/LoginSharp";
import SignUpIcon from "@mui/icons-material/HowToRegSharp";
import "./AuthPage.css";

function AuthPage() {
  const [userNameValue, setUserNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [rePasswordValue, setRePasswordValue] = useState("");
  const [fullNameValue, setFullNameValue] = useState("");
  const [userTitleValue, setUserTitleValue] = useState("");
  const [signUpClass,setSignUpClass] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    alert("login");
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    alert("Sign Up");
  };
  return (
    <div className="authPage">
      <div className={signUpClass?"hideLogin":"logInBlock"}>
        <form className="modal-form" onSubmit={handleLogin}>
          <h2>Log In</h2>
          <label htmlFor="user-name">User Name</label>
          <input
            name="user-name"
            value={userNameValue}
            onChange={(e) => setUserNameValue(e.target.value)}
            placeholder="User Name"
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            value={passwordValue}
            onChange={(e) => setPasswordValue(e.target.value)}
            placeholder="Password"
          />

          <button
            type="submit"
            className="btn-success"
            style={{ marginTop: "2rem" }}
          >
            <LoginIcon />
            Log In
          </button>
          <p onClick={()=>setSignUpClass(!signUpClass)}>Don't have an account ? Create One.</p>
        </form>
      </div>
      <div className={signUpClass?"showSignUp":"hideSignUp"}>
        <h2>Sign Up</h2>
        <form className="modal-form" onSubmit={handleSignUp}>
          <div className="modelSignUp">

          <span>
            <label htmlFor="user-name">Full Name</label>
            <input
              name="user-name"
              value={fullNameValue}
              onChange={(e) => setFullNameValue(e.target.value)}
              placeholder="User Name"
              required
            />
          </span>
          <span>
            <label htmlFor="user-name">User Name</label>
            <input
              name="user-name"
              value={userNameValue}
              onChange={(e) => setUserNameValue(e.target.value)}
              placeholder="User Name"
              required
            />
          </span>

          <span>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              placeholder="Password"
              required
            />
          </span>
          <span>
            <label htmlFor="re-password">Re-Enter Password</label>
            <input
              name="re-password"
              value={rePasswordValue}
              onChange={(e) => setRePasswordValue(e.target.value)}
              placeholder="Re-Password"
              required
            />
          </span>
          </div>

          <span style={{display:"flex",flexDirection:"column",marginTop:"1rem"}}>
            <label htmlFor="user-title">Give You a Title</label>
            <input
              name="user-title"
              value={userTitleValue}
              onChange={(e) => setUserTitleValue(e.target.value)}
              placeholder="Ex., Student, Engineer, Doctor etc.,"
              required
            />
          </span>
          <span></span>

          <button
            type="submit"
            className="btn-success"
            style={{ marginTop: "2rem" }}
          >
            <SignUpIcon />
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;
