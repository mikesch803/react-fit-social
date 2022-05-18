import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { PasswordNotShowIcon } from "../../assets/icons/icons";
import "./SignupForm.css";

export function SignupForm({setLoginForm, signup}) {
  
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [formDetail, setFormDetail] = useState({
    firstName:"",lastName:"",userName:"",email:"",password:"",
    confirmPassword:""
  })
  useEffect(()=>{  
    token && navigate(location?.state?.from?.pathname || "/home");
  },[token])
  
  const signupHandler = (e) => {
    e.preventDefault(e);
    dispatch(signup(formDetail))
  }


  return (
      <form
        className="form form-signup"
        onSubmit={(e) => signupHandler(e)}
      >
        <div className="parent-div mt-1">
          <input
            type="text"
            placeholder="first name"
            className="form-input flex-1"
            name="firstName"
            required
            onChange={(e)=>setFormDetail({...formDetail, [e.target.name]:e.target.value})}
          />
          <input
            type="text"
            placeholder="last name"
            className="form-input flex-1"
            name="lastName"
            required
            onChange={(e)=>setFormDetail({...formDetail, [e.target.name]:e.target.value})}
          />
        </div>
          <input
            type="text"
            placeholder="username"
            className="form-input"
            name="userName"
            required
            onChange={(e)=>setFormDetail({...formDetail, [e.target.name]:e.target.value})}
          />
        <input
          type="text"
          placeholder="email"
          className="form-input"
          name="email"
          required
          onChange={(e)=>setFormDetail({...formDetail, [e.target.name]:e.target.value})}
        />
        <div className="parent-div">
          <input
            placeholder="password"
            className="form-input flex-1"
            name="password"
            required
            onChange={(e)=>setFormDetail({...formDetail, [e.target.name]:e.target.value})}
          />
          <button
            className="form-passwordeye"
           >
              <PasswordNotShowIcon/>
          </button>
        </div>

        <div className="parent-div">
          <input
            placeholder="confirm password"
            className="form-input flex-1"
            name="confirmPassword"
            required
            onChange={(e)=>setFormDetail({...formDetail, [e.target.name]:e.target.value})}
          />
          <button
            className="form-passwordeye"
                     >
              <PasswordNotShowIcon />
          </button>
        </div>
        <div className="form-checkbox signup-checkbox">
          <label>
            <input type="checkbox" required /> I accepted all terms and
            conditions
          </label>
        </div>
        <button className="btn btn-primary form-btn" type="submit">
          create new account
        </button>
      <button className="btn btn-link link-account" onClick={()=>setLoginForm(true)}>
          Already have an account
        </button>
      </form>
  );
}