import React, { useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import LoginIcon from "@mui/icons-material/LoginSharp";
import SignUpIcon from "@mui/icons-material/HowToRegSharp";
import "./AuthPage.css";
import { auth, db } from "../../firebase-config";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AutheContext";
import { doc, getDoc, setDoc } from "firebase/firestore";

function AuthPage({ setModalStatus }) {
  const [emailValue, setemailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [rePasswordValue, setRePasswordValue] = useState("");
  const [fullNameValue, setFullNameValue] = useState("");
  const [userTitleValue, setUserTitleValue] = useState("");
  const [showClass, setSignUpClass] = useState(false);

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        emailValue,
        passwordValue
      );
    console.log(user)
    const data = await getDoc(doc(db, "users", user.user.uid))
    if(data.exists()){
      dispatch({type:"LOGIN", payload:user,payload1:data.data()})
      navigate("/");
      setModalStatus(false);
    }
    

      
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        emailValue,
        passwordValue
      );
      await setDoc(doc(db, "users", user.user.uid), {
        fullNameValue,
        userTitleValue,
      });
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="authPage">
      <div className={showClass ? "hideLogin" : "logInBlock"}>
        <form className="modal-form" onSubmit={handleLogin}>
          <h2>Log In</h2>
          <label htmlFor="user-name">User Name</label>
          <input
            type="email"
            name="user-name"
            value={emailValue}
            onChange={(e) => setemailValue(e.target.value)}
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
          <p onClick={() => setSignUpClass(!showClass)}>
            Don't have an account ? Create One.
          </p>
        </form>
      </div>
      <div className={showClass ? "showSignUp" : "hideSignUp"}>
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
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={emailValue}
                onChange={(e) => setemailValue(e.target.value)}
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

          <span
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1rem",
            }}
          >
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
