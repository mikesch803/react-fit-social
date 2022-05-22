import React from "react";
import { Link } from "react-router-dom";
import { LoginForm, SignupForm } from "../../components";
import { default as logo } from "../../assets/images/logo.png";
import "./Landing.css";
import { useForm } from "../../hooks/useForm";
import { guestLogin, login, signup } from "../../reducers/authSlice";
export function Landing() {
  const { loginForm, setLoginForm } = useForm();
  return (
    <div className="landing-page">
      <main className="main-text">
        <Link to="/home">
          <img src={logo} alt="logo" width="80px" height="80px" />
          <h1>Connect</h1>
        </Link>
        <p className="ft-grey">Follow people around you.</p>
        <p className="ft-grey">Connect with your friends.</p>
        <p className="ft-grey">Share what you thinking.</p>
      </main>
      <main className="main-form">
        {loginForm ? <LoginForm  setLoginForm={setLoginForm} guestLogin={guestLogin} login={login}/> : <SignupForm setLoginForm={setLoginForm} signup={signup}/>}
      </main>
    </div>
  );
}
